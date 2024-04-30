import React, { useEffect, useRef } from "react";
import './HeaderAnim.css'; // import your CSS file

function Header() {
  const listItemsRef = useRef([]);
  listItemsRef.current = [];

  const addToRefs = (el) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const listItem = entry.target;
            listItem.classList.add('animate');
          } else {
            const listItem = entry.target;
            listItem.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    listItemsRef.current.forEach((li) => observer.observe(li));

    return () => {
      listItemsRef.current.forEach((li) => observer.unobserve(li));
    };
  }, []);

  return (
    <header>    
      <ul>
        <li ref={addToRefs} className="slide-from-left">Hi, my name is</li>
        <li ref={addToRefs} className="slide-from-right">Filip Adamiak</li>
        <li ref={addToRefs} className="slide-from-left">I'm a web developer</li>
        <li ref={addToRefs} className="slide-from-right"><button>Check my projects</button></li>
      </ul>
    </header>
  );
}

export default Header;