import { Currency } from '../../../src/domain/entities/currency';

export class CurrencyMother {
  static create(): Currency {
    return {
      success: true,
      timestamp: 1622025606,
      base: 'USD',
      date: '2021-05-26',
      rates: {
        USD: 1.222,
        ARS: 114.123,
        COP: 456.123,
      },
    };
  }
}
