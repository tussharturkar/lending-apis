import leads from '../models/Lead.db.js';

export async function getAllLeads() {
    const allLeads = await leads.find();
    return allLeads;
}