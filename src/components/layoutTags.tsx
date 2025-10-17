import React, { ReactNode } from "react";

interface TagProps {
    children: ReactNode;
    colorClass?: string;
}

export function Tag({ children, colorClass = "bg-purple-400/20 text-white" }: TagProps) {
    return (
        <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full ${colorClass}`}>
            {children}
        </div>
    );
}