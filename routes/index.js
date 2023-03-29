import express from "express";
import { getLeads, createLead } from "../controllers/Lead.controller.js";
import { getEntity, createEntity } from "../controllers/Entity.controller.js";

const router = express.Router();

router.get("/lead/all-leads", getLeads);
router.post("/lead/create-lead", createLead);
router.get("/entity/all-entities", getEntity);
router.post("/entity/create-entity", createEntity);

export default router;

