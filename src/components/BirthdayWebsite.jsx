import React, { useState, useEffect } from 'react';
import './BirthdayWebsite.css';
import jul from '../assets/images/jul.jpg';
import aug from '../assets/images/aug.jpg';
import sept from '../assets/images/sept.jpg';
import oct from '../assets/images/oct.jpg';
import nov from '../assets/images/nov.jpg';
import dec from '../assets/images/dec.jpg';
import jan from '../assets/images/jan.jpg';
import feb from '../assets/images/feb.jpg';
import mar from '../assets/images/mar.jpg';
import apr from '../assets/images/apr.jpg';

const BirthdayWebsite = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [currentSection, setCurrentSection] = useState('landing');
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });
    
  }, [currentSection]);

  const timelineData = [
    { month: 'July 2024', title: 'First Meeting', description: 'The day we first met at the basketball court - who knew my best shot would be stealing your heart? Wow may pa ganon, sus ikaw naman kasi talaga unang nagka crush sakin hehe', imgSrc: jul },
    { month: 'August 2024', title: 'We Fell in Love', description: 'Our magical dates at the National Museum, Intramuros, and many more. I just know that you already wanted to say yes to me at this point. hehe ako lang toh bebe', imgSrc: aug },
    { month: 'September 2024', title: 'Official Couple', description: 'When you decided to say yes! Grabe tong buwan na toh, from our motorcycle ride home where we got soaking wet, to meeting my family while we celebrated my birthday.', imgSrc: sept},
    { month: 'October 2024', title: 'Gala gala muna!', description: 'Gala gala gala, nako ang daming gala dito, from our first monthsary at BGC, to our dates at Cubao kung san nakapag shopping pa sa ukay ang bebe ko', imgSrc: oct },
    { month: 'November 2024', title: 'Food Trip!', description: 'Chubby na tayo nyan, puro nalang kain! We went on countless dates, even sa zoo where we met my twin monkey tapos nag tiktok tiktok pa tayo HAHAHA', imgSrc: nov },
    { month: 'December 2024', title: 'First Xmas!', description: 'Swimming at Ace Water Spa! to celebrating Christmas miles away from each other. Even though ang layo natin sa isa\'t isa ramdam na ramdam ko parin pagmamahal mo', imgSrc: dec },
    { month: 'January 2025', title: 'New Year, Same Love', description: 'Beach time! Grabe na ang beach body wowowowow, so sexy my love love. Truly an unforgettable experience, lalo na the inflatable obstacle course ', imgSrc: jan },
    { month: 'February 2025', title: 'Valentine\'s Day', description: 'Our first Valentine\'s Day together! yay thank you sa flowers mahal sobrang gandaaaa, I hope you liked my gift as well bebeee', imgSrc: feb },
    { month: 'March 2025', title: 'Fake Japan xD', description: 'We went to Japan!!! joke hehe, sa Pasay lang pala. Another monthsary that will be tattooed in my heart forever', imgSrc: mar },
    { month: 'April 2025', title: 'UP Fair', description: 'Your first UP Fair, grabe late na natin nakauwi HAHAHA pero it was super fun and you made it so enjoying. Also... HAPPY BIRTHDAY BEBE!!!', imgSrc: apr },
  ];

  const letters = [
    { id: 1, title: 'Open when you miss me', content: 'Just remember I\'m always thinking of you.', videoUrl: 'https://www.youtube.com/embed/[VIDEO_ID_5]' },
    { id: 2, title: 'Open when you\'re sad', content: 'Remember the time we...', videoUrl: 'https://www.youtube.com/embed/[VIDEO_ID_5]' },
    { id: 3, title: 'Open when you need a laugh', content: 'Here\'s something to make you smile...', videoUrl: 'https://www.youtube.com/embed/[VIDEO_ID_5]' },
    { id: 4, title: 'Open when you can\'t sleep', content: 'Close your eyes and imagine us...', videoUrl: 'https://www.youtube.com/embed/[VIDEO_ID_5]' },
    { id: 5, title: 'Open when you need motivation', content: 'You can do anything, and here\'s why...', videoUrl: 'https://www.youtube.com/embed/[VIDEO_ID_5]' },
    { id: 6, title: 'Open when you\'re stressed', content: 'Take a deep breath and remember...', videoUrl: 'https://www.youtube.com/embed/[VIDEO_ID_5]' },
  ];

  const handleLetterClick = (id) => {
    setSelectedLetter(id === selectedLetter ? null : id);
  };


  return (
    <div className="birthday-website">
      
      {currentSection !== 'landing' && (
        <nav className="navigation">
          <div className="nav-container">
            <h1 className="nav-title">Happy Birthday Baby!</h1>
            <div className="nav-buttons">
              <button 
                onClick={() => setCurrentSection('landing')}
                className="nav-button"
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentSection('timeline')}
                className={`nav-button ${currentSection === 'timeline' ? 'active' : ''}`}
              >
                Our Story
              </button>
              <button 
                onClick={() => setCurrentSection('letters')}
                className={`nav-button ${currentSection === 'letters' ? 'active' : ''}`}
              >
                Open When...
              </button>
            </div>
          </div>
        </nav>
      )}

      <div className={`content-container ${currentSection}`}>
        {currentSection === 'landing' && (
          <div className="landing-page">
            <h1 className="landing-title">Happy Birthday</h1>
            <h2 className="landing-subtitle">to my bebe, mahal, dikdok, forever</h2>
            <p className="landing-text">
              I love you so much mahal, Here's to celebrating forever with you!
            </p>
            <button 
              onClick={() => setCurrentSection('timeline')}
              className="landing-button"
            >
              Explore Our Love Story
            </button>
          </div>
        )}
        
        {/* Timeline Section */}
        {currentSection === 'timeline' && (
          <div className="timeline-section">
            <h2 className="section-title">Our Love Story</h2>
            
            <div className="timeline">
              <div className="timeline-line"></div>
              
              {timelineData.map((item, index) => (
                <div 
                  key={item.month} 
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                >
                  {/* Content */}
                  <div className="timeline-content">
                    <h3 className="timeline-month">{item.month}</h3>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                  
                  {/* Center point */}
                  <div className="timeline-point">
                    <div className="timeline-point-inner"></div>
                  </div>
                  
                  {/* Image */}
                  <div className="timeline-image-container">
                    <div className="timeline-image-wrapper">
                      <img 
                        src={item.imgSrc} 
                        alt={item.title}
                        className="timeline-image"
                      />
                      <div className="timeline-image-overlay"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Letters Section */}
        {currentSection === 'letters' && (
          <div className="letters-section">
            <h2 className="section-title">Open When...</h2>
            
            <div className="letters-grid">
              {letters.map((letter, index) => (
                <div 
                  key={letter.id} 
                  className="letter-item"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <button
                    onClick={() => handleLetterClick(letter.id)}
                    className={`letter-button ${selectedLetter === letter.id ? 'opened' : ''}`}
                  >
                    <div className="letter-header">
                      <h3 className="letter-title">{letter.title}</h3>
                      <div className="letter-icon">
                        {selectedLetter === letter.id ? '💌' : '✉️'}
                      </div>
                    </div>
                  </button>
                  
                  {selectedLetter === letter.id && (
                  <div className="letter-content">
                    <div className="letter-video-container">
                      <iframe 
                        src={letter.videoUrl} 
                        title={`Video message: ${letter.title}`}
                        className="letter-video"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="letter-message">{letter.content}</p>
                  </div>
                )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Made with love❤️ by CimanesDev</p>
      </footer>
    </div>
  );
};

export default BirthdayWebsite;