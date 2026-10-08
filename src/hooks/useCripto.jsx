import React, { useState } from 'react';
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
            <label className="my-4 block w-full text-[2rem] text-white">{labelText}</label>
            <select value={cripto} onChange={(evt) => { setCripto(evt.target.value) }} className="block appearance-none rounded-2xl p-4 text-[1.3rem]">
                <option value={""} disabled>-Seleccione-</option>
                {arrayCriptos.map((cripto) => <option key={cripto.CoinInfo.Id} value={cripto.CoinInfo.Name}>{cripto.CoinInfo.FullName}</option>)}
            </select>
        </>
    );

    return [cripto, SelectCriptos]
}

export default useCripto;