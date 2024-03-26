const express = require("express");
const router = express.Router();
const authenticateToken = require("../controllers/middleware");

const userDataPostC = require("../controllers/userDataPostC");
const userDatasendC = require("../controllers/userDatasendC");
const userPicPostC = require("../controllers/userPicPostC");
const userPicsendC = require("../controllers/userPicsendC");

router.post("/data/post", authenticateToken, userDataPostC.PostData);
router.get("/data/send", authenticateToken, userDatasendC.sendData);
router.post("/pic/post", authenticateToken, userPicPostC.PostPic);
router.get("/pic/send", authenticateToken, userPicsendC.sendPic);

module.exports = router;
