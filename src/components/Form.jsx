import React, { useEffect, useState } from "react";
import axios from "axios";
import useMoneda from "../hooks/useMoneda";
import useCripto from "../hooks/useCripto";
import Error from "./Error";
const Form = ({ setFormData }) => {
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];
  const [arrayOptionCripto, setArrayOptionCripto] = useState(null); // STATE
  const [monedaElegida, SelectMoneda] = useMoneda(
    "ELIGE TU MONEDA",
    "",
    MONEDAS
  ); //CUSTOM HOOK
  const [criptoElegida, SelectCripto] = useCripto(
    "ELIGE TU CRIPTOMONEDA",
    "",
    arrayOptionCripto ? arrayOptionCripto : []
  ); //CUSTOM HOOK
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCriptosByApi = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const response = await axios.get(url);
      console.log(response);
      const {
        data: { Data },
      } = response;
      setArrayOptionCripto(Data);
    };

    if (!arrayOptionCripto) {
      console.log("consultando");
      getCriptosByApi();
    }

    // setFormData({
    //   monedaElegida,
    //   criptoElegida,
    // });
  }, []);

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
    <form onSubmit={handleSubmit}>
      {error ? (
        <Error
          msg={"Selecciona ambos valores para obtener una cotizacion"}
        ></Error>
      ) : null}
      <div className="campo">
        <SelectMoneda></SelectMoneda>
      </div>
      <div className="campo">
        <SelectCripto></SelectCripto>
      </div>
      <div className="campo">
        <input type="submit" value="Calcular" className="btn" />
      </div>
    </form>
  );
};

export default Form;
