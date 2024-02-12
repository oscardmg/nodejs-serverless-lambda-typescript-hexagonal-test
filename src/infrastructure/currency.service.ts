import { Currency } from "../domain/entities/currency";
import { ICurrencyService } from "../domain/services/currencyService";
import axios from 'axios';
import { HttpClient } from "../domain/httpClient";


const ENDPOINT = 'https://api.apilayer.com/fixer/latest?';
const BASE = 'USD';

export class CurrencyService implements ICurrencyService {
  private readonly httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  
  async getCurrencies(symbols: string[]): Promise<Currency> {

      const getCurr = await this.httpClient.get(`${ENDPOINT}symbols=${symbols.join(',')}&base=${BASE}`, {headers: {'apikey': process.env.API_KEY}})
      return getCurr.data
  }
 
}