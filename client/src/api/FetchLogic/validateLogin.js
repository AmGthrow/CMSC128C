import client from '../client'

export const validateLogin = async (username, password) => {
    const params = { username, password }
    try {
        const { data } = await client.get('/api/login', { params })
        return data

    } catch (error) {
        if (error.response?.data) {
            return error.response.data
        }
        return { error: error.message || error }
    }
}