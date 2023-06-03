import express,{Express} from "express";
import { connectToDatabase } from "./services/database.service";
import cors from 'cors'
import { portfolioRouter } from "./routes/portfolio.router";


const app = express()

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/portfolio", portfolioRouter);




connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`server started at ${port}`);
    });
  })
  .catch((error: Error) => {
    console.error(`Databased connection failed ${error}`);
    process.exit();
  });