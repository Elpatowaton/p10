import React from 'react'
import styled from '@emotion/styled'

const DIV = styled.div`
 color: #fff;
 font-family: Arial, Helvica, Sans-serif;
`

const P = styled.p`
 font-size: 18px;
 span {
  font-weight: bold;
 }
`
const PR = styled.p`
 font-size: 30px;
 span {
  font-weight: bold;
 }
`

const Cotizacion = ({ resultado }) => {
 if (Object.keys(resultado).length === 0) return null
 console.log(resultado)
 return (
  <DIV>
   <PR>
    El precio es:<span>{resultado.PRICE}</span>
   </PR>
   <P>
    Precio mas alto del dia:<span>{resultado.HIGHDAY}</span>
   </P>
   <P>
    Precio mas bajo del dia:<span>{resultado.LOWDAY}</span>
   </P>
   <P>
    Variazion ultimas 24 horas:<span>{resultado.CHANGEPCT24HOUR}</span>
   </P>
   <P>
    ultima actualizacion:<span>{resultado.LASTUPDATE}</span>
   </P>
  </DIV>
 )
}

export default Cotizacion
