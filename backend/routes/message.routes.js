const Router = require("express");

const { postMessage } = require("../controllers/message.controller");

const messageRouter = Router();

messageRouter.post("/create",postMessage);

module.exports = messageRouter ;