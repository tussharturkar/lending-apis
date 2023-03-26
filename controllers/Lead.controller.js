import { fullName, generateUniqueId } from '../helper/common.service.js';
import { getAllLeads, create } from '../services/leads.service.js';
import { tryCatch } from '../utils/tryCatch.js';

export const getLeads = tryCatch(async (req, res) => {
    const allLeads = await getAllLeads();
    return {
        allLeads
    }
});

export const postLeadDetails = tryCatch(async (req, res) => {
    const leadId = generateUniqueId("APP")
    const meta = req.body;
    meta.leadId = leadId
    console.log(meta)
    const createLead = await create(meta);
    console.log(createLead)
    const customerName = fullName(meta.firstName, meta.lastName)
    return {
        "status": createLead.status ? createLead.status : null,
        "customerName": customerName,
        "leadId": createLead.leadId
    }
});