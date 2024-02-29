const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            // Return the value of the cookie
            return decodeURIComponent(cookie.substring(name.length + 1));
        }
    }
    return null;
}

export const getToken = () => {
    const token_ = "Bearer " + getCookie('token');
    if ((token_.includes('null')))
        return false;
    return token_
}

export const setToken = (token) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    const cookieString = `token=${encodeURIComponent(token)}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieString;
}

export function clearCookie(cookieName) {
    const pastExpiration = new Date(0).toUTCString();
    document.cookie = `${cookieName}=; expires=${pastExpiration}; path=/`;
}