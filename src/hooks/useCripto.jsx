import React, { useState } from "react";

/**
 * Custom Hook para selección de criptomonedas
 * @param {string} labelText
 * @param {string} criptoInicial
 * @param {Array} arrayCriptos
 */
const useCripto = (labelText, criptoInicial, arrayCriptos = []) => {
  const [cripto, setCripto] = useState(criptoInicial);

  const SelectCriptos = () => (
    <div className="space-y-2">
      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
        {labelText}
      </label>
      <div className="relative">
        <select
          value={cripto}
          onChange={(evt) => setCripto(evt.target.value)}
          className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-800/90 py-3 pr-10 pl-4 text-sm font-semibold text-white shadow-inner transition-all outline-none hover:border-slate-600 focus:border-indigo-500 focus:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20"
        >
          <option value="" disabled className="bg-slate-900 text-slate-400">
            - Seleccione una criptomoneda -
          </option>
          {arrayCriptos.map((criptoItem) => (
            <option
              key={criptoItem.CoinInfo.Id}
              value={criptoItem.CoinInfo.Name}
              className="bg-slate-900 text-white"
            >
              {criptoItem.CoinInfo.FullName} ({criptoItem.CoinInfo.Name})
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );

  return [cripto, SelectCriptos];
};

export default useCripto;