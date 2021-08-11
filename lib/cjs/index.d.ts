import React from "react";
export interface SimpleNavbarProps {
    links: React.ReactElement[];
    logo: React.ReactElement;
    maxMenuVh: string;
    bgColorOnHover: string;
}
declare const SimpleNavbar: React.FC<SimpleNavbarProps>;
export default SimpleNavbar;
