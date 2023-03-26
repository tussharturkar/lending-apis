import mongoose from "mongoose";

const leadSchema = mongoose.Schema({
    leadId: {
        type: String,
        unique:true
    },
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
    jobType: {
        type: String,
        enum: {
          values: ['salaried', 'self-employed'],
          message: 'jobType {VALUE} is not supported'
        },
        required:true
      },
    reqInterest: Number,
    reqLoanAmount: Number
});

const Lead = mongoose.model('lead', leadSchema);
export default Lead;
