"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yellow = exports.white = exports.red = exports.purple = exports.pink = exports.orange = exports.green = exports.cyan = exports.brown = exports.blue = exports.black = exports.all = void 0;
const black = __importStar(require("./black"));
exports.black = black;
const blue = __importStar(require("./blue"));
exports.blue = blue;
const brown = __importStar(require("./brown"));
exports.brown = brown;
const cyan = __importStar(require("./cyan"));
exports.cyan = cyan;
const green = __importStar(require("./green"));
exports.green = green;
const orange = __importStar(require("./orange"));
exports.orange = orange;
const pink = __importStar(require("./pink"));
exports.pink = pink;
const purple = __importStar(require("./purple"));
exports.purple = purple;
const red = __importStar(require("./red"));
exports.red = red;
const white = __importStar(require("./white"));
exports.white = white;
const yellow = __importStar(require("./yellow"));
exports.yellow = yellow;
/** All Web Colors */
exports.all = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, black), blue), brown), cyan), green), orange), pink), purple), red), white), yellow);
