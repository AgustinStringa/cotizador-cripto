import React, { useEffect, useState } from "react";
import axios from "axios";
import useMoneda from "../hooks/useMoneda";
import useCripto from "../hooks/useCripto";
import Error from "./Error";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Submit = styled.input`
  width: 100%;
  margin: 2rem 0;
  border-radius: 1rem;
  padding: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  background-color: rgb(104, 104, 212);
  color: #fff;
`;
const Form = ({ setFormData }) => {
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];
  /**
   * arrayOptionCripto: use State que trae los datos para el input select de la API
   */
  /**
   * useMoneda y useCripto son custom hooks
   * A su vez, cada uno retorna un state, en el cual se almacena el valor seleccionado por el usuario
   * y un Select que es el componente o los datos HTML que se "ven en pantalla"
   */
  /**
   * error -> useState que determina si el formulario puede ser enviado o no
   */
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
      const {
        data: { Data },
      } = response;
      setArrayOptionCripto(Data);
    };

    if (!arrayOptionCripto) {
      getCriptosByApi();
    }
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
        <Submit type="submit" value="Calcular" />
      </div>
    </form>
  );
};
/**
 * setFormData -> funcion actualizadora de state que comunica datos del formulario con App.js
 */
Form.propTypes = {
  setFormData: PropTypes.func.isRequired,
};
export default Form;
