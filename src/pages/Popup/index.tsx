import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@/style/popup.scss';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import { Keyring } from '@polkadot/api';

const App: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    cryptoWaitReady().then((rs) => {
      const keyring = new Keyring({ type: 'sr25519' });
      keyring.addFromMnemonic('tape client harbor modify arrange planet auction bonus bulb electric wish cable');
      keyring.pairs.forEach((p) => {
        setAddress(p.type + ' - ' + p.address);
      });
    });
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="popup_container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Simple Header
            </Typography>
          </Toolbar>
        </AppBar>
        <div>{address}</div>
      </Box>
    </div>
  );
};

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);

/* debug:start */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (module.hot) module.hot.accept();
/* debug:end */
