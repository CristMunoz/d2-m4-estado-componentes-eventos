import React from 'react'

const Button = ({habilitar}) => {
  return (
    <button disabled={!habilitar}>
      Iniciar sesión
    </button>
  )
}

export default Button