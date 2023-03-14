export function currentDate() {
    const date = new Date();
    return `${date.getFullYear}-${date.getMonth}-${date.getDate}`;
}
export function currentTime() {
    const date = new Date();
    return `${date.getHours}-${date.getMinutes}-${date.getSeconds}`;
}
export function generateLeadId(prefix) {
    const random = 1000 * Math.random(1000);
    return `${prefix}-${currentDate}-${currentTime}-${random}`;
}