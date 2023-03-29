import { tryCatch } from "../utils/tryCatch.js";
import { getAllEntities ,create} from "../services/entity.service.js";
import { generateUniqueId } from "../helper/common.service.js";

export const getEntity = tryCatch(async (req, res) => {
    const entities = await getAllEntities()
    return entities;
})
export const createEntity = tryCatch(async (req, res) => {
    const entityId = generateUniqueId(`EN-${req.body.entityCode}`);
    const meta = req.body;
    meta.entityId = entityId
    const createEntity = await create(meta);
    return {
        entityId:createEntity.entityId,
        success: true,
        status:createEntity.status
    }
})