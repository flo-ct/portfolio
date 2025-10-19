import React from "react";

export function FNavigationMenu() {
    return (
        <nav className="flex justify-center gap-6 shadow-md py-4 sticky top-0 z-50">
            <a href="#about">À propos</a>
            <a href="#projects">Projets</a>
            <a href="#education">Formation</a>
            <a href="#experiences">Expériences</a>
        </nav>
    );
}