import './App.css';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [schema] = useState([])
  const valor = 'text'
  const valor1 = 'radio'
  const valor2 = 'checkbox'
  function addInput(type) {
    const input = document.createElement('input')
    const valueName = document.getElementById('name')
    const valueLabel = document.getElementById('label')
    input.setAttribute('name', valueName.value)
    input.setAttribute('type', type)
    input.setAttribute ('className','form-control')
    const label = document.createElement('label')
    label.setAttribute('for', valueLabel.value)
    label.innerText = valueLabel.value
    const div = document.createElement('div')
    console.log(input)
    
    document.getElementById('form').appendChild(label)
    document.getElementById('form').appendChild(input)
    document.getElementById('form').appendChild(div)

    const data = {}
    data.name = valueName.value
    data.label = valueLabel.value
    data.type = type
    data.id = Math.random()
    schema.push(data)
    document.getElementById('name').value = ''
    document.getElementById('label').value = '' 
    console.log(schema)

    return input
  }
  

  return (
    
    <div className="App">
      <header className="App-header">
      <form id = 'frm' >
      <label>
        Nombre del componente:
      <input className = 'form-control' id ='name'/>
      </label>
      <br/>
      <label>
        Etiqueta del componente:
      <input className = 'form-control' id = 'label'/>
      </label>
        <p>Agregar input tipo text</p>
        {/* Agregar un name al input */}
      {/* Boton que ayuda agregar el input y la informacion */}
      <button className = 'btn btn-primary' type = 'reset' onClick = {(e)=>{e.preventDefault(); addInput(valor)}}>AGREGAR INPUT</button>

      <p>Agregar input tipo radio</p>
        {/* Agregar un name al input */}
      {/* Boton que ayuda agregar el input y la informacion */}
      <button className = 'btn btn-primary' onClick = {(e)=>{e.preventDefault(); addInput(valor1)}}>AGREGAR RADIO</button>


      <p>Agregar input tipo checkbox</p>
        {/* Agregar un name al input */}
      {/* Boton que ayuda agregar el input y la informacion */}
      <button className = 'btn btn-primary' onClick = {(e)=>{e.preventDefault(); addInput(valor2)}}>AGREGAR CHECKBOX</button>
    </form>
    <br/>
    <form id = 'form' className='bg-success p-2 text-white'>

      </form>
      </header>


      <form id = 'form'>
      </form>

    {schema ? schema.map(item => (
  
        <div key = {item.id}>
          <span>{'{'}</span>
          <label >ID : {item.id}</label><br/>
          <label>name : {item.name} </label><br/>
          <label>label : {item.label}</label><br/>
          <label>type : {item.type}</label><br/>
          <span>{'}'}</span><br/>
        </div>

    )) : null}

    </div>
  );
}

export default App;
