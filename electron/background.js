import ipcControl from './ipcMain';
import {
    createProtocol
} from 'vue-cli-plugin-electron-builder/lib';
import Econfig from './electron.config';

const isDevelopment = process.env.NODE_ENV !== 'production'
const {app, BrowserWindow, protocol, Tray, Menu} =require('electron');// 引入electron

let win;
let tray = null;
// Scheme must be registered before the app is ready
// 有了protoco才能通过app://的形式去请求到资源，资源被打包在app.asar文件中，可使用asar的npm包解压
protocol.registerSchemesAsPrivileged([{
    scheme: 'app',
    privileges: {
        secure: true,
        standard: true
    }
}])
// 窗口的配置
let windowConfig = {
    width:800,
    height:600,
    title: '桌面时间控件',
    resizable: false,
    frame: false,            // 菜单栏
    transparent: true,
    fullscreenable: false,
    skipTaskbar: true,       // 是否跳过在任务栏显示图标
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
        win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    }else{
        // win.loadFile('./index.html')
        createProtocol('app')
        // Load the index.html when not in development
        win.loadURL('app://./index.html')
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
app.on('ready',async ()=>{
    if (isDevelopment) {
        // Install Vue Devtools
        try {
            let path = Econfig.vuedevtool;
            BrowserWindow.addDevToolsExtension(path);
        } catch (e) {
            console.error('Vue Devtools failed to install:', e.toString())
        }
    }
    createWindow();
    initTray();
});
app.on('window-all-closed',() => {
    app.quit();
});
app.on('activate',() => {
    if(win == null){
        createWindow();
    }
});

// 桌面系统托盘图表功能区
function initTray() {
    tray = new Tray('./src/assets/logo.png');
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
    ])
    tray.setToolTip('This is my application.');
    tray.setContextMenu(contextMenu);
    tray.on('click', () => {
        win.show();
    });
}
