import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("Join", { pageTitle: "Join"});
};
export const postJoin = async (req, res, next) => {
    const { body: { name, email, password, password2} } = req;
    if(password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        try {
            const user = await User({
                name,
                email,
                avatarUrl: "/static/avatar/defaultProfile.jpg"
            });
            await User.register(user, password);
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};
export const getLogin = (req, res) => {
    res.render("Login", { pageTitle: "Login"});
};

export const postLogin = passport.authenticate("local", {
   failureRedirect: routes.login,
   successRedirect: routes.home 
});

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
};

export const getMe = (req, res) => {
    res.render("userDetail", { pageTitle: "User Detail", user: req.user});
};

export const userDetail = async (req, res) => {
    const { params: { id } } = req;
    try{
        const user = await User.findById(id);
        res.render("userDetail", { pageTitle: "User Detail", user });
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const getEditProfile = (req, res) => {
    res.render("editProfile", { pageTitle:"Edit Profile" });
};
export const postEditProfile = async (req, res) => {
    const {
        body:{ name, email },
        file
    } = req;
    try{
        await User.findByIdAndUpdate(req.user.id, {
            name,
            email,
            avatarUrl: file ? `/${file.path}` : req.user.avatarUrl
        });
        res.redirect(routes.userDetail(req.user.id));
    } catch (error) {
        console.log(error);
        res.render("editProfile", { pageTitle: "Edit Profile" });
    }
};

export const getChangePassword = (req, res) => {
    res.render("changePassword", { pageTitle:"Change Password" });
};