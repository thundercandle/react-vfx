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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VFXVideo = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const context_1 = require("./context");
exports.VFXVideo = props => {
    const player = react_1.useContext(context_1.VFXContext);
    const ref = react_1.useRef(null);
    const onLoadedData = react_1.useCallback(() => {
        if (ref.current === null) {
            return;
        }
        const shader = props.shader;
        const release = props.release;
        const uniforms = props.uniforms;
        player === null || player === void 0 ? void 0 : player.addElement(ref.current, { shader, uniforms, release });
        return () => {
            if (ref.current === null) {
                return;
            }
            player === null || player === void 0 ? void 0 : player.removeElement(ref.current);
        };
    }, [props.shader, player]);
    return React.createElement("video", Object.assign({ ref: ref }, props, { onLoadedData: onLoadedData }));
};
//# sourceMappingURL=video.js.map