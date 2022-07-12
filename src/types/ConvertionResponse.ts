export interface ConvertionResponse {
  id: string;
  currency: string;
  symbol: string;
  name: string;
  logo_url: string;
  status: string;
  platform_currency: string;
  price: string;
  price_date: Date;
  price_timestamp: Date;
  num_exchanges: string;
  num_pairs: string;
  num_pairs_unmapped: string;
  first_candle: Date;
  first_trade: Date;
  first_order_book: Date;
  first_priced_at: Date;
  high: string;
  high_timestamp: Date;
}
