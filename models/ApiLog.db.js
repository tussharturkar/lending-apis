import mongoose from "mongoose";
const apiLogSchema = mongoose.Schema({
    timeStamp: {
        type: Date,
        default: new Date()
    },
    method:String,
    endPoint: String,
    headers:String,
    req: String,
    res: String
});

const Apilog = mongoose.model('apilog', apiLogSchema);
export default Apilog;