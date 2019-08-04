"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const { publisher, name, displayName } = require('../package.json');
function getExtension() {
    const extensionId = publisher + '.' + name;
    const extension = vscode.extensions.getExtension(extensionId);
    if (extension === undefined) {
        throw new Error('Visual Studio Code could not find ' + displayName +
            ' with id: ' + extensionId + ' in .vscode/extensions folder');
    }
    return extension;
}
const { lombokConfig } = require('../package.json');
const lombokJar = getExtension().extensionPath + lombokConfig.path;
lombokConfig.vmArgsValue = lombokConfig.vmArgsValue.replace(new RegExp("{lombok-jar}", 'g'), lombokJar);
exports.default = lombokConfig;
//# sourceMappingURL=lombok-config.js.map