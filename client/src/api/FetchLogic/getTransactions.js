import client from '../client'

export const getTransactions =  async () => {

    try {

        const {data} = await client.get('/api/all-transactions')

        return data

    }catch (error) {
        
        if(error.response?.data) return error.response.data
    
        return {error: error.message || error}
    }
}