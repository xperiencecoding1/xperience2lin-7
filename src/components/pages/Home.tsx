import React, { useState, useEffect } from "react";
import "../../scss/core.scss";
import "../../scss/pages.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";
import Loading from "../generic/Loading";
import { useTheme } from "../generic/ThemeContext";
import { useNavigate } from "react-router-dom";
import consultImg from "../../img/consult.jpg";
import codeImg from "../../img/code1.jpg";
import codeImg2 from "../../img/code2.jpg";
import codeImg3 from "../../img/code3.jpg";
import codeImg4 from "../../img/code4.jpg";
import codeImg5 from "../../img/code5.jpg";
import codeImg6 from "../../img/code6.jpg";
import codeImg7 from "../../img/code7.jpg";

function Home(props: {}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    codeImg,
    codeImg2,
    codeImg3,
    codeImg4,
    codeImg5,
    codeImg6,
    codeImg7,
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const theme = useTheme();
  const navigate = useNavigate();

  const advance = (url: string) => {
    theme.setLoadState(-2);
    setTimeout(() => {
      navigate(url);
      theme.setFullscreen(false);
    }, 500);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextImage, 3000); // Change 3000 to adjust interval time in milliseconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="apex-home w-100 h-100 col-cc">
      {theme.loadState >= 0 && (
        <Loading progress={theme.loadState} callback={() => {
          theme.setLoadState(-1);
          theme.setFullscreen(false);
        }} />
      )}
      <AnimatePresence>
        {theme.loadState === -1 && (
          <div className="document">
            <motion.div
              className="top-half row-bc"
              variants={Anim.bounceX(-500).spring(240, 0.25, 30).build()}
              initial="inactive"
              animate="active"
              exit="inactive"
              whileHover={{ boxShadow: "0 0 1rem white" }}
              tabIndex={0}
              onClick={() => advance("/coding")}
            >
              <div className="text col-ss h-100">
                <h1 className="oxanium bold">
                    Education
                </h1>
                <ul className="h6 oxanium">
                    <li>Specialized workshops taught by VHHS students</li>
                    <li>3:1 student-teacher ratio</li>
                    <li>12 sessions, rate TBA</li>
                    {
                        // TODO: Insert button here
                    }
                </ul>
                <h6 className="bold">Click for more details.</h6>

                {/* ... content ... */}
              </div>
              {/* Image container with fade transition */}
              <div className="fade-image">
                <AnimatePresence>
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt="Code Education"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </AnimatePresence>
              </div>
            </motion.div>
            {/* ... other content ... */}
            <motion.div
              className="bottom-half row-bc"
              variants={Anim.bounceX(500).spring(240, 0.25, 30).build()}
              initial="inactive"
              animate="active"
              exit="inactive"
              whileHover={{ boxShadow: "0 0 1rem white" }}
              tabIndex={0}
              onClick={() => advance("/consulting")}
            >
              <img src={consultImg} alt="Consulting Services" />
              <div className="text col-se h-100">
                {/* ... content ... */}
                <h1 className="oxanium bold">
                                Consulting
                </h1>
                <ul className="h6 oxanium">
                    <li>Provide local businesses with technology solutions</li>
                    <li>For eager students looking for meaningful work</li>
                    <li>Around 1 project per year, per student</li>
                    {
                        // TODO: Insert button here
                    }
                </ul>
                <h6 className="bold">Click for more details.</h6>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
