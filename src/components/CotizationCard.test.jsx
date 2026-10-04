import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import CotizationCard from "./CotizationCard";

describe("CotizationCard (cotizador-cripto)", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <select>
        <option value="BTC">Bitcoin</option>
      </select>
    `;
  });

  it("renderiza los datos de cotización y el texto de última actualización", () => {
    const mockCotizacion = {
      criptoName: "BTC",
      IMAGEURL: "/media/123/btc.png",
      PRICE: "$60,000",
      HIGHDAY: "$61,000",
      LOWDAY: "$59,000",
      CHANGEPCT24HOUR: "+2.5%",
      LASTUPDATE: "Just now",
    };

    render(<CotizationCard cotizacion={mockCotizacion} />);

    expect(screen.getByText(/Bitcoin/i)).toBeInTheDocument();
    expect(screen.getByText(/El precio es: \$60,000/i)).toBeInTheDocument();
    expect(screen.getByText(/Precio más alto del día: \$61,000/i)).toBeInTheDocument();
    expect(screen.getByText(/Ultima actualización de la API: Just now/i)).toBeInTheDocument();
  });
});
