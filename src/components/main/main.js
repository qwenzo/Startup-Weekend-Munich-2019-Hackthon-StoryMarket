import React from 'react';
import './main.css';
import image1 from '../../media/1.jpg';
import image3 from '../../media/2.jpg';
import image2 from '../../media/72.jpg';
import image4 from '../../media/4.jpg';
import user2 from '../../media/31.jpg';
import user3 from '../../media/user-5.jpg';
import logo1 from '../../media/logo-1.png';
import logo2 from '../../media/logo-2.png';
import logo3 from '../../media/logo-3.png';
import logo4 from '../../media/logo-4.jpg';
import logo5 from '../../media/logo-5.png';
import project1 from '../../media/project-1.jpeg';
import prop1 from '../../media/val-1.png';
import prop2 from '../../media/val-2.png';
import prop3 from '../../media/val-3.png';

import { Link } from "react-router-dom";

class Main extends React.Component {
    state={projects:[{},{}]}
    render(){
        return(
            <main className="">
            <div className="header-long">
            <p className="header-long-title">TheStoryMarket</p>
                <p className="header-long-text">
                High-quality pieces of journalism.<br></br> <span className="header-long-text-down">ready to be published.</span>
                </p>
            </div>
            {/* { <section className="propsations">
                <div className="propsation__container">
                <img src={prop1} alt="prop-1" className="prop__img"/>
                <h3 className="prop__title">easy and fair compensation <br></br> for the freelancers</h3>
                </div>
                <div className="propsation__container">
                <img src={prop2} alt="prop-1" className="prop__img"/>
                <h3 className="prop__title">connecting the freelancers <br></br> and the media</h3>
                </div>
                <div className="propsation__container">
                <img src={prop3} alt="prop-1" className="prop__img"/>
                <h3 className="prop__title">Easy Process for <br></br> the media and the freelancers</h3>
                </div>
            </section> } */}
            {/* <section className="problem">
                <p className="problem__title">
                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Nunc sagittis pharetra malesuada.
                </p>
                <p className="problem__solution">
                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Nunc sagittis pharetra malesuada.
                </p>
            </section> */}
            <div className="row sections">
            <section className="projcts-section">
            <ul className="projects-list">
            <h3 className="stories__title">Featured Stories</h3>
                <li className="projects-item">
                    <div className="projects-item__project-container">
                        <img className="projects-item__project-image" src={image1} alt="project-1"/>
                        <div className="projects-item__text-container">
                        <Link to="/project"> <h3 className="projects-item__header">Test title</h3></Link>
                            <p className="projects-item__text">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Nunc sagittis pharetra malesuada.
                                Mauris et odio semper, dictum sem tempor, tristique purus. 
                                Morbi at urna nec enim fermentum accumsan eget sit amet felis.
                                Donec laoreet vitae justo quis convallis. Nunc sagittis vulputate libero non laoreet. 
                                {/* Aenean nec imperdiet lacus. Nam pharetra lectus sed magna semper, auctor consequat est placerat. 
                                Donec porttitor justo felis, id mattis dui convallis ac. Sed nec convallis mi. Nam cursus eros eu ornare molestie. */}
                                  <Link to="/project"><a href="" className="btn btn--read-more">..Read more</a></Link>
                            </p>
                        </div>
                        <div className="user-container">
                            <div className="user">
                                <div className="user__name-img-container">
                                    <img src={image2} alt="user-1" className="user__img"/>
                                    <span className="user__name">Jake Burnett</span>
                                </div>
                                <div className="user__companies">
                                    <img src={logo1} alt="company-1" className="user__company-logo"/>
                                    <img src={logo2} alt="user-1" className="user__company-logo"/>
                                    <img src={logo3} alt="user-1" className="user__company-logo"/>

                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="projects-item">
                    <div className="projects-item__project-container">
                        <img className="projects-item__project-image" src={project1} alt="project-1"/>
                        <div className="projects-item__text-container">
                        <Link to="/project">  <h3 className="projects-item__header">Water Ways </h3></Link>
                            <p className="projects-item__text">
                            For Munich residents, the River Isar is an integral part of daily life; for some people it’s even a regular thorough-fare. Now the city is restoring the riverscape 
                                {/* Aenean nec imperdiet lacus. Nam pharetra lectus sed magna semper, auctor consequat est placerat. 
                                Donec porttitor justo felis, id mattis dui convallis ac. Sed nec convallis mi. Nam cursus eros eu ornare molestie. */}
                                 <Link to="/project"><a href="" className="btn btn--read-more">..Read more</a></Link>
                            </p>
                        </div>
                        <div className="user-container">
                            <div className="user">
                                <div className="user__name-img-container">
                                    <img src={user3} alt="user-2" className="user__img"/>
                                    <span className="user__name">Florian Siebeck </span>
                                </div>
                                <div className="user__companies">
                                    <img src={logo4} alt="company-1" className="user__company-logo"/>
                                    <img src={logo5} alt="user-1" className="user__company-logo"/>

                                </div>
                            </div>
                        </div>
                    </div>
                </li>
              
                <li className="projects-item">
                    <div className="projects-item__project-container">
                        <img className="projects-item__project-image" src={image4} alt="project-1"/>
                        <div className="projects-item__text-container">
                        <Link to="/project"> <h3 className="projects-item__header">Test title long test title longtest title longtest title long</h3>  </Link>
                            <p className="projects-item__text">
                            He determined to drop his litigation with the monastry, and relinguish his claims to the wood-cuting and fishery rihgts at once. He was the more ready to do this becuase the rights had becom much less valuable, and he had indeed the vaguest idea where the wood and river in quedtion were.
                                {/* Aenean nec imperdiet lacus. Nam pharetra lectus sed magna semper, auctor consequat est placerat. 
                                Donec porttitor justo felis, id mattis dui convallis ac. Sed nec convallis mi. Nam cursus eros eu ornare molestie. */}
                                  <Link to="/project"><a href="" className="btn btn--read-more">..Read more</a></Link>
                            </p>
                        </div>
                        <div className="user-container">
                            <div className="user">
                                <div className="user__name-img-container">
                                    <img src={user2} alt="user-1" className="user__img"/>
                                    <span className="user__name">Nathan Li</span>
                                </div>
                                <div className="user__companies">
                                    <img src={logo3} alt="user-1" className="user__company-logo"/>

                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                
                
            </ul>
            </section>
            </div>                 
            </main>
        )
    
    }
}


export default Main;