import React, { useState } from "react";
import PropTypes from "prop-types";

const CotizationCard = ({ cotizacion }) => {
  const [copiado, setCopiado] = useState(false);

  const optionElem = typeof document !== "undefined"
    ? document.querySelector(`option[value="${cotizacion.criptoName}"]`)
    : null;
  const NameValue = optionElem ? optionElem.innerText : cotizacion.criptoName;
  const displayName = NameValue ? NameValue : cotizacion.criptoName;

  const handleCopiar = () => {
    const texto = `Cotización Cripto: ${displayName}\nEl precio es: ${cotizacion.PRICE}\nPrecio más alto: ${cotizacion.HIGHDAY}\nPrecio más bajo: ${cotizacion.LOWDAY}\nVariación 24h: ${cotizacion.CHANGEPCT24HOUR}\nÚltima actualización: ${cotizacion.LASTUPDATE}`;
    navigator.clipboard?.writeText(texto);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const esPositivo = !String(cotizacion.CHANGEPCT24HOUR || "").startsWith("-");

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-indigo-500/30 bg-slate-900/90 shadow-xl shadow-indigo-950/40 transition-all">
      {/* Header de la tarjeta */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-800/60 px-5 py-4">
        <div className="flex items-center gap-3">
          {cotizacion.IMAGEURL && (
            <img
              className="h-10 w-10 rounded-full bg-slate-800 p-1 ring-1 ring-slate-700"
              src={`https://www.cryptocompare.com${cotizacion.IMAGEURL}`}
              alt="imagen cripto moneda"
            />
          )}
          <div>
            <h2 className="text-base font-bold text-white">
              {displayName}
            </h2>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Cotización en vivo</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopiar}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-700 active:scale-95"
          title="Copiar cotización"
        >
          {copiado ? (
            <>
              <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>¡Copiado!</span>
            </>
          ) : (
            <>
              <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Hero Banner de Precio */}
      <div className="bg-gradient-to-br from-indigo-950/60 to-purple-950/40 p-5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300">
          Valor de Mercado Actual
        </span>
        <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-white font-mono">
          El precio es: {cotizacion.PRICE}
        </h2>
      </div>

      {/* Grid de Métricas Secundarias */}
      <div className="grid grid-cols-1 gap-px bg-slate-800/80 sm:grid-cols-2">
        <div className="bg-slate-900/90 p-4">
          <span className="text-[11px] font-semibold uppercase text-slate-400">Máximo 24h</span>
          <p className="mt-0.5 text-sm font-semibold text-slate-200">
            Precio más alto del día: {cotizacion.HIGHDAY}
          </p>
        </div>

        <div className="bg-slate-900/90 p-4">
          <span className="text-[11px] font-semibold uppercase text-slate-400">Mínimo 24h</span>
          <p className="mt-0.5 text-sm font-semibold text-slate-200">
            Precio más bajo del día: {cotizacion.LOWDAY}
          </p>
        </div>

        <div className="bg-slate-900/90 p-4">
          <span className="text-[11px] font-semibold uppercase text-slate-400">Variación diaria</span>
          <p className={`mt-0.5 text-sm font-bold ${esPositivo ? "text-emerald-400" : "text-rose-400"}`}>
            Variación últimas 24 hs: {cotizacion.CHANGEPCT24HOUR}
          </p>
        </div>

        <div className="bg-slate-900/90 p-4">
          <span className="text-[11px] font-semibold uppercase text-slate-400">Sincronización</span>
          <p className="mt-0.5 text-xs font-medium text-slate-400">
            Ultima actualización de la API: {cotizacion.LASTUPDATE}
          </p>
        </div>
      </div>
    </div>
  );
};

CotizationCard.propTypes = {
  cotizacion: PropTypes.object.isRequired,
};

export default CotizationCard;
