import client from '../client'

export const saveEmailAddress = async (email) => {
    try {
        const {data} = await client.post('/api/waitlist', email)
        return data
        
    } catch (error) {
        if(error.response?.data) {
            return error.response.data
        }
        return { error: error.message || error}
    }
}