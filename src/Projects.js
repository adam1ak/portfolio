import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState} from "react";
import images from "./images";

function Projects() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const navigateToPage = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="projects" id="projects">
        <div className="projects-head">
          <span>03.</span>
          <span>Some things I've build.</span>
          <span>(double click to open)</span>
        </div>
        <motion.div ref={carousel} className="projects-carousel" whileTap={{cursor : "grabbing"}}>
            <motion.div drag="x" dragConstraints={{right : 0, left : -width}} className="projects-container">
                {images.map((image, index) => (
                    <motion.div whileHover={{cursor : "pointer"}}
                        className="project"
                        key={index}
                        onDoubleClick={() => navigateToPage(image.url)}
                    >
                        <img src={image.src} alt={`project ${index+1}`} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </section>
  );
}

export default Projects;
