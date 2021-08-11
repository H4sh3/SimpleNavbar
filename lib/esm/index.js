import React, { useState } from "react";
var SimpleNavbar = function (_a) {
    var children = _a.children, links = _a.links, logo = _a.logo;
    var _b = useState(false), menuOpen = _b[0], setMenuOpen = _b[1];
    var _c = useState(false), shrink = _c[0], setShrink = _c[1];
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
    return (React.createElement("div", null,
        React.createElement("div", { id: "header", style: { "transition": "all .4s ease-in-out", "height": navbarHeight }, className: "z-10 fixed top-0 left-0 w-full text-white hover:bg-black navbarGradient" },
            React.createElement("div", { className: "h-full flex justify-between gap-4" },
                logo,
                React.createElement("nav", { className: "hidden lg:flex lg:flex-row lg:items-center gap-4 text-xl" }, links),
                React.createElement("div", { className: "lg:hidden self-center" },
                    React.createElement("button", { onClick: function () { setMenuOpen(!menuOpen); }, id: "nav-toggle", className: "flex items-center p-1 text-red-500 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" },
                        React.createElement("svg", { className: "fill-current h-6 w-6", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" })))))),
        React.createElement("div", { style: { "height": "8vh" } }),
        React.createElement("div", { className: "fixed w-full bg-gray-100", style: { opacity: menuOpen ? 1 : 0, "height": menuOpen ? '30vh' : '0vh', "transition": "all 0.4s ease-in-out" } }, menuOpen ?
            React.createElement("div", { style: { "height": menuOpen ? '90vh' : '0vh', "transition": "all 0.4s ease-in-out" } },
                React.createElement("div", { style: { "height": "12vh" } }),
                React.createElement("div", { className: "divide-y-2 divide-red-400 w-full grid grid-cols-1 justify-items-center" }, links),
                React.createElement("div", { className: "pt-10 w-full text-center", onClick: function () { setMenuOpen(false); } }, "\u25B2"))
            : React.createElement(React.Fragment, null)),
        children,
        menuOpen ?
            React.createElement(React.Fragment, null)
            :
                React.createElement(React.Fragment, null)));
};
export default SimpleNavbar;
