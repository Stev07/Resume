import '../scss/resume.scss';

import React from 'react';

import svgJs from '../img/skills/10440540451540553614.svg';
import svgNode from '../img/skills/15918937141551942278.svg';
import svgSass from '../img/skills/16593581021551942823.svg';
import svgAngular from '../img/skills/20976509271536125453.svg';
import svgGit from '../img/skills/2193713731530103314.svg';
import svgCss from '../img/skills/367592651557997006.svg';
import svgVue from '../img/skills/3769845101552037062.svg';
import svgMysql from '../img/skills/5345125911553750371.svg';
import svgPhp from '../img/skills/5974846151553750362.svg';
import svgBootstrap from '../img/skills/6870940341536207300.svg';
import svgHtml from '../img/skills/7016965741557996995.svg';
import svgReact from '../img/skills/9159770461553750379.svg';

//Import SVG Icons
class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.controller = new ScrollMagic.Controller();
        this.animResue = new TimelineLite();
    }

    componentDidMount() {
        //ANIM DESKTIOP
        this.checkClientWidth() > 771
            ? (this.animResue.from(".education-item1", 0.6, { x: "+100vw" }),
                this.animResue.from(".education-item2", 0.6, { x: "+100vw" }),
                this.animResue.from(".resume-item1", 0.6, { x: "+100vw" }),
                this.animResue.from(".resume-item2", 0.6, { x: "+100vw" }),
                this.animResue.from(".resume-item3", 0.6, { x: "+100vw" }))
            : //ANIM TABLET
            this.checkClientWidth() > 576 && this.checkClientWidth() < 772
                ? (this.animResue.from(".education-title", 1.3, { x: "-100vw" }, 0),
                    this.animResue.from(
                        ".resume-title",
                        1.3,
                        { x: "-100vw", opacity: 1 },
                        0
                    ))
                : //ANIM MOBILE
                this.checkClientWidth() < 577
                    ? (this.animResue.from(".education-title", 1.1, { x: "-100vw" }, 0),
                        this.animResue.from(".education-items", 1.3, { x: "+100vw" }, 0),
                        this.animResue.from(".resume-title", 1.1, { x: "-100vw" }, 0),
                        this.animResue.from(".resume-items", 1.3, { x: "+100vw" }, 0))
                    : null;

        new ScrollMagic.Scene({
            triggerElement: "#resume",
            triggerHook: "onLeave",
            ease: Back.easeOut.config(3),
            // duration: 300, // scroll distance
            offset: -300 // start this scene after scrolling for 50px
        })
            .setTween(this.animResue)
            .addTo(this.controller); // assign the scene to the controller
        // .addIndicators()
        // .setPin(".about-me-about") // pins the element for the the scene's duration
    }

    checkClientWidth() {
        let clientWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        return clientWidth;
    }

    render() {
        return (
            <div id="resume">
                <section id="education" className="education">
                    <div className="education-title">
                        <p>EDUCATION</p>
                    </div>
                    <div className="education-items">
                        <div className="education-item1">
                            <h3>Junior Web Developer</h3>
                            <h5>
                                <em>Becode | Oct 2018 - Mai 2019</em>
                            </h5>
                            <br />
                            <p>
                                Intensive 7 months coding training completed by 3-months
                                internship: -Active learning; -Achieving individual and group
                                projects following the Agile and Scrum methodologies; -Pair/group programming; -Watch presentation
              </p>
                        </div>
                        <div className="education-item2">
                            <h3>Accounting technician</h3>
                            <h3>Certificate relating to basic management knowledge</h3>
                            <h5>
                                <em>Saint-Lambert Herstal | 2013</em>
                            </h5>
                        </div>
                    </div>
                </section>

                <div className="separate" />

                <section id="resume" className="resume">
                    <div className="resume-title">
                        <p>WORKS</p>
                    </div>
                    <div className="resume-items">
                        <div className="resume-item1">
                            <h3>Angular Developer</h3>
                            <h5>
                                <em>IntoTheWeb | Jan 2015 - Mar 2018</em>
                            </h5>
                            <br />
                            <p>
                                Applications development in Angular(CRM, Boilerplate, ...)
              </p>
                        </div>
                        <div className="resume-item2">
                            <h3>System Developer</h3>
                            <h5>
                                <em>NSI IT Software & Services | May 2019 - Aug 2019</em>
                            </h5>
                            <p></p>
                        </div>
                        <div className="resume-item3">
                            <h3>Manager-Assistant</h3>
                            <h5>
                                <em>Lidl | Jan 2015 - Mar 2018</em>
                            </h5>
                            <br />
                            <p>
                                Managed a team of 20 employees; Conducted team meetings and
                                trainings to update members on best practices; Planned daily
                                work activities.
              </p>
                        </div>
                    </div>
                </section>

                <div className="separate" />

                <section id="skills">
                    <div className="skills-box">
                        <div class="skills-html" tooltip="HTML">
                            <img src={svgHtml} alt="html" />
                        </div>
                        <div class="skills-css" tooltip="CSS">
                            <img src={svgCss} alt="CSS" />
                        </div>
                        <div class="skills-js" tooltip="Javascript">
                            <img src={svgJs} alt="javascript" />
                        </div>
                        <div class="skills-node" tooltip="Node.js">
                            <img src={svgNode} alt="node.js" />
                        </div>
                        <div class="skills-react" tooltip="React">
                            <img src={svgReact} alt="react" />
                        </div>
                        <div class="skills-vue" tooltip="Vue">
                            <img src={svgVue} alt="Vue" />
                        </div>
                        <div class="skills-mysql" tooltip="Mysql">
                            <img src={svgMysql} alt="mysql" />
                        </div>
                        <div class="skills-sass" tooltip="Sass">
                            <img src={svgSass} alt="sass" />
                        </div>
                        <div class="skills-git" tooltip="Git">
                            <img src={svgGit} alt="git" />
                        </div>
                        <div className="skills-bootstrap" tooltip="Bootstrap">
                            <img src={svgBootstrap} alt="bootstrap" />
                        </div>
                        <div className="skills-php" tooltip="PHP">
                            <img src={svgPhp} alt="Php" />
                        </div>
                        <div className="skills-angular" tooltip="Angular">
                            <img src={svgAngular} alt="angular" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Resume;
