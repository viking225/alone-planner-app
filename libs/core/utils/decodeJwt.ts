export function decodeJwt(token: string) {
    try
    {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        console.warn('Cannot decode JWT token.')
        return null
    }
}