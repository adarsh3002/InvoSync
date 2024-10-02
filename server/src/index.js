import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import randomDataRouter from "./routes/random.route.js";
import authRouter from "./routes/auth.router.js";
import invoiceRouter from "./routes/invoice.router.js";
import analyticsRouter from "./routes/analytics.router.js";
import PDFDocument from "pdfkit-table";
console.log("first0")
const app = express();
dotenv.config();


app.use(cors())
console.log("first")
app.use(express.json());
app.use(cookieParser());

connectDB();


const port = process.env.PORT;

app.get("/",(req,res)=>{
  res.send({
    api:"your backend is running"
  })
})

app.use("/data", randomDataRouter);
app.use("/auth", authRouter);
app.use("/analytics", analyticsRouter);
app.use("/invoice", invoiceRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
