import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
  border: 1px solid snow;
  padding: 1rem;
  color: snow;
  font-size: 2rem;
`;
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  & > h2 {
    margin: 0;
  }
`;
const IMG = styled.img`
  max-height: 50px;
  margin: 0 1rem;
`;
const CotizationCard = ({ cotizacion }) => {
  const NameValue = document.querySelector(
    `option[value="${cotizacion.criptoName}"]`
  ).innerText;

  return (
    <Card>
      <ImgContainer>
        <h2>{NameValue ? NameValue : cotizacion.criptoName}</h2>
        <IMG
          src={`https://www.cryptocompare.com${cotizacion.IMAGEURL}`}
          alt="imagen cripto moneda"
        />
      </ImgContainer>
      <h2>El precio es: {cotizacion.PRICE}</h2>{" "}
      <p>Precio más alto del día: {cotizacion.HIGHDAY}</p>
      <p>Precio más bajo del día: {cotizacion.LOWDAY}</p>
      <p>Variación últimas 24 hs: {cotizacion.CHANGEPCT24HOUR}</p>
      <p>Ultima actualización de la API: {cotizacion.LASTUPDATE}</p>
    </Card>
  );
};

export default CotizationCard;
