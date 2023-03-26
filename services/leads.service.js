import leads from '../models/Lead.db.js';

export const getAllLeads=  async()=> {
    try {
        const allLeads = await leads.find();
        return allLeads;
    } catch (error) {
        throw new Error(error.message);
    }

}
export const create=async(data)=> {
    try {
        const meta = await leads.create(data);
        return meta;
    } catch (error) {
        throw new Error(error.message);
    }

}