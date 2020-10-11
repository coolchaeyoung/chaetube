import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "ChaeTube";
    res.locals.routes = routes;
    next();
};