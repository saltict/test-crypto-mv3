// import '@polkadot/wasm-crypto/initOnlyAsm';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import keyring from '@polkadot/ui-keyring';
import { ApiPromise, WsProvider } from '@polkadot/api';

let api: ApiPromise;

const randomNumber = Math.random();

cryptoWaitReady().then((rs) => {
  keyring.loadAll({ type: 'sr25519' });
  keyring.addUri('tape client harbor modify arrange planet auction bonus bulb electric wish cable', '123123');
  keyring.getPairs().forEach((pair) => {
    console.log(pair.address);
  });

  api = new ApiPromise({ provider: new WsProvider('wss://westend-rpc.polkadot.io') });
  api.isReady.then((a: ApiPromise) => {
    a.query.system.account('5FEdUhBmtK1rYifarmUXYzZhi6fmLbC6SZ7jcNvGuC2gaa2r', (b: any) => {
      console.log('5FEdUhBmtK1rYifarmUXYzZhi6fmLbC6SZ7jcNvGuC2gaa2r', b.data.toHuman());
    });
  });
});

self.addEventListener('fetch', function (event: FetchEvent) {
  if (event.request.url.endsWith('popup.html')) {
    console.log('Open popup tab');
  }
});

chrome.alarms.get('CryptoKeepAlive', (existed) => {
  chrome.alarms.create('CryptoKeepAlive', { delayInMinutes: 1 / 30, periodInMinutes: 1 / 5 });
  console.log('Create KeepAlive');
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log(alarm.name, randomNumber, api);
});
