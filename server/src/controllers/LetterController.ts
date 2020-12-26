import { Request, Response } from "express";
import db from "../database/connection";

export default class LetterController {
  async show(req: Request, res: Response) {
    const { state, city } = req.query;
    if (!state || !city) {
      const letter = await db("letters");
      return res.status(200).json(letter);
    }

    const letter = await db("letters")
      .where("letters.city", "=", `${city}`)
      .where("letters.state", "=", `${state}`);

    return res.status(200).json(letter);
  }
  async create(req: Request, res: Response) {
    const { name, city, state, letter, whatsapp, email } = req.body;

    const trx = await db.transaction();

    try {
      await trx("letters").insert({
        name,
        city,
        state,
        letter,
        whatsapp,
        email,
      });

      await trx.commit();

      return res.status(200).json({
        success: true,
        created: {
          name,
          city,
          state,
          letter,
          whatsapp,
          email,
        },
      });
    } catch (err) {
      await trx.rollback();

      return res.status(400).json({
        success: false,
        error: "Unexpected error while creating a new letter.",
        parameters: {
          name,
          city,
          state,
          letter,
          whatsapp,
          email,
        },
        error_log: err,
      });
    }
  }
}
