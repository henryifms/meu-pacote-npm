import { Router } from "express";
import users from "../app/controllers/UsersController.js"

const routes = new Router();

routes.get("/", users.index);

export default routes;