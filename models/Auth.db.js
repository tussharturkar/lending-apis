import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    entityId: {
        type: String,
        index: true
    },
    createdDate: {
        type: Date,
        default: new Date()
    },
    entityName: String,
    entityCode: String,
    encryptionType: {
        type: String,
        index: true
    },
    headers: Object,
})
