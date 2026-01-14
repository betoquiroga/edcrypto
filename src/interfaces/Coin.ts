export interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

export interface CoinFullInterface {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
  market_cap: number;
  market_cap_change_percentage_24h: number;
  total_volume: number;
  market_cap_rank: number;
  high_24h: number;
  low_24h: number;
  fully_diluted_valuation: number;
  price_change_24h: number;
  market_cap_change_24h: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  last_updated: string;
}