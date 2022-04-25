import axios from 'axios'

const client = axios.create({ baseURL: 'http://localhost:9000' })

export default client