import mongoose from "mongoose";

const entitySchema = mongoose.Schema({
    entityId: String,
    createdDate: {
        type: Date,
        default: new Date()
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
        required:true
    },
    encryptionType: String,
    headers: Object
});
const Entity = mongoose.model('entity', entitySchema);
export default Entity;