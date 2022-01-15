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
font-size: 1.3rem;
-webkit-appearance: none;

`;

const useCripto = (labelText, criptoInicial, arrayCriptos) => {
    const [cripto, setCripto] = useState(criptoInicial);

    const SelectCriptos = () => (
        <>
            <Label>{labelText}</Label>
            <Select value={cripto} onChange={(evt) => { setCripto(evt.target.value) }}>
                <option value={""} disabled>-Seleccione-</option>
                {arrayCriptos.map((cripto) => <option key={cripto.CoinInfo.Id} value={cripto.CoinInfo.Name}>{cripto.CoinInfo.FullName}</option>)}
            </Select>
        </>
    );

    return [cripto, SelectCriptos]
}

export default useCripto;