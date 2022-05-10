import client from '../client'

export const getTransactions =  async (limit, pageNo) => {

    try {

        const {data} = await client.get(`/api/all-transactions?limit=${limit}&pageNo=${pageNo}`)

        return data

    }catch (error) {
        
        if(error.response?.data) return error.response.data
    
        return {error: error.message || error}
    }
}