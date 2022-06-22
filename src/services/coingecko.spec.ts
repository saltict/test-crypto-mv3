import { CoinGecko } from './coingecko';

describe('test CoinGecko Services', () => {
  test('test GetCoinList', async () => {
    const coinList = await CoinGecko.getCoinList();
    expect(coinList.length).toBeGreaterThan(10000);
  });

  test('test GetCoinMarket', async () => {
    const coinList = await CoinGecko.getCoinMarket();
    console.log(coinList[0]);
    expect(coinList.length).toEqual(100);
  });
});
