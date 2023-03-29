import Joi from "joi";

const metaSchema = Joi.object({
    personalDetails: Joi.object({
        firstName: Joi.string().max(40).required(),
        lastName: Joi.string().max(40).required(),
        mobNumber: Joi.string().pattern(new RegExp('^[6-9][0-9]{9}$')).required(),
        emailId: Joi.string().max(60).pattern(new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')).required(),
        gender: Joi.string().max(10).pattern(new RegExp('^(?:male|female)$')).required(),
    }),
    jobType: Joi.string().max(40).pattern(new RegExp('^(?:salaried|self-employed)$')).required(),
    kyc: Joi.object({
        panCardNo: Joi.string().max(40).pattern(new RegExp('^[A-Z0-9]{10}$')).required()
    }),
    loanDetails: Joi.object({
        reqInterest: Joi.number().max(60),
        reqLoanAmount: Joi.number().max(2500000)
    }),
    employmentDetails: Joi.object({
        monthlyIncome: Joi.number().integer(),
        organizationType: Joi.string().max(40),
        organizationVintage: Joi.number(),
        organizationName: Joi.string().max(40),
        designation: Joi.string().max(40),
        annualIncome: Joi.number(),
    }),
    addressDetails: Joi.object({
        currentAddress: Joi.object({
            addLine1: Joi.string().max(40),
            addLine2: Joi.string().max(40),
            city: Joi.string().max(40),
            state: Joi.string().max(40),
            pincode: Joi.string().pattern(new RegExp('^[1-9][0-9]{5}$')),
        }),
        permanentAddress: Joi.object({
            addLine1: Joi.string().max(40),
            addLine2: Joi.string().max(40),
            city: Joi.string().max(40),
            state: Joi.string().max(40),
            pincode: Joi.string().pattern(new RegExp('^[1-9][0-9]{5}$')),
        })
    })
});
export default metaSchema;