import React from 'react'

const Input = ({setHabilitar}) => {
  const validarEstado = inputPassword => {
    if(inputPassword === "252525")
      setHabilitar(true)
    else
      setHabilitar(false)
  }

  return (
      <form>
        <label for="name">Nombre</label>
        <input id='input-name' type="text" placeholder='Ingrese su nombre'/>
        <label for="password">Contraseña</label>
        <input id='input-password' type="password" placeholder='Ingrese contraseña' 
        onChange={(e) => validarEstado(e.target.value)}/>
      </form>
  )
}

export default Input