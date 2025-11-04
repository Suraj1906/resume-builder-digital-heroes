import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
await connectDB();

// ✅ CORS setup — allow deployed frontend + local development
app.use(
  cors({
    origin: [
      "https://resume-builder-qb2v.vercel.app", // 🔹 your deployed frontend URL
      "http://localhost:5173"             // 🔹 local Vite/React dev server
    ],
    credentials: true, // optional, only if using cookies/auth headers
  })
);

app.use(express.json());

app.get("/", (req, res) => res.send("Server is live..."));
app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
