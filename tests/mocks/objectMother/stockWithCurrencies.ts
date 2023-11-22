import { StockWithCurrencies } from "../../../src/domain/entities/stockWithCurrencies";
import { CurrencyMother } from "./currency";
import { StockMother } from "./stock";

export class StockWithCurrenciesMother {
  public static create(): StockWithCurrencies {

    const currencyMother = CurrencyMother.create();
    const stockMother = StockMother.create();

    return {
      stock: 'AMZN',
        values: {
          USD: (currencyMother.rates.USD * stockMother.VALUE).toFixed(2),
          ARS: (currencyMother.rates.ARS * stockMother.VALUE).toFixed(2),
          COP: (currencyMother.rates.COP * stockMother.VALUE).toFixed(2),
        },
    };
  }
}