import {ipcMain} from 'electron';
import config from "./electron.config";

class IpcControl{
    constructor (ipcMain) {
        this.ipcMain = ipcMain;
        this.disableEsLintError = false;
        this.init()
    }
    init () {
        this.ipcMain.on('msg', (event, trigger, data) => {
            this[trigger](event,trigger,data);
        });
    }
    useWindow(window){
        this.win = window;
        if (config.debugInApp) {
            console.log = function () {
                window.webContents.send('console', [...arguments]);
            };
        }
    }
    windowReady(){
        this.disableEsLintError = false;
        console.log('all msg in terminal will print in console');
    }
    dispatch(event, args){
        if(this.win){
            this.win.webContents.send('msg', [event,args])
        }
    }
}

let control = new IpcControl(ipcMain);
export default control
