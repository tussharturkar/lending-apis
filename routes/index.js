import express from "express";
import { getLeads, postLeadDetails } from "../controllers/Lead.controller.js";

const router = express.Router();

router.get("/leads", getLeads);
router.post("/leads", postLeadDetails);
router.post("/auth", postLeadDetails);
export default router;

