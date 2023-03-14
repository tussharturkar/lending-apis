import mongoose from "mongoose";

const leadSchema = mongoose.Schema({
    leadId: String,
    createdDate: {
        type: Date,
        default: new Date()
    },
    status: {
        type: String,
        default: "partial-application"
    },
    firstName: String,
    lastName: String,
    mobNumber: String,
    emailId: String,
    jobType: String,
    reqInterest: Number,
    reqLoanAmount: Number
});

const Lead = mongoose.model('lead', leadSchema);
export default Lead;
