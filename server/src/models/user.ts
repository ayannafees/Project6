import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  // name: string
  email: string;
  password: string;
  username: string;
  role: string;
  token?: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    username: {
      type: String,
      trim: true,
      lowercase: true,
    },
    role: {
      type: String,
      enum: ["editor", "youtuber"],
      default: "youtuber", // Default role is set to 'editor'
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  const user = this as IUser;

  if (!user.isModified("password")) return next();

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});

UserSchema.methods.comparePassword = async function (password: string) {
  const user = this as IUser;
  return bcrypt.compareSync(password, user.password);
};

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
