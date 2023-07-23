const { app, BrowserWindow, screen, Menu } = require('electron')

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize

  const win = new BrowserWindow({
    width: Math.round(width * 0.8), // 设置宽度为屏幕宽度的80%
    height: Math.round(height * 0.8), // 设置高度为屏幕高度的80%
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true // 隐藏菜单栏
  })

  win.loadURL('https://ai.woftsun.cn')
}

const template = [
  {
    label: '菜单',
    submenu: [
      {
           label: '菜单1',
        click: () => {
          console.log('加想要的逻辑')
          // 在这里添加你的代码
        }
      },
      {
        label: '菜单2',
        click: () => {
          console.log('加想要的逻辑')
          // 在这里添加你的代码
        }
      }
    ]
  },
  {
    label: '关于',
    submenu: [
      {
        label: 'Undo',
        role: 'undo'
      },
      {
        label: 'Redo',
        role: 'redo'
      }
    ]
  }
]


app.whenReady().then(createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
