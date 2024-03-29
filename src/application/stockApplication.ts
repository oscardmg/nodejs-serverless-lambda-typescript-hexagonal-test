import { StockWithCurrencies } from "../domain/entities/stockWithCurrencies";
import { ICurrencyService } from "../domain/services/currencyService";
import { IStockRepository } from "../domain/repositories/stockRepository";



export class StockApplication {
  private readonly currencyService: ICurrencyService;
  private readonly stockRepository: IStockRepository;
  private readonly currencies = ['USD', 'ARS', 'COP'];


  constructor(currencyService: ICurrencyService, stockRepository: IStockRepository) {
    this.currencyService = currencyService;
    this.stockRepository = stockRepository;
  }

  public async getStock(stockId: string): Promise<StockWithCurrencies> {
    const stock = await this.stockRepository.getStock(stockId);
    const currencyList = await this.currencyService.getCurrencies(this.currencies);

    const stockWithCurrencies: StockWithCurrencies = {
      stock: stock.STOCK_ID,
      values: {
        "USD": stock.VALUE.toFixed(2),
      },
    };

    for (const currency in currencyList.rates) {
      stockWithCurrencies.values[currency] = (stock.VALUE * currencyList.rates[currency]).toFixed(2)
      ;
    }

    return stockWithCurrencies;
  }
}
