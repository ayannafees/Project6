import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import User from "../models/user";
import generateToken from "../utils/generateToken";

export const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await User.find({}).select("-password");
  res.status(201).json({
    success: true,
    count: users.length,
    users,
  });
});

export const signup = asyncHandler(async (req: any, res: any) => {
  const { username, email, password, role } = req.body;

  const existingUser = await User.findOne({email});
  if (existingUser) {
    return res.status(409).json({ message: "Email already exists" });
  }

  const newUser = new User({
    username,
    email,
    password,
    role,
  });

  await newUser.save();

  res.status(201).json({
    success: true,
    user: {
      email: newUser.email,
      username: newUser.username,
      role: newUser.role,
      token: generateToken(newUser._id, newUser.username, newUser.role),
    },
  });
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (await user.comparePassword(password)) {
    res.status(201).json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: email.username,
        token: generateToken(user._id, user.username, user.role),
      },
    });
  } else {
    res.status(401);
    throw new Error("incorrect email or password");
  }
});
