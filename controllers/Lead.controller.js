import { fullName} from '../helper/common.service.js';
import { getAllLeads, create } from '../services/leads.service.js';
import { tryCatch } from '../utils/tryCatch.js';

export const getLeads = tryCatch(async (req, res) => {
    const allLeads = await getAllLeads();
    return {
        allLeads
    };
});

export const createLead = tryCatch(async (req, res) => {
   
    const createLead = await create(req);
    const customerName = fullName(createLead.personalDetails.firstName, createLead.personalDetails.lastName);
    return {
        "status": createLead.status ? createLead.status : null,
        "customerName": customerName,
        "leadId": createLead.leadId
    };
});