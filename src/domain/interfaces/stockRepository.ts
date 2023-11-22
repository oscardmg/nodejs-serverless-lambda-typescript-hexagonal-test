// port StockService 

import { Stock } from "../entities/stock";

export interface IStockRepository {
   getStock(stockId: string): Promise<Stock>;
}