"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
let settings;
switch (process.platform) {
    case 'win32':
        settings = process.env.APPDATA + '\\Code\\User\\settings.json';
        break;
    case 'darwin':
        settings = process.env.HOME + '/Library/Application Support/Code/User/settings.json';
        break;
    case 'linux':
        settings = process.env.HOME + '/.config/Code/User/settings.json';
        break;
    default:
        settings = null;
}
if (settings !== null) {
    const fileData = fs_1.readFileSync(settings, 'utf8');
    const settingsJson = JSON.parse(fileData);
    const { lombokConfig } = require('../package.json');
    let vmArgsValue = settingsJson[lombokConfig.vmArgsKey];
    settingsJson[lombokConfig.vmArgsKey] = vmArgsValue.split('-javaagent:')[0].trim();
    fs_1.writeFileSync(settings, JSON.stringify(settingsJson), 'utf8');
}
//# sourceMappingURL=uninstall.js.map