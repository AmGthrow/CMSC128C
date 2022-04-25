import client from '../client'

export const validateLogin = async (username, password) => {
    const data = { username, password }
    try {
        const response = await client.post('/api/login', data)
        return response

    } catch (error) {
        if (error.response?.data) {
            return error.response.data
        }
        return { error: error.message || error }
    }
}