import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  try {
    // do auth stuff
    const { token } = req.body;
    if (!token) throw "Please provide a token";
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

export default router;
