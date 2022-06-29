import React from "react";
import "./Portfolio.css";
import Project1 from "../../Accessories/Project1.png";
import Project2 from "../../Accessories/Project2.png";
import Project3 from "../../Accessories/Project3.png";
import Project4 from "../../Accessories/Project4.png";
import Project5 from "../../Accessories/Project5.png";
import Project6 from "../../Accessories/Project6.png";
import Project7 from "../../Accessories/Project7.png";
import Project8 from "../../Accessories/Project8.png";
import Project9 from "../../Accessories/Project9.png";
import Project10 from "../../Accessories/Project10.png";
import Project12 from "../../Accessories/Project12.png";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_project">
          <div className="portfolio_project_image">
            <img src={Project1} alt="Project" />
          </div>
          <h3>React Counter</h3>
          <div className="portfolio_project_cta">
            <a
              href="https://github.com/WCalderbank/Counter_React"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/WCalderbank"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_project">
          <div className="portfolio_project_image">
            <img src={Project2} alt="Project" />
          </div>
          <h3>Pop_Culture Quiz</h3>
          <div className="portfolio_project_cta">
            <a
              href="https://github.com/WCalderbank/Pop_Culture_Quiz"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/WCalderbank"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_project">
          <div className="portfolio_project_image">
            <img src={Project3} alt="Project" />
          </div>
          <h3>Retro Reminder List</h3>
          <div className="portfolio_project_cta">
            <a
              href="https://github.com/WCalderbank/Retro_Reminder_List"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://retro-reminder-list-321.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_project">
          <div className="portfolio_project_image">
            <img src={Project4} alt="Project" />
          </div>
          <h3>D&D Character Generator</h3>
          <div className="portfolio_project_cta">
            <a
              href="https://github.com/WCalderbank/Website_Rebuild_React_Method"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://dd-character-creator.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_project">
          <div className="portfolio_project_image">
            <img src={Project5} alt="Project" />
          </div>
          <h3>React NerdNetwork Site</h3>
          <div className="portfolio_project_cta">
            <a
              href="https://github.com/WCalderbank/React_Creative_Website"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/WCalderbank"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_project">
          <div className="portfolio_project_image">
            <img src={Project6} alt="Project" />
          </div>
          <h3>Mobile Weather App</h3>
          <div className="portfolio_project_cta">
            <a
              href="https://github.com/WCalderbank/Weather_App"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/WCalderbank"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_project">
          <div className="portfolio_project_image">
            <img src={Project7} alt="Project" />
          </div>
          <h3>Social Media Birthday Reminder</h3>
          <div className="portfolio_project_cta">
            <a
              href="https://github.com/WCalderbank/Birthday_Calendar"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/WCalderbank"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_project">
          <div className="portfolio_project_image">
            <img src={Project8} alt="Project" />
          </div>
          <h3>Television API Retriever</h3>
          <div className="portfolio_project_cta">
            <a
              href="https://github.com/WCalderbank/Tv_Show_Site"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/WCalderbank"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_project">
          <div className="portfolio_project_image">
            <img src={Project9} alt="Project" />
          </div>
          <h3>Worldwide News API</h3>
          <div className="portfolio_project_cta">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://percayso-news-6d487f.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_project">
          <div className="portfolio_project_image">
            <img src={Project10} alt="Project" />
          </div>
          <h3>Python Rock-Paper-Scissors</h3>
          <div className="portfolio_project_cta">
            <a
              href="https://github.com/WCalderbank/Python_Rock-Paper-Scissors_Game"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/WCalderbank"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_project">
          <div className="portfolio_project_image">
            <img src={Project10} alt="Project" />
          </div>
          <h3>Python Hangman</h3>
          <div className="portfolio_project_cta">
            <a
              href="https://github.com/WCalderbank/Python_Hangman"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/WCalderbank"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_project">
          <div className="portfolio_project_image">
            <img src={Project12} alt="Project" />
          </div>
          <h3>C# Dice Roll Game</h3>
          <div className="portfolio_project_cta">
            <a
              href="https://github.com/WCalderbank/Beginnner_C-Sharp_Dice"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/WCalderbank"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
