import React, { useState } from 'react';
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
            <label htmlFor="" className="my-4 block w-full text-[2rem] text-white">{tituloLabel}</label>
            <select name="moneda" id="" onChange={handleChange} value={moneda} className="block appearance-none rounded-2xl p-4 text-[1.3rem]">
                <option value={""} disabled>-Seleccione-</option>
                {MONEDAS.map((moneda) => <option key={moneda.codigo} value={moneda.codigo}>{moneda.nombre}</option>)}
            </select>
        </>
    );
    return [moneda, SelectMoneda];
};

export default useMoneda;