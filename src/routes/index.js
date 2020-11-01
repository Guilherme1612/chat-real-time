module.exports = (app) => {
    app.get("/", (req, res) => {
        app.src.controllers.home.index(app, req, res);
    });
}