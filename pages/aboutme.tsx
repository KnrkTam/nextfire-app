import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home(props) {


    return (
        <>
          <main className="row">
            <div className="card col-sm-3" > 
              <img className="card-img-center" src="profile_pic.jpg" alt="my profile photo"/>
              <h2>Kenrick Tam</h2>
                <h3>Web developer</h3>
                <button className="btn-purple" onClick={contactMe}>Contact me</button>
                <a href="/resume.pdf" download><button className="btn-purple">Download Resume</button></a>
                <a href="https://www.linkedin.com/in/kenrick-tam-39625915b/"><button className="btn-purple">Linkedin</button></a>

            </div>
          </main>
        </>
    );
  
  }


  function contactMe()
  {
      window.location.href = "mailto:kenricktam@gmail.com";
  }
  