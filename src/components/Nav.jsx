import React, { useState, useEffect } from 'react';

function Nav() {
    const [isVisible, setIsVisible] = useState(true);
    const [activeHash, setActiveHash] = useState('#home'); // Track the current hash
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = window.scrollY;
        };

        const handleHashChange = () => {
            setActiveHash(window.location.hash || '#home'); // Update active hash
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('hashchange', handleHashChange);

        // Set the initial hash on mount
        handleHashChange();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div
            className={`fixed w-full bottom-0 sm:top-0 sm:bottom-auto z-50 transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : 'translate-y-full sm:-translate-y-full'
            }`}
        >
            <div className="text-white text-1xl flex items-center justify-center p-14">
                <div className="space-x-2 rounded-full p-4 bg-neutral-900">
                    <a
                        href="#"
                        className={`p-2 rounded-full ${
                            activeHash === '#home' ? 'bg-neutral-600' : ''
                        }`}
                    >
                        Home
                    </a>
                    <a
                        href="#project"
                        className={`p-2 rounded-full ${
                            activeHash === '#project' ? 'bg-neutral-700' : ''
                        }`}
                    >
                        Projects
                    </a>
                    <a
                        href="#about"
                        className={`p-2 rounded-full ${
                            activeHash === '#about' ? 'bg-neutral-700' : ''
                        }`}
                    >
                        About
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Nav;
