import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.js";
import newUsersRouter from "./routes/newuser.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);
app.use("/newuser", newUsersRouter);

app.listen(port, () => {
  console.log(`running on port: ${port}`);
});
