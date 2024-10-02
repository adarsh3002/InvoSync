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


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
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

app.use("/data",cors(), randomDataRouter);
app.use("/auth",cors(), authRouter);
app.use("/analytics",cors(), analyticsRouter);
app.use("/invoice",cors(), invoiceRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
