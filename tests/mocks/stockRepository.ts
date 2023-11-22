import { Stock } from "../../src/domain/entities/stock";
import { IStockRepository } from "../../src/domain/repositories/stockRepository"; 
import { StockMother } from "./objectMother/stock";


// mock

export class StockRepositoryMock implements IStockRepository {
  async getStock(stockId: string): Promise<Stock> {
    return StockMother.create();
  }
}