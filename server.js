import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/routes.js";
const app = express();

dotenv.config();
app.use(express.json());
app.use("/api/products", router);

app.get("/", (req, res) => {
  res.send("Bonjour!");
});

const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// app.listen(() => {
//   connectDB(MONGO_URI);
//   console.log("MongoDb Connected !");
//   console.log(`Server running http://localhost:${port}`);
// });

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    console.log("MongoDb Connected !");
    app.listen(port, () => {
      console.log(`Server running http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
