const { addNoteHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
    option: {
      cors: {
        origin: ["*"],
      },
    },
  },
];

module.exports = routes;
