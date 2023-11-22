import { Currency } from "../domain/entities/currency";
import { ICurrencyService } from "../domain/interfaces/currencyService";
import axios from 'axios';


const ENDPOINT = 'https://api.apilayer.com/fixer/latest?';
const BASE = 'USD';

export class CurrencyService implements ICurrencyService {
  
  async getCurrencies(symbols: string[]): Promise<Currency> {

      const getCurr = await axios.get(`${ENDPOINT}symbols=${symbols.join(',')}&base=${BASE}`, {headers: {'apikey': process.env.API_KEY}})
      return getCurr.data
  }
 
}