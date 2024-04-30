import React from "react";

function About() {
  return (
    <section className="about" id="about">
        <div className="about-head">
          <span>01.</span>
          <span>About me</span>
        </div>
        <div className="about-desc">
          <span>Hello! My name is Filip and I enjoy creating things that live on the internet.
             My interest in web development started back in 2020 when 
             I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a 
             lot about HTML & CSS!</span>
        </div>
        <div className="about-desc">
          <span>My main focus these days is building accessible, 
            inclusive products and digital experiences for a variety of clients.</span>          
        </div>
    </section>
  );
}

export default About;
