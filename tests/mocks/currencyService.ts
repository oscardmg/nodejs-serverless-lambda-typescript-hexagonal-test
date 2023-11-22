import { Currency } from "../../src/domain/entities/currency";
import { ICurrencyService } from "../../src/domain/interfaces/currencyService";
import { CurrencyMother } from "./objectMother/currency";

// mock 
export class CurrencyServiceMock implements ICurrencyService {
  async getCurrencies(symbols: string[]): Promise<Currency> {
    return CurrencyMother.create();
  }
}
