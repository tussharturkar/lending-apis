import lead from '../models/Lead.db.js';
import { getAllLeads } from '../services/leads.service.js';
import { http } from '../services/response.service.js';

export const getLeads = async (req, res) => {
    let data = {};
    try {
        const allLeads = await getAllLeads();
        data = {
            allLeads
        }
    } catch (error) {
        data = error.message;
    }
    const response = http(req, data)
    res.status(response.statusCode).json(response)
}

export const postLeadDetails = async (req, res) => {
    let data = {}
    try {
        
    } catch (error) {
        
    }
}