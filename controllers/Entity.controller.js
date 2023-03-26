import { tryCatch } from "../utils/tryCatch.js";
import { getAllEntities ,create} from "../services/entity.service.js";
import { generateUniqueId } from "../helper/common.service.js";

export const getEntity = tryCatch(async (req, res) => {
    const entities = await getAllEntities()
    return entities;
})
export const createEntity = tryCatch(async (req, res) => {
    const entityId = generateUniqueId('EN');
    const meta = req.body;
    meta.entityId = entityId
    const createEntity = await create(meta);
    console.log(req.entity)
    return {
        entityId:createEntity.entityId,
        success: true,
        status:createEntity.status
    }
})