import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "ChaeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 2
    };
    next();
};