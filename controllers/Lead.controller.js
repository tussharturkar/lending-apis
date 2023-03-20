import { fullName, generateLeadId } from '../helper/common.service.js';
import { getAllLeads, create } from '../services/leads.service.js';
import { tryCatch } from '../utils/tryCatch.js';

export const getLeads = tryCatch(async (req, res) => {
    const allLeads = await getAllLeads();
    return {
        allLeads
    }
});

export const postLeadDetails = tryCatch(async (req, res) => {
    const leadId = generateLeadId("APP")
    const meta = req.body;
    meta.leadId = leadId
    const createLead = await create(meta);
    const customerName = fullName(meta.firstName, meta.lastName)
    return {
        "status": createLead.status,
        "customerName": customerName,
        "leadId": createLead.leadId
    }
});