

export interface Currency {
  success:   boolean;
  timestamp: number;
  base:      string;
  date:      string;
  rates:     Rates;
}

export interface Rates {
  [ key: string ]: number;
}
