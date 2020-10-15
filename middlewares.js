import routes from "./routes";
import multer from "multer";

const multerVideo = multer({dest: "uploads/videos/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "ChaeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 2
    };
    next();
};

export const uploadVideo = multerVideo.single("videoFile");