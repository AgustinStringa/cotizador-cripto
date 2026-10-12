import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import { Spinner, Header, Footer } from "../shared";
import CotizationCard from "./components/CotizationCard";
import axios from "axios";
import cryptoImg from "./images/cryptomonedas.51f1d2ed.png";

function App() {
  const [formData, setFormData] = useState(null);
  const [cotization, setCotization] = useState(null);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    if (formData) {
      setLoadingData(true);
      const { monedaElegida, criptoElegida } = formData;
      const getCotizacion = async () => {
        try {
          const urlPriceQuery = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoElegida}&tsyms=${monedaElegida}`;
          const resultUrlPrice = await axios.get(urlPriceQuery);
          const {
            data: { DISPLAY },
          } = resultUrlPrice;
          const dataCotizacion = DISPLAY[`${criptoElegida}`][`${monedaElegida}`];
          dataCotizacion.criptoName = criptoElegida;
          setCotization(dataCotizacion);
        } catch (err) {
          console.error("Error al obtener cotización:", err);
        } finally {
          setLoadingData(false);
        }
      };
      getCotizacion();
    }
  }, [formData]);

  return (
    <div className="flex min-h-dvh flex-col bg-slate-950 text-slate-100">
      <Header title="Cotizador Criptomonedas" theme="cripto" />

      <div className="min-h-full w-full flex-1 px-4 py-8 sm:py-12">
        <main className="mx-auto w-full max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-indigo-950/40 backdrop-blur-sm sm:p-8">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              {/* Columna Izquierda: Ilustración & Badge */}
              <div className="flex flex-col items-center text-center md:col-span-5 md:items-start md:text-left">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Mercado Cripto 24/7</span>
                </div>
                <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                  Cotiza criptomonedas al instante
                </h1>
                <p className="mt-2 text-xs text-slate-400">
                  Monitorea precios, variaciones y máximos diarios con datos directos de CryptoCompare API.
                </p>
                <div className="mt-6 hidden w-full justify-center md:flex">
                  <img
                    src={cryptoImg}
                    alt="Criptomonedas"
                    className="max-h-56 w-auto object-contain drop-shadow-[0_10px_20px_rgba(99,102,241,0.25)]"
                  />
                </div>
              </div>

              {/* Columna Derecha: Formulario & Resultados */}
              <div className="md:col-span-7">
                <Form setFormData={setFormData} />

                {loadingData && (
                  <div className="my-8 flex justify-center">
                    <Spinner variant="cubes" text="Cotizando criptomonedas..." />
                  </div>
                )}

                {cotization && !loadingData && (
                  <CotizationCard cotizacion={cotization} />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer
        title="Cotizador Criptomonedas"
        description="Consulta las cotizaciones de las principales criptomonedas en tiempo real."
        theme="cripto"
      />
    </div>
  );
}

export default App;
