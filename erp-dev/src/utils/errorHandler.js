import axios from 'axios';

export const errorHandler = (error) => {
   if(axios.isAxiosError(error)){
       if(error.response){
           return {
               code: error.response.status || 500,
               status: false,
               data: error.response.data || 'Something went wrong',
               error: true
           }
       }
       return {
           code: 500,
           status: 'Internal Server Error',
           data: 'Something went wrong',
           error: true
       }
   }
}