import { StockApplication } from '../../src/application/stockApplication';
import { ICurrencyService } from '../../src/domain/interfaces/currencyService';
import { IStockRepository } from '../../src/domain/interfaces/stockRepository';
import { CurrencyServiceMock } from '../mocks/currencyService';
import { StockRepositoryMock } from '../mocks/stockRepository';
import { StockWithCurrenciesMother } from '../mocks/objectMother/stockWithCurrencies';

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
      const expectedStock = StockWithCurrenciesMother.create();

      // Act
      const result = await stockApplication.getStock(stockId);

      // Assert
      expect(result).toEqual(expectedStock);
    });
  });
});
