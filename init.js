import dotenv from "dotenv";
import "./db";
import app from "./app";
import "./models/Video";
import "./models/Comment";
import "./models/User";
dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
