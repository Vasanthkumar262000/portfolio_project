import logo from './logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <body className="App-body"> 
       <section className='App-contact'>
        <div id='profile' className="profile">
          <div id='profile-photo' className="profile-photo">
            <img fit="cover" alt="Vasanthkumar_Image" className="App-logo" width="320" height="320" src="/images/Vas_Prof.png" loading="lazy" decoding="async"></img>
            <a target="_blank" href="/files/Vasanthkumar_CV copy.pdf" className="profile_CV"  > Download CV</a>
          </div>
          <div id ="contact-info" className='contact-info'>
              <h1 className="profile-name" >Vasanthkumar Ramamoorthi</h1>
              <h2 className="profile-designation" >Master's in Computer Science</h2>
              <p>Phone Number:  +1 425 457 4619</p>
              <p>Email:         vas.ram.2620@gmail.com</p>
              <p>Location:      Chicago, Illinois</p>
              <p>Salary range:  NA</p>
              <p1>I'm an experienced Backend Developer and DevOps Engineer with 2 years of total experience. 
                Proficient in Python, C# .Net, MVC, and Django, with a track record of consistently 
                delivering high-quality, scalable solutions. Known for conceptualizing and implementing 
                innovative features, resulting in enhanced user experiences and heightened customer satisfaction. 
                Recognized for achieving exceptional results, including consistently surpassing project 
                milestones and optimizing application performance to elevate user satisfaction.</p1>
                <div id='contact-extra' className='contact-extra'>
                  <div className='work-status'>
                    Open for work
                  </div>
                  <div className='project-status'>
                    Wroking on self projects
                  </div>
                  <div className='location-status'>
                    Interested in relocating for work
                  </div>
                </div>
          </div>
          
        
          <div id='contact-links'>
            <a aria-label='LinkedIn' href="https://www.linkedin.com/in/vasanthkumar-r-923748181"
                target='blank'>
                  <iconify-icon icon="fa6-brands:linkedin-in">
                  </iconify-icon>
            </a>
            <a aria-label='GitHub' href="https://github.com/Vasanthkumar262000?tab=repositories" 
                target='blank'>
                  <iconify-icon icon="fa6-brands:github">
                  </iconify-icon>
            </a>

          </div>

        </div>    
        </section>

       <section  className="App-Button">
          <button>
            Project
          </button>
          <button>
            Education
          </button>
          <button>
            Experiance
          </button>
          <button>
            Internship
          </button>
          <button>
            Certification
          </button>
       </section>
 </body>
      
    </div>
  );
}

export default App;
