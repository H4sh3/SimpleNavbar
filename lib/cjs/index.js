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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var SimpleNavbar = function (_a) {
    var children = _a.children, links = _a.links, logo = _a.logo;
    var _b = react_1.useState(false), menuOpen = _b[0], setMenuOpen = _b[1];
    var _c = react_1.useState(false), shrink = _c[0], setShrink = _c[1];
    window.onscroll = function () {
        scrollFunction();
    };
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            setShrink(true);
        }
        else {
            setShrink(false);
        }
    }
    var minNbHeight = '6vh';
    var maxNbHeight = '8vh';
    var navbarHeight = shrink ? minNbHeight : maxNbHeight;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { id: "header", style: { "transition": "all .4s ease-in-out", "height": navbarHeight }, className: "z-10 fixed top-0 left-0 w-full text-white hover:bg-black navbarGradient" },
            react_1.default.createElement("div", { className: "h-full flex justify-between gap-4" },
                logo,
                react_1.default.createElement("nav", { className: "hidden lg:flex lg:flex-row lg:items-center gap-4 text-xl" }, links),
                react_1.default.createElement("div", { className: "lg:hidden self-center" },
                    react_1.default.createElement("button", { onClick: function () { setMenuOpen(!menuOpen); }, id: "nav-toggle", className: "flex items-center p-1 text-red-500 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" },
                        react_1.default.createElement("svg", { className: "fill-current h-6 w-6", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                            react_1.default.createElement("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" })))))),
        react_1.default.createElement("div", { style: { "height": "8vh" } }),
        react_1.default.createElement("div", { className: "fixed w-full bg-gray-100", style: { opacity: menuOpen ? 1 : 0, "height": menuOpen ? '30vh' : '0vh', "transition": "all 0.4s ease-in-out" } }, menuOpen ?
            react_1.default.createElement("div", { style: { "height": menuOpen ? '90vh' : '0vh', "transition": "all 0.4s ease-in-out" } },
                react_1.default.createElement("div", { style: { "height": "12vh" } }),
                react_1.default.createElement("div", { className: "divide-y-2 divide-red-400 w-full grid grid-cols-1 justify-items-center" }, links),
                react_1.default.createElement("div", { className: "pt-10 w-full text-center", onClick: function () { setMenuOpen(false); } }, "\u25B2"))
            : react_1.default.createElement(react_1.default.Fragment, null)),
        children,
        menuOpen ?
            react_1.default.createElement(react_1.default.Fragment, null)
            :
                react_1.default.createElement(react_1.default.Fragment, null)));
};
exports.default = SimpleNavbar;
