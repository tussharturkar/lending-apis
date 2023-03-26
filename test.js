import jwt from "jsonwebtoken";

const token = jwt.sign({
    "entityName": "Loantap",
    "entityCode": "loantap",
    "entityType": "partner"}, 'LEWNLWVXEFCSBSCFELONDXTLRZHJNSXCGAOGTGKQ',{ algorithm: 'HS512', noTimestamp: true })
console.log(token)

var veri = jwt.verify(token, 'LEWNLWVXEFCSBSCFELONDXTLRZHJNSXCGAOGTGKQ', function(err, decoded) {
    console.log("decoded  ===",decoded)
});
  