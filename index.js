const jsonServer = require("json-server");

const mediaServer = jsonServer.create();

const middleware = jsonServer.defaults();

const router = jsonServer.router("db.json");

mediaServer.use(middleware);

mediaServer.use(router);

const port = 3000;

mediaServer.listen(port, () => {
  console.log("media server started...");
});
