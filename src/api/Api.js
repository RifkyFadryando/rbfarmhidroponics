//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://rbhidroponics.web.id/api'
})
  
export default Api
