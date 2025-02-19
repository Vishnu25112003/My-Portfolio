import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const About = () => {
  const text = "View My Resume";
  const speed = 150; // Medium speed
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    let newText = "";

    const typeWriter = () => {
      if (i < text.length) {
        newText += text.charAt(i);
        setTypedText(newText);
        i++;
        setTimeout(typeWriter, speed);
      }
    };

    setTypedText("");
    typeWriter();

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blinks every 0.5s

    return () => clearInterval(cursorInterval);
  }, []);

  const handleBounce = (e) => {
    e.target.classList.add("animate-bounce");
    setTimeout(() => {
      e.target.classList.remove("animate-bounce");
    }, 1000);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:gap-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://storage.googleapis.com/a1aa/image/cAnJYwEk52jfSaJDipKMljkrmpNcFU01vop1oqBHvrU.jpg"
          alt="About Me"
          className="rounded-lg shadow-lg w-full max-w-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">About Me!</h1>
        <p className="text-gray-400 mb-4">Read</p>

        <div className="text-lg mb-6 max-w-lg mx-auto md:mx-0 text-justify">
          <p>
            I’m Vishnu, a MERN Stack developer passionate about creating user-friendly
            and responsive websites. I have experience in web development, UI/UX design,
            and ReactJS, gained through internships and training. My goal is to build seamless
            and efficient digital experiences. Let’s work together to bring your ideas to life!
          </p>
        </div>

        {/* Typing Effect */}
        <div className="mt-4 text-xl font-bold">
          <span>{typedText}</span>
          <span className={`${showCursor ? "inline" : "hidden"}`}>&#124;</span>
        </div>

        <div className="mt-4">
          <button
            className="inline-flex items-center bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-500 hover:text-white"
            onClick={handleBounce}
          >
            <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
            My Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
