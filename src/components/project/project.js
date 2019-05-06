import React from 'react';
import './project.css';
import project1 from '../../media/project-1.jpeg';
import project2 from '../../media/project-2.jpg';
import project3 from '../../media/project-3.jpg';
import user3 from '../../media/user-5.jpg';
import logo4 from '../../media/logo-4.jpg';
import logo5 from '../../media/logo-5.png';

class Project extends React.Component{
    state={imageIndex:1,viewPopup:false}
    render(){
        return(
            <div className='project row'>
                <div className="project-container">
                <div className="project__price">
                    <span className="project__price-number">300,-</span>
                </div>
                <p className="project__title"> 
                    Water Ways
                </p>
                <div className="project__info">
                    Number of Lines:<i>560</i>&nbsp;&nbsp;&nbsp;&nbsp;Number of words:<i>2372</i>&nbsp;&nbsp;&nbsp;&nbsp;Type of Content:<i>Photo, Text</i>
                </div>
                <div className="project__images-container">
                    <div className="project__img-container">
                        <img src={project1} alt="img-project-1" className="project__img"/>
                        <p className="project__img-watermark">x y.Munich, Germany,2017</p>
                    </div>
                    <div className="project__img-container">
                        <img src={project2} alt="img-project-2" className="project__img"/>
                        <p className="project__img-watermark">x y.Munich, Germany,2018</p>
                    </div>
                    { <div className="project__img-container">
                        <img src={project3} alt="img-project-3" className="project__img"/>
                        <p className="project__img-watermark">x y.Munich, Germany,2018</p>
                    </div> }
                </div>
                <div className="project__text">
                    <h3 className="project__section-title">Summary</h3>
                    <div className="project__excerpt">
                            <blockquote className="project__excerpt-title">
                            For Munich residents, the River Isar is an integral part of daily life; for some people it’s even a regular thorough-fare. Now the city is restoring the riverscape 
                            </blockquote>
                            <span className="project__excerpt-quoter">&#8212; and a new city pool is on the horizon.</span>
                        </div>
                    <h3 className="project__section-title">Excerpt</h3>
                    <div className="project__expercts">
                        <div className="project__paragraph">
                        Every morning, ahead of his commute, Benjamin David not only checks the weather forecast but also the water level of the Isar. Instead of taking the car or bike to work, the 41-year-old social entrepreneur folds his suit into a waterproof nylon bag and dips into the river, swim-ming 2km to his office in central Munich. “This is where we grew up, where we kissed our first girlfriends — it was our space,” he says. “They have since reinstated the natural habitat of the river and it’s much greener now.” As David dives into his commute on a sunny Wednesday morning, Isar’s depth is 71cm, with a temperature of almost 18c. “Ideal conditions,” he says. “While others wait in traffic, I watch dragonflies fly by. Where else can you immerse yourself in nature right in the centre of town?”

Unlike cities such as Basel, where large numbers of people use the Rhine to commute to work, swimmers like David are still an oddity in the Isar. Because of the current, swimming is partly prohibited here — but the rules are not enforced. As such, David relies on the Bavarian constitution, which grants every citizen the right to enjoy the state’s nature and its waters. “For hundreds of years the Isar was the main trade channel between Italy and Austria-Hungary,” he says. “It was the Isar that turned Munich from a monastery hicksville to a metropolis.” Today the riverbanks draw thousands of people to bathe in the sun.

The 300 km-long Isar originates in the Tyrolean Alps and eventually flows into the Danube; for people in Munich it’s less a body of water than a lifeline stretching from southwest to northeast. “On my way home after work I pause here, jump into the river and refresh,” says physiotherapist Lukas Kitiratschky, as he dries off in the sun. Another well-known spot is Flaucher Park, with its pebbled shores and secluded bays. “It’s one of the few places in town where you can be nude,” says Max Schwindling, a student of landscape architecture at Munich’s university, who frequently spends time here to unwind. “Everybody’s relaxed and nobody judges, and in summer it’s really enjoyable.”

Other parts of this capricious river are less tranquil. In some spots, such as the Eisbach wave in the Englischer Garten, people even surf; men and women with surfboards under their arms are a common sight in central Munich throughout the year. Further up, where the stream gets calmer, we meet a dog called Lola playing in the water.

To encourage more people to swim in Munich, swimming commuter David co-founded Isarlust, an association that promotes the Isarflussbad, a 650-metre-long river-fed swimming area between Corneliusbridge and Maximiliansbridge that will, if all goes to plan, be protected from strong currents. Viennese consultancy Werner was asked to map out the costs (estimated at €16m to €32m), and in July, a small majority in City Council voted in favour of proceeding with the pool. Against all odds, the project has united parties across the entire political spectrum, from conservatives to liberals to greens. The biggest opponent is the Social Democratic Party, which claims that people can already bathe in parts of the Isar and that a river pool would only be open in the summer season between June and September.

“To bathe is not to swim,” conservative Bavarian prime minister Markus Söder of the Christian Social Union was quick to point out, “and to swim in a river is a completely different experience from going to a lido.” Söder is a strong sup-porter of the Isarflussbad, promising “a substantial sum” in state support. That this approach works, he argues, can be seen in Bern and Zurich, with their ubiquitous Badis, as well as the harbour baths in Copenhagen, which attract locals and visitors alike. If everything falls into place, Isarflussbad could open as soon as 2020, welcoming up to 3,000 visitors every day. “Other European cities show us it’s possible, so we should speed up the planning now,” says Munich’s deputy mayor Josef Schmid, joking that, if needed, he would even be willing to serve as pool attendant.
                        </div>
                        {/* <div className="project__excerpt">
                            <blockquote className="project__excerpt-title">
                            Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Nunc sagittis pharetra malesuada.
                            </blockquote>
                            <span className="project__excerpt-quoter">&#8212; Gavin Thibodeaux</span>
                        </div>
                        <div className="project__excerpt">
                            <blockquote className="project__excerpt-title">
                            Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Nunc sagittis pharetra malesuada.
                                        Lorem ipsum dolor sit amet,
                            </blockquote>
                            <span className="project__excerpt-quoter">&#8212; Refugio Pryce</span>
                        </div> */}
                    </div>
                    <div className="project__user">
                        <img src={user3} alt="user-1" className="project__user-img"/>
                        <p className="project__user-name">Florian Siebeck
                        {/* <span className="test">14th March 2016</span> */}
                        </p>
                       
                       
                        <div className="companies">
                            <img src={logo5} alt="user-1" className="user__company-logo"/>
                            <img src={logo4} alt="user-1" className="user__company-logo"/>
                        </div>
                        <p className="project__user__bio">
                        28 year old journalist, photographer and publisher.
                        I published two magazines, one book and a bookazine—plus about one million characters of text in other media. I was raised in Berlin and since then have seen 69 countries. For my dissertation I have asked 150 editorial teams if they use editorial wikis within the production process. I get frequently asked if I have my hair dyed black. I haven’t. I like to go swimming wherever I am. In March 2010 in the Irish Sea, for example, or in Neva river in Saint Petersburg. I spent 1700 hours of my life in aircrafts. In 2009 I have worked for the China International Publishing Group in Beijing. I also played in an ad that was aired on Chinese national television CCTV. By the way, I created the German Wikipedia article for »YouTube«. When I was a child I wanted to become gardener. My favorite character is the diaeresis, which brings us beautiful words like »preëlection«.
                        </p>
                        <h3 className="project__user-work project__section-title">MY Work</h3>
                        <div className="project__user-refs">
                            <a href="https://www.faz.net/aktuell/stil/drinnen-draussen/der-japanische-blumenkuenstler-makoto-azuma-15589248.html" className="btn project__user-ref">Makoto Azuma schießt Bonsai ins All und versenkt Blumen auf dem Meeresboden – um die fragile Schönheit der Natur einzufangen</a>
                            <a href="https://www.vogue.de/lifestyle/artikel/royal-week-outen-im-koenigshaus" className="btn project__user-ref">Was würde passieren, wenn sich ein Royal heute outen würde?</a>
                        </div>
                    </div>
                </div>
                <div className="project__buy-container">
                <button onClick={()=>{
                    this.setState({viewPopup:true})
                }} href="#" className="btn--buy btn btn-wrapped">send an offer</button>
                </div>
                </div>
                { this.state.viewPopup? <div className="popup">
                        <div className="popup__content">
                            <div className="popup__header">
                                <i onClick={()=>{
                                this.setState({viewPopup:false})
                                 }} 
                                 className="btn--close material-icons">
                                close
                                </i>
                            </div>
                            <div className="popup__body">
                                <form onSubmit={this.onSubmitForm.bind(this)} action="" className="form">
                                    <div className="form__input-container">
                                        <span className="form__input-title">First Name</span>
                                        <input required type="text" className="form__input"/>
                                    </div>
                                    <div className="form__input-container">
                                    <span className="form__input-title">Last Name</span>
                                        <input required type="text" className="form__input"/>
                                    </div>
                                    <div className="form__input-container">
                                        <span className="form__input-title">E-mail</span>
                                        <input type="email" className="form__input"/>
                                    </div>
                                    <div className="form__input-container">
                                        <span className="form__input-title">Company</span>
                                        <input required type="text" className="form__input"/>
                                    </div>
                                    <div className="form__input-container text-container">
                                        <span className="form__input-title">Message</span>
                                        <textarea required className="form__textarea" name="" id="" cols="30" rows="10"></textarea>
                                    </div>
                                    <div className="btn-container">
                                    <button className="btn btn-wrapped" >send an offer now!</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>:''}
            </div>
        )
    }
     onSubmitForm(event){
        console.log(event);
        event.preventDefault();
    }
}



export default Project;