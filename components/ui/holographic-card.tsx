"use client";

import React, { useRef } from 'react';

interface HolographicCardProps {
    children: React.ReactNode;
    className?: string;
}

const HolographicCard: React.FC<HolographicCardProps> = ({ children, className = "" }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Divide by a larger number for a more subtle tilt
        const rotateX = ((y - centerY) / 15);
        const rotateY = ((centerX - x) / 15);

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.setProperty('--x', `50%`);
        card.style.setProperty('--y', `50%`);
        card.style.setProperty('--bg-x', '50%');
        card.style.setProperty('--bg-y', '50%');
    };

    return (
        <div 
            className={`group relative transition-transform duration-200 ease-out ${className}`} 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
            }}
        >
            <div className="relative z-10 w-full h-full flex flex-col">
                {children}
            </div>
            
            {/* Holographic overlay */}
            <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen rounded-lg"
                style={{
                    background: `radial-gradient(circle at var(--bg-x, 50%) var(--bg-y, 50%), rgba(49, 196, 243, 0.4) 0%, rgba(112, 66, 248, 0.4) 40%, transparent 80%)`,
                }}
            />
            
            {/* Specular glare */}
            <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 rounded-lg"
                style={{
                    background: `radial-gradient(800px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.1), transparent 40%)`
                }}
            />
        </div>
    );
};

export default HolographicCard;
