import { APIGatewayProxyEvent, APIGatewayProxyHandler, Context } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,  context: Context
) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ hello: 'hello world' }),
  };
};
