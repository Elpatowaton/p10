import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import { useEffect } from 'react'
import axios from 'axios'
import Error from './Error'

const INPUT = styled.input`
 margin-top: 20px;
 font-weight: bold;
 font-size: 20px;
 padding: 10px;
 background-color: #66a2fe;
 border: none;
 width: 100%;
 border-radius: 10px;
 color: #fff;
 transition: background-color 0.3s ease;
 &:hover {
  background-color: #326ac0;
  cursor: pointer;
 }
`

const Formulario = ({ guardarMoneda, guardarcriptomoneda }) => {
 // state listado
 const [listacripto, guardarcriptomonedas] = usestate([])
 const [error, guardarError] = useState(false)

 // monedas
 const MONEDAS = [
  { codigo: 'USD', nombre: 'Dolar Estados Unidos' },
  { codigo: 'EUR', nombre: 'Euro' },
  { codigo: 'GBP', nombre: 'Libra Esterlina' },
  { codigo: 'MXN', nombre: 'Peso Mexicano' },
  { codigo: 'COP', nombre: 'Peso Colombiano' },
 ]
 // useHooks
 const [moneda, setMoneda, SelectMoneda] = useMoneda(
  'Elige tu Moneda',
  '',
  MONEDAS
 )
 const [crypto, setCrypto, SelectCrypto] = useCriptomoneda(
  'Elige tu Criptomoneda',
  ''
 )
 //  llamado a la api
 useEffect(() => {
  const consultarAPI = async () => {
   const url =
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
   const resultado = await axios.get(url)
   console.log(resultado.data.Data)
  }
 }, [])

 //sumbit usuario
 const [cotizarMoneda] = (e) => {
  e.preventDefault()

  //validar si estan llenos

  if (moneda === '' || crypto === '') {
   guardarError(true)
   return
  }

  //pasasr los datos al componente principal

  guardarError(false)
  guardarMoneda(moneda)
  guardarcriptomoneda(crypto)
 }
 return (
  <form onSubmit={cotizarMoneda}>
   {error ? <Error mensaje='todos los campos son obligatorios' /> : null}
   <SelectMoneda />
   <SelectCrypto />
   <INPUT type='submit' value='calcular' />
  </form>
 )
}

export default Formulario
