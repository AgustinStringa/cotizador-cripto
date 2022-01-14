import React from "react";
import useMoneda from "../hooks/useMoneda";

const criptos = [
  { codigo: "", nombre: "Bitcoin" },
  { codigo: "", nombre: "XRP" },
  { codigo: "", nombre: "Ethereum" },
  { codigo: "", nombre: "Bitcoin Cash" },
  { codigo: "", nombre: "Tether" },
  { codigo: "", nombre: "Cripto.com Chain Token" },
  { codigo: "", nombre: "Litecoin" },
  { codigo: "", nombre: "EOS" },
  { codigo: "", nombre: "Bitcoin SV" },
  { codigo: "", nombre: "Baer Chain" },
];

const Form = () => {
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];

  const [SelectMoneda, monedaElegida] = useMoneda(
    "ELIGE TU MONEDA",
    "",
    MONEDAS
  );

  return (
    <form>
      <div className="campo">
        <SelectMoneda></SelectMoneda>
      </div>
      <div className="campo">
        <label htmlFor="">elige tu criptomoneda</label>
        <select name="cripto" id="">
          <option value="btc">Bitcoin</option>
          <option value="et">Ethereum</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div className="campo">
        <input type="submit" value="Calcular" className="btn" />
      </div>
    </form>
  );
};

export default Form;
