import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import { Spinner, Header, Footer } from '../shared';
import CotizationCard from './components/CotizationCard';
import axios from "axios";

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
    <div className="flex min-h-dvh flex-col">
      <Header title="Cotizador Criptomonedas" variant="dark" />
      <div className="container flex-1">
        <div className="image"></div>
        <div>
          <h1 className="mt-12 text-[3rem] text-white uppercase min-[992px]:mt-0 after:block after:h-[10px] after:w-2/5 after:rounded-[5px] after:bg-[rgb(104,104,212)] after:content-['']">
            Cotiza criptomonedas al instante
          </h1>
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
