
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {

  return (
    <div className="App">
      <div className="menubar"> Projects, Me</div> 

      <div className="MyName"> 

      <span> hey! </span>
      <span className="sofia"> XXX </span> 
      <span> here </span>
      
      </div>
      

      <div className="who">
      Computer Science and Cognitive Neuroscience student at Brown University
      </div>


    
      <div className='ProjectsHeader'>
        PROJECTS
      </div>
      <div className="ProjectsSubheader">
        Explore what I have created
      </div>

      <div className="ProjectDisplay">

      <div className="ProjectCard"> 

      </div>
      </div>

      <div className='ProjectsHeader'>
       ABOUT ME
      </div>
      <div className="ProjectsSubheader">
        Learn more about the person behind this portfolio
      </div>
      <div className="info">
        I am a sophomore at Brown University studying Computer Science and Cognitive Neuroscience. I have recently discovered a passion for design as a way of approaching problem solving. The intent with this portfolio is to bring you through my journey of discovery in design thinking and desigining experiences for different types of users. Join me! 
      </div>

      <div className="contact">
        CONTACT ME
      </div>

    </div>

  );
}

export default App;
