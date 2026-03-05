import { AnimatePresence } from 'framer-motion';
import Navbar from '../../organisms/Navbar/Navbar';
import Footer from '../../organisms/Footer/Footer';
import ParticleBackground from '../../atoms/ParticleBackground/ParticleBackground';

interface MainLayoutProps {
    children: React.ReactNode;
}

/**
 * MainLayout Template
 *
 * Assembles the global page layout WITHOUT business logic.
 * It receives children (page content) and arranges the structural Organisms.
 *
 * Template Rule: No data fetching, no state management, no i18n calls.
 */
export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-dark text-foreground relative">
            <ParticleBackground />
            <Navbar />
            <main className="relative z-10">
                <AnimatePresence mode="wait">
                    {children}
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}
