import { Router } from "express";
export const router = Router();
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  setUser,
} from "../controllers/users.controllers.js";

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.put("/users/:id", setUser);

router.post("/users", createUser);

router.delete("/users/:id", deleteUser);
