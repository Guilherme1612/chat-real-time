module.exports = (app) => {
    app.get("/chat", (req, res) => {
        app.src.controllers.chat.index(app, req, res);
    });

    app.post("/chat", (req, res) => {
        app.src.controllers.chat.index(app, req, res);
    });
}