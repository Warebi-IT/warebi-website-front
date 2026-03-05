import { useState, useEffect } from 'react';

/**
 * Hook to detect if the page has been scrolled past a given threshold.
 * Extracted from Navbar for reusability.
 */
export function useScrolled(threshold = 50) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return isScrolled;
}
