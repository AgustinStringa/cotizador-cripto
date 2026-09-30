import React, { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
display: block;
width: 100%;
color: #fff;
font-size: 2rem;
margin: 1rem 0;
`;
const Select = styled.select`
display: block;
padding: 1rem;
border-radius: 1rem;
font-size: 1.3rem;
-webkit-appearance: none;

`;
/**
 * 
 * @param {*titulo para el label del select} labelText 
 * @param {*valor inicial para el state. Cabe resaltar que el value del input estará determinado por el state. Se recomienda inicializar en '' y establecer la opcion por default con value=''} criptoInicial 
 * @param {*Array que contiene los datos para el select de las cripto. Estos datos provienen de la API y su llamado es asincrono, por tanto, en primera instancia antes de recibirles, se envia un []} arrayCriptos 
 * @returns 
 */
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