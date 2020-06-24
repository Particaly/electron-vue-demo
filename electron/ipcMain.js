import {ipcMain} from 'electron';
import config from "./electron.config";

class IpcControl{
    constructor (ipcMain) {
        this.win = null;
        this.ipcMain = ipcMain;
        this.disableEsLintError = false;
        this.isReady = false;
        this.preSendList = [];
        this.init()
    }
    init () {
        this.ipcMain.on('msg', (event, trigger, data) => {
            this[trigger](event,trigger,data);
        });
        if (config.debugInApp) {
            const self = this;
            console.log = function() {
                if(self.isReady){
                    self.win.webContents.send('console', [...arguments]);
                }else{
                    self.preSendList.push([...arguments]);
                }
            };
        }
    }
    useWindow(window){
        this.win = window;
    }
    windowReady(){
        this.disableEsLintError = false;
        this.isReady = true;
        console.log('all msg in terminal will print in console');
        for(let item of this.preSendList){
            console.log(item);
        }
        this.preSendList = [];
    }
    dispatch(event, args){
        if(this.win){
            this.win.webContents.send('msg', [event,args])
        }
    }
}

let control = new IpcControl(ipcMain);
export default control
