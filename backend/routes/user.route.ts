import { checkAdmin, checkLoggedIn } from "../middleware/auth.middleware";
import { UserController } from "../controllers/user.controller";
import { Router } from "express";

const userRouter = Router()
//Get all users by admin
userRouter.get("/", checkAdmin,UserController.getAllUsers)
//Get user by id
userRouter.get("/:id", checkLoggedIn,UserController.getUserById)
//Create user by admin
userRouter.post("/",checkAdmin, UserController.createUser)
//Delete user
userRouter.delete("/:id", checkLoggedIn,UserController.deleteUser)
//Update user
userRouter.put("/:id", UserController.updateUser)  
export default userRouter