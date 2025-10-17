import React, { ReactNode } from "react";

interface TagProps {
    children: ReactNode;
    colorClass?: string;
}

export function Tag({ children, colorClass = "bg-gray-100 text-gray-800" }: TagProps) {
    return (
        <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${colorClass}`}>
            {children}
        </div>
    );
}