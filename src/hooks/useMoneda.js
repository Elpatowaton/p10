import { useState } from 'react'
import styled from '@emotion/styled'

const LABEL = styled.label`
 font-family: 'Bebas Neue', cursive;
 color: #fff;
 text-transform: uppercase;
 font-weight: bold;
 font-size: 2.4rem;
 margin-top: 2rem;
 display: block;
`
const SELECT = styled.select`
 width: 100%;
 display: block;
 padding: 1rem;
 -webkit-appearance: none;
 border-radius: 10px;
 border: none;
 font-size: 1.2rem;
`

const useMoneda = (label, stateInitial, options) => {
 // useState
const [state, setState] = useState(stateInitial)
const Seleccionar = () => (
  <>
   <LABEL>Elije tu Moneda</LABEL>
   <SELECT onChange={(e) => setState(e.target.value)} value={state}>
    <option value=''>- Seleccione -</option>
    {options.map((option) => (
     <option key={option.codigo} value={option.codigo}>
      {option.nombre}
     </option>
    ))}
   </SELECT>
  </>
 )
 return [state, setState, Seleccionar]
}

export default useMoneda

