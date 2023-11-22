import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { StockApplication } from '../../application/stockApplication';
import { StockRepository } from '../stockRepository';
import { CurrencyService } from '../currency.service';

export const handler =  async ( event: APIGatewayProxyEvent,  context: Context): Promise<APIGatewayProxyResult> => {

  const stockApplication = new StockApplication(
    new CurrencyService(),
    new StockRepository()
  );
  
  if(!event.pathParameters?.stockId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'StockId is required' }),
    };
  }

  const stock = await stockApplication.getStock(event.pathParameters.stockId);
  return {
    statusCode: 200,
    body: JSON.stringify(stock),
  };
};
