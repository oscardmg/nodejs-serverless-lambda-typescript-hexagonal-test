import { Stock } from "../../../src/domain/entities/stock";

export class StockMother {
  static create(): Stock {
    return {
      STOCK_ID: "AMZN",
      VALUE: 100,
    };
  }
}