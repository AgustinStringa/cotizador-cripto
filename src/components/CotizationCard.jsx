import React from "react";

const CotizationCard = ({ cotizacion }) => {
  const NameValue = document.querySelector(
    `option[value="${cotizacion.criptoName}"]`
  ).innerText;

  return (
    <div className="border border-[snow] p-4 text-[2rem] text-[snow]">
      <div className="flex items-center [&>h2]:m-0">
        <h2>{NameValue ? NameValue : cotizacion.criptoName}</h2>
        <img
          className="mx-4 max-h-[50px]"
          src={`https://www.cryptocompare.com${cotizacion.IMAGEURL}`}
          alt="imagen cripto moneda"
        />
      </div>
      <h2>El precio es: {cotizacion.PRICE}</h2>{" "}
      <p>Precio más alto del día: {cotizacion.HIGHDAY}</p>
      <p>Precio más bajo del día: {cotizacion.LOWDAY}</p>
      <p>Variación últimas 24 hs: {cotizacion.CHANGEPCT24HOUR}</p>
      <p>Ultima actualización de la API: {cotizacion.LASTUPDATE}</p>
    </div>
  );
};

export default CotizationCard;
