"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const vscode_1 = require("vscode");
const lombok_config_1 = require("./lombok-config");
function getSetting(key) {
    return vscode.workspace.getConfiguration().get(key);
}
function setLombokToVSCode() {
    return __awaiter(this, void 0, void 0, function* () {
        const previousVmArguments = getSetting(lombok_config_1.default.vmArgsKey);
        if (!previousVmArguments) {
            return updateVMSettings(lombok_config_1.default.vmArgsKey, lombok_config_1.default.vmArgsValue);
        }
        else if (!previousVmArguments.includes(lombok_config_1.default.path)) {
            return updateVMSettings(lombok_config_1.default.vmArgsKey, previousVmArguments.trim() + ' ' + lombok_config_1.default.vmArgsValue);
        }
        else if (!previousVmArguments.includes(lombok_config_1.default.vmArgsValue)) {
            return updateVMSettings(lombok_config_1.default.vmArgsKey, previousVmArguments.split('-javaagent:')[0].trim() + ' ' + lombok_config_1.default.vmArgsValue);
        }
        return true;
    });
}
exports.setLombokToVSCode = setLombokToVSCode;
function cleanLombok() {
    return __awaiter(this, void 0, void 0, function* () {
        const actualVmArguments = getSetting(lombok_config_1.default.vmArgsKey);
        return actualVmArguments !== undefined && updateVMSettings(lombok_config_1.default.vmArgsKey, actualVmArguments.replace(lombok_config_1.default.vmArgsValue, ''));
    });
}
exports.cleanLombok = cleanLombok;
function updateVMSettings(key, value) {
    return __awaiter(this, void 0, void 0, function* () {
        yield vscode.workspace.getConfiguration().update(key, value, vscode_1.ConfigurationTarget.Global);
        const newVmArguments = getSetting(key);
        return newVmArguments !== undefined && newVmArguments === value;
    });
}
//# sourceMappingURL=extension.js.map