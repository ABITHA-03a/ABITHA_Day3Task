import React, { useState, useEffect } from 'react';
import './ProfileCard.css'; // Import the CSS file for styling
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import profileImage from './samantha.jpg'; // Adjust the path accordingly

function ProfileCard() {
  const [step, setStep] = useState(0); // State to track the current step
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    if (step > 0 && step < 6) {
      const timer = setTimeout(() => setStep(step + 1), 1500); // Transition every 1.5 seconds
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleImageClick = () => {
    setStep(1); // Start the content display after the image is clicked
  };

  const handleFollowClick = () => {
    setFollowed(!followed); // Toggle follow state
  };

  return (
    <div className="profile-card">
      {/* Step 0: Display only image */}
      {step >= 0 && (
        <img
          className="profile-image"
          src={profileImage}
          alt="Profile"
          onClick={handleImageClick} // Handle click to start displaying content
        />
      )}
      
      {/* Step 1: Display image + name */}
      {step >= 1 && <h2 className="profile-name">Samantha N</h2>}

      {/* Step 2: Display image + name + skills */}
      {step >= 2 && (
        <div className="profile-skills">
          <p className="profile-title">Skills:</p>
          <div className="skills-list">
            <span className="skill">Java</span>
            <span className="skill">MySQL</span>
            <span className="skill">C#</span>
            <span className="skill">C</span>
          </div>
        </div>
      )}

      {/* Step 3: Display image + name + skills + description */}
      {step >= 3 && (
        <p className="profile-description">
          Passionate developer with experience in building software applications using modern technologies.
        </p>
      )}

      {/* Step 4: Display followers */}
      {step >= 4 && (
        <div className="followers">
          <p className="profile-description">Followers:</p>
          <ul>
            <li>
              <i className="bi bi-instagram"></i> Instagram: 1500k
            </li>
            <li>
              <i className="bi bi-linkedin"></i> LinkedIn: 900k
            </li>
          </ul>
        </div>
      )}

      {/* Step 5: Display follow button */}
      {step >= 5 && (
        <button className="follow-btn" onClick={handleFollowClick}>
          {followed ? 'Unfollow' : 'Follow'}
        </button>
      )}

      {/* Step 6: Display contact button */}
      {step >= 6 && (
        <button className="contact-btn">
          <i className="bi bi-envelope"></i> Contact
        </button>
      )}
    </div>
  );
}

export default ProfileCard;
