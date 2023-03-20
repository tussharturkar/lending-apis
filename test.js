import jwt from "jsonwebtoken";

const token = jwt.sign('tushar', 'LEWNLWVXEFCSBSCFELONDXTLRZHJNSXCGAOGTGKQ')
console.log(token)

var veri = jwt.verify(token, 'LEWNLWVXEFCSBSCFELONDXTLRZHJNSXCGAOGTGKQ', function(err, decoded) {
    console.log(decoded) // bar
});
  
console.log(veri) 