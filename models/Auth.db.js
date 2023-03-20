import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    entityId: String,
    createdDate: {
        type: Date,
        default: new Date()
    },
    entityName: String,
    entityCode: String,
    encryptionType: String,
    headers: JSON,
})
