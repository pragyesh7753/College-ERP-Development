export const attachResponseInterceptor = (client) => {
    client.interceptors.response.use((response) => {
        return response;
    },
        error => {
            if (error.response.status === 401) {
                localStorage.removeItem('token');
                window.location.reload();
            }
            return Promise.reject(error);
        });
    return client;
}