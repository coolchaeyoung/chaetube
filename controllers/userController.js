export const join = (req, res) => 
    res.render("Join", { pageTitle: "Join"});
export const login = (req, res) => 
    res.render("Login", { pageTitle: "Login"});
export const logout = (req, res) => res.send("Logout");
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("User Detail");
export const editProfile = (req, res) => {
    res.render("editProfile", { pageTitle:"Edit Profile" });
}
export const changePassword = (req, res) => {
    res.render("changePassword", { pageTitle:"Change Password" });
}