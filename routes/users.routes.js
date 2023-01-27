import express from "express";
import bcrypt from "bcrypt";
import { createUsers, getUsersByName } from "../services/users.services.js";
const router = express.Router();
import jwt from 'jsonwebtoken';

async function generateHashedPassword(password) {
  const NO_OF_ROUNDS = 1;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(salt);
  console.log(hashedPassword);
  return hashedPassword;
}

router.post("/signup", async function (request, response) {
  const { username, password } = request.body;
  // console.log(data);

  const userFromDB = await getUsersByName(username);
  console.log(userFromDB);
  // response.send(userFromDB);

  if (userFromDB) {
    response.send({ message: "OOPS!!👀 Username is reserved" });
  } else if (password.length < 8) {
    response
      .status(400)
      .send({ message: "Give atleast 8 characters to save your password🛡️" });
  } else {
    const hashedPassword = await generateHashedPassword(password);
    const result = await createUsers({
      username: username,
      password: hashedPassword,
    });
    response.send(result);
  }
});

router.post("/login", async function (request, response) {
  const { username, password } = request.body;
  // console.log(data);

  const userFromDB = await getUsersByName(username);
  // console.log(userFromDB);
  // response.send(userFromDB);

  if (!userFromDB) {
    response.status(401).send({ message: "OOPS!!👀Invalid Credentials" });
  } else {
    const storedDBPassword = userFromDB.password;
    const isPasswordCheck = await bcrypt.compare(password, storedDBPassword);
    console.log(isPasswordCheck);
    if (isPasswordCheck) {
    const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY);
      response.send({ message: "Logged in Successfully👍😍", token });
    } else {
      response.status(401).send({ message: "OOPS!!👀Invalid Credentials" });
    }
  }
});

export default router;
