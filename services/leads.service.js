import leads from '../models/Lead.db.js';
import metaSchema from '../validations/leads.validation.js';
import { generateUniqueId,currentDateTime } from '../helper/common.service.js';

export const getAllLeads = async () => {
    try {
        const allLeads = await leads.find();
        return allLeads;
    } catch (error) {
        throw new Error(error.message);
    }

}
export const create = async (data) => {
    try {
        let meta = await validateData(data.body);
        const leadId = generateUniqueId("APP");
        meta.leadId = leadId;
        meta.entityId = data.entity.entityId;
        meta.createdDate = currentDateTime();
        meta.updatedDate = currentDateTime();
        meta = await leads.create(meta);
        return meta;
    } catch (error) {
        throw new Error(error.message);
    }

}

const validateData = async (data) => {
    try {
        const { error, value } = await metaSchema.validate(data);
        if (error) {
            const { details } = error;
            const { message, context, type } = details[0];
            if (type === 'string.pattern.base') {
                throw new Error(`${context.key} is invalid`);
            } else {
                throw new Error(message);
            }
        }
        return value
    } catch (error) {
        throw new Error(error.message);
    }
}