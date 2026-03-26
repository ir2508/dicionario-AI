import api from '../api/axios'

export const getWords = async () => {
    try {
        const response = await api.get('/ask')
        return response.data
    }
catch (error) {
        console.error('Erro ao buscar palavras da openai:', error)
        throw error
    }
}