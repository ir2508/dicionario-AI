import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='container'>
        <div className='row'>
          <div className='col-12 text-center mt-5 mb-5'>

        <button className='btn btn-success'>Novas Palavras</button>
          </div>
        </div>

        <section className='row'>
          <Card></Card>  
          <Card></Card>  
          <Card></Card>  
          <Card></Card>  
          <Card></Card>  
        </section>
    </main>
  )
}

export default App
