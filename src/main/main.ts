const { app, BrowserWindow } = require('electron');

let url = `file://${__dirname}/index.html`;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
  });

  // if this is a development build, load the local server
  if (process.env.NODE_ENV === 'development') {
    url = 'http://localhost:1212';
  }

  // actually load the page
  win.loadURL(url);
};

// eslint-disable-next-line promise/catch-or-return, promise/always-return
app.whenReady().then(() => {
  createWindow();
});
