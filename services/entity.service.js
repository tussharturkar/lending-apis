import entity from '../models/Entity.db.js';

export const getAllEntities = async () => {
    try {
        const allEntities = await entity.find();
        return allEntities;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const create = async (data) => {
    try {
        const isEntities = await entity.findOne({ entityCode: data.entityCode,entityType:data.entityType});
        if (isEntities) {
            throw new Error(`entity ${isEntities.entityType} already exist`)
        } else {
            const meta = await entity.create(data);
            return meta
        }
    } catch (error) {
        throw new Error(error.message);
    }
}