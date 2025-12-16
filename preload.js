const { contextBridge, app } = require('electron');

const version = typeof app?.getVersion === 'function' ? app.getVersion() : process.versions.electron;
const platform = process.platform;

contextBridge.exposeInMainWorld('SloveneQuestDesktop', {
  version,
  platform,
});
