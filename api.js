const { Router } = require("express");

const router = Router();

router.get("/getStuff", (req, res) => {
  res.json({
    data: {
      wow: "WOWO SWEEET!!!!! :D",
      hello: "world",
    },
  });
});

router.post("/doStuff", (req, res) => {
  res.json({
    data: {
      hello: "stuff was done",
      wow: "cool",
    },
    body: req.body,
  });
});

module.exports = router;
