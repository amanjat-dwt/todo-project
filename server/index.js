import express from "express";
import mongoose from "mongoose";
import taskRoutes from "./routes/tasks.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

const PORT = 5000;
const URL =
  "mongodb+srv://ashusingh:ashusingh47@cluster0.xderf.mongodb.net/DWT?retryWrites=true&w=majority";

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/tasks", taskRoutes);

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
