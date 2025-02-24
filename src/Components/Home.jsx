import { useEffect, useState } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

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
        <section id="home" className="relative h-screen bg-gray-900 text-white flex items-center">
            {/* Background Image with More Width */}
            <div className="absolute inset-0 flex justify-center items-center">
                <img
                    src="https://storage.googleapis.com/a1aa/image/pFwEyKVwgTZNQ58lVjAiQicym1mHrf1-fu3jMW3TbXk.jpg"
                    alt="Background"
                    className="w-[90%] h-[85%] object-cover rounded-lg mt-12 shadow-lg"
                />
            </div>

            {/* Main Content Wrapper */}
            <div className="relative z-10 w-full">
                {/* Navbar */}
                <nav className="absolute top-0 left-0 w-full bg-transparent py-4">
                    <div className="container mx-auto flex justify-between items-center px-6">
                        <h1 className="text-4xl font-bold">PORTFOLIO</h1>
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                    className="text-lg hover:text-blue-400 cursor-pointer"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                        <button
                            className="md:hidden text-2xl"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            ☰
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 text-center z-50 py-2">
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase()} 
                                smooth={true}
                                duration={500}
                                className="block py-2 hover:bg-gray-700 cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                )}

                {/* Hero Section */}
                <div className="container mx-auto flex flex-col items-center justify-center h-screen text-center">
                    <p className="text-4xl mb-8">Welcome To Everyone!</p>
                    <h2 className="text-5xl font-bold mb-2">Hi, I'm <span className="text-blue-400">VISHNU</span></h2>
                    <p className="text-2xl">
                        <span id="typed"></span>
                    </p>

                    {/* Social Icons */}
                    <div className="flex space-x-6 mt-10 text-2xl">
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
