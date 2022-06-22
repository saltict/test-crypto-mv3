import { CoinGeckoClient } from 'coingecko-api-v3';

class CoinGeckoService {
  public readonly client: CoinGeckoClient = new CoinGeckoClient();

  public async getCoinList() {
    return await this.client.coinList({});
  }

  public async getCoinMarket() {
    return await this.client.coinMarket({
      vs_currency: 'usd',
      per_page: 100,
      order: 'market_cap_desc',
      ids: '',
    });
  }
}

export const CoinGecko = new CoinGeckoService();
