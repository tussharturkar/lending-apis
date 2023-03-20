import * as dotenv from 'dotenv';
dotenv.config()

let envProps = {
    dbUrl: process.env.DATABASE_URL,
    port: process.env.PORT || 8080,
    secretKey:process.env.SECRET_KEY,
}

export default envProps;