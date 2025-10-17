import React from "react";

export function FNavigationMenu() {
    return (
        <nav className="flex justify-center gap-6 bg-white shadow-md py-4 sticky top-0 z-50">
            <a href="#About">About</a>
            <a href="#Experiences">Experiences</a>
            <a href="#Projects">Projects</a>
            <a href="#Education">Education</a>
        </nav>
    );
}