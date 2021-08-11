import React, { useState } from "react";

export interface SimpleNavbarProps {
    links: React.ReactElement[],
    logo: React.ReactElement
}

const SimpleNavbar: React.FC<SimpleNavbarProps> = ({ children, links, logo }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const [shrink, setShrink] = useState(false)
    
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            setShrink(true)
        } else {
            setShrink(false)
        }
    }

    const minNbHeight = '6vh'
    const maxNbHeight = '8vh'
    const navbarHeight = shrink ? minNbHeight : maxNbHeight

    return (
        <div>
            <div id="header" style={{ "transition": "all .4s ease-in-out", "height": navbarHeight }}
                className="z-10 fixed top-0 left-0 w-full text-white hover:bg-black navbarGradient">
                <div className="h-full flex justify-between gap-4">
                    {logo}
                    <nav className="hidden lg:flex lg:flex-row lg:items-center gap-4 text-xl">
                        {links}
                    </nav>
                    <div className="lg:hidden self-center">
                        <button onClick={() => { setMenuOpen(!menuOpen) }} id="nav-toggle" className="flex items-center p-1 text-red-500 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ "height": "8vh" }}></div>
            <div className="fixed w-full bg-gray-100" style={{ opacity: menuOpen ? 1 : 0, "height": menuOpen ? '30vh' : '0vh', "transition": "all 0.4s ease-in-out" }}>
                {
                    menuOpen ?
                        <div style={{ "height": menuOpen ? '90vh' : '0vh', "transition": "all 0.4s ease-in-out" }}>
                            <div style={{ "height": "12vh" }}></div>
                            <div className="divide-y-2 divide-red-400 w-full grid grid-cols-1 justify-items-center">
                                {links}
                            </div>
                            <div className="pt-10 w-full text-center" onClick={() => { setMenuOpen(false) }}>
                                &#9650;
                            </div>
                        </div>
                        : <></>
                }
            </div>
            {children}
            {
                menuOpen ?
                    <></>
                    :
                    <>
                    </>
            }
        </div >
    )

}



export default SimpleNavbar