import axios from 'axios';
import store from '../index';
import router from '../../router'

const productionUrl = 'https://1931-2a02-cb80-4029-84c1-954d-25e-41e3-f418.ngrok.io/api/';
const testingUrl = 'https://1931-2a02-cb80-4029-84c1-954d-25e-41e3-f418.ngrok.io/api/';

export default() => {
    let token = store.state.auth.user != null ? store.state.auth.user.token : '';
    const request = axios.create({
        baseURL: process.env.NODE_ENV === 'production' ? productionUrl : testingUrl,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }
    });

    request.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, function (error) {
          if(error.response.status === 401){
              store.dispatch('auth/logout');
              router.push('/login')
          }else if(error.response.status === 404){
              alert(JSON.stringify(error.response))
          }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      });


    return request;
    
}