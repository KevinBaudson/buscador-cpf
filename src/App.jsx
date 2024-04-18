//react
import{useState} from 'react'
import api from './server/api';
//CSS
import './App.css'






function App() {
  
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  
 
  

  document.addEventListener("keypress", (e)=>{
    
    if(e.key === "Enter"){
      console.log('apertou o Enter')
      const btn = document.getElementById('#btnForm');
      btnForm.click();
    } 
  
  });

  const handleSubmit =async () => {
    

    if(input === ''){
      alert('Digite um CEP válido!')
      return
    }
    try{
      const res = await api.get(`${input}/json`)

      setCep(res.data)
    }catch{
    
    }
  }

  return (
    <>
      <div className="container">
          <h1>Buscador CEP</h1>
        <div className="inputSearch">
          <input 
          type="text" 
          name="cep" 
          placeholder='Digite o cep...'
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          />
          <button type='submit' id='btnForm' onClick={handleSubmit}>
            Buscar
            </button>
        </div>
        {Object.keys(cep).length > 0 && (
          <main className='myForm'>
          <h2>CEP: {cep.cep}</h2>
          <span>Rua: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
          </main>
        )}
          
      </div>
    </>
  )
}

export default App
