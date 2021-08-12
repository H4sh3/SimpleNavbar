import React, { useState } from "react";
var SimpleNavbar = function (_a) {
    var children = _a.children, links = _a.links, logo = _a.logo, maxMenuVh = _a.maxMenuVh, _b = _a.bgColorOnHover, bgColorOnHover = _b === void 0 ? 'bg-black' : _b;
    var _c = useState(false), menuOpen = _c[0], setMenuOpen = _c[1];
    var _d = useState(false), shrink = _d[0], setShrink = _d[1];
    if (typeof window !== 'undefined') {
        window.onscroll = function () {
            scrollFunction();
        };
    }
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
    return (React.createElement("div", null,
        React.createElement("div", { id: "header", style: { "transition": "all .4s ease-in-out", "height": navbarHeight }, className: "z-10 fixed top-0 left-0 w-full text-white hover:" + bgColorOnHover + " navbarGradient" },
            React.createElement("div", { className: "h-full flex justify-between items-center gap-4" },
                React.createElement("div", null, logo),
                React.createElement("nav", { className: "hidden lg:flex lg:flex-row lg:items-center gap-4 text-xl mr-5" }, links.map(function (e, i) {
                    return React.createElement(React.Fragment, { key: i }, e);
                })),
                React.createElement("div", { className: "lg:hidden self-center pr-4" },
                    React.createElement("button", { onClick: function () { setMenuOpen(!menuOpen); }, id: "nav-toggle", className: "flex items-center p-1 text-red-500 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" },
                        React.createElement("svg", { className: "fill-current h-6 w-6", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" })))))),
        React.createElement("div", { style: { "height": "6vh" } }),
        React.createElement("div", { className: "lg:hidden z-9 fixed w-full bg-gray-100", style: { opacity: menuOpen ? 1 : 0, "height": menuOpen ? maxMenuVh : '0vh', "transition": "all 0.4s ease-in-out" } }, menuOpen ?
            React.createElement("div", { style: { "height": menuOpen ? '90vh' : '0vh', "transition": "all 0.4s ease-in-out" } },
                React.createElement("div", { style: { "height": "7vh" } }),
                React.createElement("div", { className: "gap-2 w-full grid grid-cols-1 justify-items-center" }, links.map(function (e, i) {
                    return React.createElement(React.Fragment, { key: i }, e);
                })),
                React.createElement("div", { className: "pt-10 w-full flex flex-row justify-center" },
                    React.createElement("div", { className: "p-5 cursor-pointer text-center", onClick: function () { setMenuOpen(false); } }, "\u25B2")))
            : React.createElement(React.Fragment, null)),
        children,
        menuOpen ?
            React.createElement(React.Fragment, null)
            :
                React.createElement(React.Fragment, null)));
};
export default SimpleNavbar;
