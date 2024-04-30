import React, { useState } from 'react';
import experienceDetails from './experienceDetails.json'; // Adjust the path according to your file location

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState('TechCorp');

  const handleJobClick = (jobName) => {
    setSelectedJob(jobName);
  };

  return (
    <section className="experience" id="experience">
        <div className="experience-head">
          <span>02.</span>
          <span>Experience</span>
        </div>
        <div className="experience-container">
            <div className="button-list">
                {Object.keys(experienceDetails).map((jobName) => (
                <button
                    key={jobName}
                    className={`job-button ${selectedJob === jobName ? 'selected' : ''}`}
                    onClick={() => handleJobClick(jobName)}
                    >
                    {jobName}
                </button>
            ))}
            </div>
            <div className="job-details">
                <h2>{experienceDetails[selectedJob].position} @{selectedJob}</h2>
                <span>{experienceDetails[selectedJob].year}</span>
                <ol>
                    {experienceDetails[selectedJob].description.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ol>
            </div>
        </div>
    </section>
  );
};

export default Experience;
