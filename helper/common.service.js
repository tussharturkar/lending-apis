import * as crypto from 'crypto';
import config from '../config.js'
export function currentDate() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}
export function currentTime() {
    const date = new Date();
    return `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
}
export function currentDateTime() {
    return `${currentDate()}-${currentTime()}`
}
export function generateUniqueId(prefix) {
    const random = Math.round(100000 * Math.random(100000));
    return `${prefix}-${currentDateTime()}-${random}`;
}

export function fullName(firstName, lastName, middleName = '') {
    const withMN = `${firstName} ${middleName} ${lastName}`;
    const withOutMN = `${firstName} ${lastName}`;
    return middleName ? withMN : withOutMN;
}

export function createHash(string) {
    try {
        const secret = config.secretKey;
        // Calling createHash method
        const hash = crypto.createHash('sha256', secret)
        // updating data
        .update(string)
        // Encoding to be used
        .digest('hex');
    return hash    
        
    } catch (error) {
        throw new Error(error);
    }
}
