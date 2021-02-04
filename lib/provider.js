"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VFXProvider = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const context_1 = require("./context");
const vfx_player_1 = __importDefault(require("./vfx-player"));
const canvasDefaultStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    "z-index": 9999,
    "pointer-events": "none"
};
exports.VFXProvider = props => {
    const [_player, setPlayer] = react_1.useState(null);
    const canvasStyle = Object.assign(Object.assign({}, canvasDefaultStyle), props.canvasStyle);
    react_1.useEffect(() => {
        const canvas = document.createElement("canvas");
        for (const [k, v] of Object.entries(canvasStyle)) {
            canvas.style.setProperty(k, v.toString());
        }
        if (props.zIndex !== undefined) {
            canvas.style.setProperty("z-index", props.zIndex.toString());
        }
        document.body.appendChild(canvas);
        const player = new vfx_player_1.default(canvas, props.pixelRatio);
        setPlayer(player);
        player.play();
        return () => {
            player.stop();
            player.destroy();
            canvas.remove();
        };
    }, [props.pixelRatio, props.zIndex]);
    return (React.createElement(React.Fragment, null,
        React.createElement(context_1.VFXContext.Provider, { value: _player }, props.children)));
};
//# sourceMappingURL=provider.js.map