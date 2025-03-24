const isProduction = true

export const BASEURL = isProduction ? "https://saitm-erp.onrender.com/api/v1" : "http://172.16.15.121:8000/api/v1";
export const URLS = {
    AUTHENTICATION: {
        LOGIN: "/auth/login"
    }
}