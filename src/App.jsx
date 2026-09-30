import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Spinner from './components/Spinner/Spinner';
import CotizationCard from './components/CotizationCard';
import styled from '@emotion/styled';
import axios from "axios";

const H1 = styled.h1`
text-transform: uppercase;
color: #fff;
font-size: 3rem;
margin-top: 3rem;
@media (min-width: 992px){
  margin-top: 0;
}
&::after{
  content: '';
  width: 40%;
  height: 10px;
  border-radius: 5px;

  background-color: rgb(104, 104, 212);
  display: block;
}
`
function App() {
  /**
   * formData -> state que maneja datos que vienen del componente Form
   */
  /**
   * cotizacion -> state que maneja datos recibidos de la API
   */
  /**
   * loadingData -> state para alternar animacion de carga
   */
  const [formData, setFormData] = useState(null);
  const [cotization, setCotization] = useState(null);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    if (formData) {
      setLoadingData(true);
      const { monedaElegida, criptoElegida } = formData;
      const getCotizacion = async () => {
        const urlPriceQuery = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoElegida}&tsyms=${monedaElegida}`
        //consultar cno datos del usuario en el state
        const resultUrlPrice = await axios.get(urlPriceQuery);
        const { data: { DISPLAY } } = resultUrlPrice;
        const dataCotizacion = DISPLAY[`${criptoElegida}`][`${monedaElegida}`];
        dataCotizacion.criptoName = criptoElegida;
        setCotization(dataCotizacion);
      }
      getCotizacion();
      setTimeout(() => {
        setLoadingData(false);
      }, 3000);

    }
  }, [formData]);

  return (
    <div className="container">
      <div className="image"></div>
      <div>
        <H1>Cotiza criptomonedas al instante</H1>
        <Form setFormData={setFormData}></Form>
        {loadingData ? <Spinner></Spinner> : null}
        {cotization && !loadingData ? <CotizationCard cotizacion={cotization}></CotizationCard> : null}
      </div>
    </div>
  );
}

export default App;
