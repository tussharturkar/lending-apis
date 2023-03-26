import express from "express";
import { getLeads, postLeadDetails } from "../controllers/Lead.controller.js";
import { getEntity, createEntity } from "../controllers/Entity.controller.js";

const router = express.Router();

router.get("/leads", getLeads);
router.post("/leads", postLeadDetails);
router.get("/entity", getEntity);
router.post("/entity", createEntity);
export default router;

