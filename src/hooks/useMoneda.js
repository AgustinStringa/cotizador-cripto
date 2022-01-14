import React, { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
display: block;
width: 100%;
color: #fff;
font-size: 2.5rem;
margin: 1rem 0;
`;
const Select = styled.select`
display: block;
padding: 1rem;
border-radius: 1rem;
font-size: 1.2rem;

`;

const useMoneda = (tituloLabel, stateInicial, MONEDAS) => {
    const [moneda, setMoneda] = useState(stateInicial);

    const handleChange = (evt) => {
        setMoneda(evt.target.value);
    }

    const Seleccionar = () => (
        <>
            <Label htmlFor="">{tituloLabel}</Label>
            <Select name="moneda" id="" onChange={handleChange} value={moneda}>
                <option value={"-Seleccione-"} disabled>-Seleccione-</option>
                {MONEDAS.map((moneda) => <option key={moneda.codigo} value={moneda.codigo}>{moneda.nombre}</option>)}
            </Select>
        </>
    )

    return [Seleccionar, moneda];
};

export default useMoneda;