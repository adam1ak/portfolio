import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">
        <div className="contact-head">
          <span>04.</span>
          <span>Get in touch, find me here.</span>
        </div>
        <div className="contact-bottom">
            <ul>
                <li>Email:<a>f.admiakk@gmail.com</a></li>
                <li>On the internet:<a href="https://www.linkedin.com" 
                                      target="_blank" 
                                      rel="noreferrer">LikedIn</a> 
                                      /
                                       <a href="https://github.com/adam1ak"
                                        target="_blank"
                                        rel="noreferrer">Github</a></li>
            </ul>
        </div>
    </section>
  );
}

export default Contact;
