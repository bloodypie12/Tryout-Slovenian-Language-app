const { app, BrowserWindow, nativeTheme } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1366,
    height: 840,
    minWidth: 1180,
    minHeight: 720,
    backgroundColor: '#0b1021',
    title: 'Slovene Quest Desktop',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    },
  });

  nativeTheme.themeSource = 'dark';
  win.setMenuBarVisibility(false);
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
