export const responseHandler = (response) => {
    return {
        code: response.status,
        status: response.statusText,
        data: response.data,
        error: response.status >= 400
    }
}