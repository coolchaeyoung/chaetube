import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("Join", { pageTitle: "Join"});
};
export const postJoin = (req, res) => {
    const { body: { name, email, password, password2} } = req;
    if(password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        res.redirect(routes.home);
    }
};
export const login = (req, res) => {
    res.render("Login", { pageTitle: "Login"});
};
export const logout = (req, res) => res.send("Logout");
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("User Detail");
export const editProfile = (req, res) => {
    res.render("editProfile", { pageTitle:"Edit Profile" });
};
export const changePassword = (req, res) => {
    res.render("changePassword", { pageTitle:"Change Password" });
};