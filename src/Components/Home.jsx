import { useEffect, useState } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const typed = new Typed('#typed', {
            strings: ["a MernStack Developer", "a Full Stack Developer", "a Software Engineer"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="home" className="relative h-screen bg-gray-900 text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-black/50">
                <img
                    src="https://storage.googleapis.com/a1aa/image/pFwEyKVwgTZNQ58lVjAiQicym1mHrf1-fu3jMW3TbXk.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Navbar */}
            <nav className="relative z-50 flex justify-between items-center p-4">
                <h1 className="text-4xl mt-6 ml-8 font-bold">PORTFOLIO</h1>
                <div className="hidden md:flex space-x-8 mt-6 mr-8">
                    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-lg hover:text-gray-300">
                            {item}
                        </a>
                    ))}
                </div>
                <button
                    className="md:hidden text-2xl mr-4"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 w-full bg-gray-800 z-50 text-center">
                    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="block py-2 hover:bg-gray-700"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}

            {/* Hero Section */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <p className="text-4xl mb-20">Welcome To Everyone!</p>
                <h2 className="text-5xl font-bold mb-2">Hi, I'm VISHNU</h2>
                <p className="text-2xl">
                    <span id="typed"></span>
                </p>
                
                {/* Social Icons */}
                <div className="flex space-x-4 mt-10 text-2xl">
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                </div>
            </div>
        </section>
    );
};

export default Home;
