import { Currency } from "../entities/currency";

export interface ICurrencyService {
    getCurrencies(currencies: string[]): Promise<Currency>;
}