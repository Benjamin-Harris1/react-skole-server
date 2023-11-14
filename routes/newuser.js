import { dbconnect } from "../database.js";
import { Router } from "express";

const newUsersRouter = Router();

newUsersRouter.get("/", async (request, response) => {
  const query = "SELECT * FROM users";
  const [results] = await dbconnect.execute(query);
  response.json(results);
});

newUsersRouter.post("/", async (request, response) => {
  console.log("User posted");
  const user = request.body;
  const query = "INSERT INTO users (name, username, mail, age) VALUES (?, ?, ?, ?)";
  const values = [user.name, user.username, user.mail, user.age];
  const [results] = await dbconnect.execute(query, values);
  response.json(results);
});

export default newUsersRouter;
