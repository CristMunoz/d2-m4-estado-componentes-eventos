import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [habilitar, setHabilitar] = useState(false)

  return (
    <div className="App">
      <Header titulo="Desafío: Estado de los componentes y eventos"/>
      <div className='container'>
        <Input setHabilitar={setHabilitar} />
        <Button habilitar={habilitar} />
      </div>
    </div>
  );
}

export default App;
