import { StockApplication } from '../../src/application/stockApplication';
import { ICurrencyService } from '../../src/domain/interfaces/currencyService';
import { IStockRepository } from '../../src/domain/interfaces/stockRepository';
import { StockWithCurrencies } from '../../src/domain/entities/stockWithCurrencies';
import { CurrencyServiceMock } from '../mocks/currencyService';
import { StockRepositoryMock } from '../mocks/stockRepository';

describe('StockApplication', () => {
  let currencyServiceMock: ICurrencyService;
  let stockRepositoryMock: IStockRepository;
  let stockApplication: StockApplication;

  beforeEach(() => {
    currencyServiceMock = new CurrencyServiceMock();
    stockRepositoryMock = new StockRepositoryMock();

    stockApplication = new StockApplication(
      currencyServiceMock,
      stockRepositoryMock
    );
  });

  describe('getStock', () => {
    it('should return the stock with currencies', async () => {
      // Arrange
      const stockId = 'AMZN';
      const expectedStock: StockWithCurrencies = {
        stock: 'AMZN',
        values: {
          USD: '122.20',
          ARS: '11412.30',
          COP: '45612.30',
        },
      };

      // Mock the necessary dependencies' methods here

      // Act
      const result = await stockApplication.getStock(stockId);

      // Assert
      expect(result).toEqual(expectedStock);
    });
  });
});
