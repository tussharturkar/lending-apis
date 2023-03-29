import mongoose from "mongoose";
const leadSchema = mongoose.Schema({
    leadId: {
        type: String,
        unique: true,
        index: true
    },
    createdDate: {
        type: String,
        default: new Date(),
        index: true
    },
    updatedDate: {
        type: String,
        default: new Date(),
        index: true
    },
    entityId: {
        type: String,
        index: true
    },
    status: {
        type: String,
        default: "partial-application",
        index: true
    },
    personalDetails: {
        firstName: String,
        lastName: String,
        mobNumber: String,
        emailId: String,
        gender: String,

    },
    loanDetails: {
        reqInterest: Number,
        reqLoanAmount: Number
    },
    jobType: {
        type: String,
        index: true
    },
    kyc: {
        panCardNo: String
    },
    employmentDetails: {
        monthlyIncome: Number,
        organizationType: String,
        organizationVintage: Number,
        organizationName: String,
        designation: String,
        annualIncome: Number,
    },
    addressDetails: {
        currentAddress: {
            addLine1: String,
            addLine2: String,
            city: String,
            state: String,
            pincode: String,
        },
        permanentAddress: {
            addLine1: String,
            addLine2: String,
            city: String,
            state: String,
            pincode: String,
        }
    }
});
const Lead = mongoose.model('lead', leadSchema);
export default Lead;
