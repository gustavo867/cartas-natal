import express from "express";
import LetterController from "./controllers/LetterController";

const routes = express();

const letterController = new LetterController();

routes.get("/letters", letterController.show);

routes.post("/letters", letterController.create);

export default routes;
