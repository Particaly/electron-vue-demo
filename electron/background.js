import ipcControl from './ipcMain';
const {app, BrowserWindow} =require('electron');// 引入electron

let win;
let windowConfig = {
    width:800,
    height:600,
    resizable: false,
    frame: false,
    transparent: true,
    webPreferences: {
        nodeIntegration: true
    }
};

// 窗口配置程序运行窗口的大小
function createWindow(){
    win = new BrowserWindow(windowConfig);// 创建一个窗口
    ipcControl.useWindow(win);
    // win.loadURL(`file://${__dirname}/index.html`);// 在窗口内要展示的内容index.html 就是打包生成的index.html
    if(process.env.NODE_ENV === 'development'){
        win.loadURL('http://localhost:8080');
    }else{
        win.loadFile('./index.html')
    }
    win.webContents.openDevTools();  // 开启调试工具
    win.on('close',() => {
        // 回收BrowserWindow对象
        win = null;
    });
    win.on('resize', () => {
        win.reload();
    });
}
app.on('ready',createWindow);
app.on('window-all-closed',() => {
    app.quit();
});
app.on('activate',() => {
    if(win == null){
        createWindow();
    }
});

