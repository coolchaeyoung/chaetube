import express from "express";
import morgan from "morgan"
import helmet from "helmet";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import connectMongo from "connect-mongo";
import mongoose from "mongoose";
import "./passport";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import apiRouter from "./routers/apiRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express();

const MongoStore = connectMongo(session);

app.use(helmet());
app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded( {extended : false } ));
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;