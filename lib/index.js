"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VFXP = exports.VFXDiv = exports.VFXSpan = void 0;
var provider_1 = require("./provider");
Object.defineProperty(exports, "VFXProvider", { enumerable: true, get: function () { return provider_1.VFXProvider; } });
var image_1 = require("./image");
Object.defineProperty(exports, "VFXImg", { enumerable: true, get: function () { return image_1.VFXImg; } });
var video_1 = require("./video");
Object.defineProperty(exports, "VFXVideo", { enumerable: true, get: function () { return video_1.VFXVideo; } });
const element_1 = __importDefault(require("./element"));
exports.VFXSpan = element_1.default("span");
exports.VFXDiv = element_1.default("div");
exports.VFXP = element_1.default("p");
//# sourceMappingURL=index.js.map