import { Stock } from '../domain/entities/stock';
import { IStockRepository } from '../domain/interfaces/stockRepository';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

const DB_TABLE = process.env.DB_TABLE;

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export class StockRepository implements IStockRepository {
  async getStock(stockId: string): Promise<Stock> {
    let params = {
      TableName: DB_TABLE,
      Key: {
        STOCK_ID: stockId,
      },
    };

    const command = new GetCommand(params);

    try {
      const stockData = await docClient.send(command);
      if(!stockData.Item) {
        throw new Error('Stock not found');
      }
      
      return {
        STOCK_ID: stockData.Item.STOCK_ID,
        VALUE: stockData.Item.VALUE,
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
