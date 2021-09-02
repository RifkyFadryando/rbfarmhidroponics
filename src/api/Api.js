//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'http://rbfarm.freecluster.eu/api'
})
  
export default Api