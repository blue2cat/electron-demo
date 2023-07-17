const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
  });

  win.loadURL('http://localhost:1212/');
};

// eslint-disable-next-line promise/catch-or-return, promise/always-return
app.whenReady().then(() => {
  createWindow();
});
