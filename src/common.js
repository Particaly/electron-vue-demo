import {ipcRenderer} from 'electron';

ipcRenderer.on('msg',function (event, args) {
    console.log(event, args);
});

ipcRenderer.on('console', function (event, args) {
    console.log(...args)
});

export {
    ipcRenderer
}
