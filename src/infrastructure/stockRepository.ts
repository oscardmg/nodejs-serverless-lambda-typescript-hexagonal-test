import { Stock } from '../domain/entities/stock';
import { IStockRepository } from '../domain/repositories/stockRepository';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

console.log("🚀 ~ process.env:6 ~ ", process.env);


const DB_TABLE = process.env.IS_OFFLINE ? 'hexagonal-architecture-example-develop' : process.env.DB_TABLE;
console.log("🚀 ~ file: stockRepository.ts:7 ~ DB_TABLE:", DB_TABLE)



const client = new DynamoDBClient({ region: 'us-east-1'});
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
