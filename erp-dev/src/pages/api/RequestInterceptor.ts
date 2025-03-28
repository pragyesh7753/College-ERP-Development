export const attachRequestInterceptor = (client) => {
    client.interceptors.request.use((config) => {
        const token = getBarrierToken('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
        (error) => {
            return Promise.reject(error);
        });
    
    return client;
}

// function getBarrierToken(){
//     return localStorage.getItem('token');
// }

export function getBarrierToken(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }