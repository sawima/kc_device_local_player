// import axios from 'axios'

// const VUE_APP_BASE_API = 'https://api.kimacloud.com/cicd'
// // const VUE_APP_BASE_API = 'https://api.kimacloud.com/prod'
// // const VUE_APP_BASE_API = 'http://localhost:3000/test'
// // create an axios instance
// const service = axios.create({
//   baseURL: VUE_APP_BASE_API, // url = base url + request url
//   // withCredentials: true, // send cookies when cross-domain requests
//   timeout: 10000 // request timeout
// })

// // response interceptor
// service.interceptors.response.use(
//     /**
//      * If you want to get http information such as headers or status
//      * Please return  response => response
//     */
  
//     /**
//      * Determine the request status by custom code
//      * Here is just an example
//      * You can also judge the status by HTTP Status Code
//      */
//     response => {
//       const res = response.data
//       return res
//     },
//     error => {
//       console.log('err' + error) // for debug
//       // Message({
//       //   message: error.message,
//       //   type: 'error',
//       //   duration: 5 * 1000
//       // })
//       return Promise.reject(error)
//     }
// )
// export default service
