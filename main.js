const { app, BrowserWindow, screen } = require('electron')

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize

  const win = new BrowserWindow({
    width: Math.round(width * 0.8), // 设置宽度为屏幕宽度的80%
    height: Math.round(height * 0.8), // 设置高度为屏幕高度的80%
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  win.loadURL('https://ai.woftsun.cn')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
