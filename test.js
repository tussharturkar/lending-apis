import jwt from "jsonwebtoken";

const token = jwt.sign({
    "entityId" : "EN-2023-2-26-92-18-15-15-92",
    "entityName": "Loantap",
    "entityCode": "loantap",
    "entityType": "lender"}, 'LEWNLWVXEFCSBSCFELONDXTLRZHJNSXCGAOGTGKQ',{ algorithm: 'HS512', noTimestamp: true })
console.log(token)

var veri = jwt.verify(token, 'LEWNLWVXEFCSBSCFELONDXTLRZHJNSXCGAOGTGKQ', function(err, decoded) {
    console.log("decoded  ===",decoded)
});
  