import React from "react";

export function FNavigationMenu() {
    return (
        <nav className="flex justify-center gap-6 bg-white shadow-md py-4 sticky top-0 z-50">
            <a href="#about">About</a>
            <a href="#experiences">Experiences</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
        </nav>
    );
}