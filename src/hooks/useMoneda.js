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
 * @param {*titulo para el label del input} tituloLabel 
 * @param {*valor incial. Cabe resaltar que el value del input estará determinado por el state. Se recomienda inicializar en '' y establecer la opcion por default con value=''} stateInicial 
 * @param {*Array de objetos que contiene objetos del estilo : {nombre: 'Bitcoin', codigo:'BTC'}} MONEDAS 
 * @returns 
 */
const useMoneda = (tituloLabel, stateInicial, MONEDAS) => {
    const [moneda, setMoneda] = useState(stateInicial);

    const handleChange = (evt) => {
        setMoneda(evt.target.value);
    }

    const SelectMoneda = () => (
        <>
            <Label htmlFor="">{tituloLabel}</Label>
            <Select name="moneda" id="" onChange={handleChange} value={moneda}>
                <option value={""} disabled>-Seleccione-</option>
                {MONEDAS.map((moneda) => <option key={moneda.codigo} value={moneda.codigo}>{moneda.nombre}</option>)}
            </Select>
        </>
    );
    return [moneda, SelectMoneda];
};

export default useMoneda;