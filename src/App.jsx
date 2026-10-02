import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import { Spinner, Header, Footer } from '../shared';
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
  const [formData, setFormData] = useState(null);
  const [cotization, setCotization] = useState(null);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    if (formData) {
      setLoadingData(true);
      const { monedaElegida, criptoElegida } = formData;
      const getCotizacion = async () => {
        const urlPriceQuery = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoElegida}&tsyms=${monedaElegida}`
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
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header title="Cotizador Criptomonedas" variant="dark" />
      <div className="container" style={{ flex: 1 }}>
        <div className="image"></div>
        <div>
          <H1>Cotiza criptomonedas al instante</H1>
          <Form setFormData={setFormData}></Form>
          {loadingData ? <Spinner variant="cubes" text="Cotizando criptomonedas..." /> : null}
          {cotization && !loadingData ? <CotizationCard cotizacion={cotization}></CotizationCard> : null}
        </div>
      </div>
      <Footer
        title="Cotizador Criptomonedas"
        description="Consulta las cotizaciones de las principales criptomonedas en tiempo real."
        variant="dark"
      />
    </div>
  );
}

export default App;
