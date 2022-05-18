import { Router } from "express";
import auth from "./routes/auth";

const router = Router();

router.get("/getStuff", (req, res) => {
  try {
    const { q } = req.query;
    if (!q) throw "Please provide a query string";

    res.status(200).json({
      data: {
        wow: "WOWO SWEEET!!!!! 😂😐😬",
        hello: ["world", "cool", "great"],
      },
      query: q,
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.post("/doStuff", (req, res) => {
  try {
    const { userid } = req.body;
    if (!userid) throw "Please provide a user id";

    res.status(200).json({
      data: {
        hello: "stuff was done",
        wow: ["cool", "most", "excellent"],
      },
      body: req.body,
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.use("/auth", auth);

export default router;
