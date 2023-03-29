import mongoose from "mongoose";

const entitySchema = mongoose.Schema({
    entityId: String,
    createdDate: {
        type: Date,
        default: new Date(),
        timestamp:true
    },
    status: {
        type: String,
        default:'active'
    },
    entityName: {
        type: String,
        required:true
    },
    entityCode: {
        type: String,
        required:true
    },
    entityType: {
        type: String,
        enum: {
          values: ['lender', 'partner'],
          message: 'entity type must be partner or lender'
        },
        required:true
    },
    authType: String,
    headers: Object
});
const Entity = mongoose.model('entity', entitySchema);
export default Entity;