import React from 'react'
import Saludo from '../src/components/saludo';

const Index = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
            <h1>Bienvenido a mi sitio</h1>
        </div>
        <div className="col-sm-4"></div>
      </div>
      <Saludo />
    </div>
  )
}

export default Index
