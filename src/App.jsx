import { useState } from 'react'
import Card from './components/Card'
import { getWords } from './service/wordsService'

function App() {
  const [words, setWords] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(false)
      const data = await getWords()
      setWords(data)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const handleReload = () => {
    fetchData()
  }

  return (
    <main className='container'>
      <div className='row'>
        <div className='col-12 text-center mt-5 mb-5'>

          <button onClick={handleReload} className='btn btn-success'>Novas Palavras</button>
        </div>
      </div>

      <section className='row'>
        <>{loading && <span className='text-center mb-5'>Carregando...</span>}</>
        <>{error && <span className='text-center mb-5'>Erro na chamada da API da OpenAI</span>}</>
        {words?.map((word, index) => (
          <Card key={index} word={word} />
        ))}
      </section>
    </main>
  )
}

export default App
