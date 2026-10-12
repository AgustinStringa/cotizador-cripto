import React, { useEffect, useState } from "react";
import axios from "axios";
import useMoneda from "../hooks/useMoneda";
import useCripto from "../hooks/useCripto";
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ setFormData }) => {
  const MONEDAS = [
    { codigo: "USD", nombre: "Dólar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];

  const [arrayOptionCripto, setArrayOptionCripto] = useState(null);
  const [monedaElegida, SelectMoneda] = useMoneda(
    "Moneda Fiduciaria",
    "",
    MONEDAS
  );
  const [criptoElegida, SelectCripto] = useCripto(
    "Criptomoneda",
    "",
    arrayOptionCripto ? arrayOptionCripto : []
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCriptosByApi = async () => {
      try {
        const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
        const response = await axios.get(url);
        const {
          data: { Data },
        } = response;
        setArrayOptionCripto(Data);
      } catch (err) {
        console.error("Error al cargar criptomonedas:", err);
      }
    };

    if (!arrayOptionCripto) {
      getCriptosByApi();
    }
  }, [arrayOptionCripto]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!monedaElegida.trim() || !criptoElegida.trim()) {
      setError(true);
      return;
    }
    setError(false);
    setFormData({
      monedaElegida,
      criptoElegida,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error ? (
        <Error msg="Selecciona ambos valores para obtener una cotización en tiempo real" />
      ) : null}

      <div className="campo">
        <SelectMoneda />
      </div>

      <div className="campo">
        <SelectCripto />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3.5 px-6 font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 hover:shadow-indigo-500/40 active:translate-y-0"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>Calcular Cotización</span>
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  setFormData: PropTypes.func.isRequired,
};

export default Form;
