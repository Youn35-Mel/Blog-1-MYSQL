import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/posts", postRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(8800, () => {
  console.log("connected");
});
