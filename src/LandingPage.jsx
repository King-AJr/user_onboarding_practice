import { Steps, Hints } from "intro.js-react";

import "intro.js/introjs.css";
import { useState } from "react";
import introJs from "intro.js";

const LandingPage = () => {
    const [stepEnabled, setStepEnabled] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([
        {
        element: "#home",
        intro: "Click to return home"
        },
        {
        element: "#aboutt",
        intro: "Learn more about us"
        },
        {
          element: "#test",
          intro: "Click to see testimonials from others"
        },
        {
          element: "#contact",
          intro: "Click to contact us"
        }
    ])
    
    const onExit = () => {
      setStepEnabled(false);
    };

    const options = {
      showProgress: true,
      showBullets: true,
      exitOnOverlayClick: true,
      exitOnEsc: true,
      nextLabel: 'Next',
      prevLabel: 'Prev',
      skipLabel: 'Skip',
      hidePrev: true,
      doneLabel: 'Done',
      overlayOpacity: 0.5,
      overlayColor: '#000',
      showStepNumbers: true,
      keyboardNavigation: true,
      scrollToElement: true,
      helperElementPadding: 10,
      showButtons: true
    };
    
  const hintsEnabled = useState(true);
   const [hints, setHints] = useState([
    {
      element: "#dropdown",
      hint: "Hover here to view more features",
      hintPosition: 'bottom-middle',
      hintAnimation: true,
      hintShowButton: true
    }
    ]);

    const toggleOnboarding = () => {
        setStepEnabled(!stepEnabled); // Toggle the stepEnabled state
      };


      const intro = introJs();
      intro.setOptions({
        steps: steps,
        // Set the current step based on the state
        step: currentStep,
        // Callback when the tour exits
        onbeforeexit: function () {
            return alert("Are you sure?");
        }
      });

      const onAfterChange = (targetid, targetElement) => {
        // Custom logic after changing to the next step (e.g., animations)
        if (targetid === "contact") {
            // Add a simple CSS animation to highlight the new feature
            targetElement.classList.add("highlight-animation");
          }
        }

        const onComplete = () => {
            return alert("Congratulations you're ready to use our app")
        }

    return (
    <div>
        
        <Steps
                enabled={stepEnabled} // Enabling or disabling the user onboarding steps based on the stepEnabled state 
                steps={steps}
                initialStep={0}
                onExit={onExit}
                onAfterChange={onAfterChange}
                onComplete={onComplete}
              options={options}
              />
            <Hints enabled={true} hints={hints} />
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        {/* <!-- ***** Logo Start ***** --> */}
                        <a href="ng" className="logo">
                            Lava
                        </a>
                        {/* <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** --> */}
                        <ul className="nav">
                       <li className="scroll-to-section"><button className="onboarding-button" onClick={toggleOnboarding}>START TUTORIAL</button></li>
                            <li className="scroll-to-section"><a href="#welcome" className="menu-item"  id="home">Home</a></li>
                            <li className="scroll-to-section"><a href="#about" className="menu-item" id="aboutt">About</a></li>
                            <li className="scroll-to-section test"><a href="#testimonials" id="test" className="menu-item">Testimonials</a>
                            </li>
                            <li className="submenu" id="dropdown">
                                <a href="javascript">Drop Down</a>
                                <ul>
                                    <li><a href="tj" className="menu-item">About Us</a></li>
                                    <li><a href="tj" className="menu-item">Features</a></li>
                                    <li><a href="tj" className="menu-item">FAQ's</a></li>
                                    <li><a href="tj" className="menu-item">Blog</a></li>
                                </ul>
                            </li>
                            <li className="scroll-to-section"><a href="#contact-us" id="contact" className="menu-item">Contact Us</a></li>
                        </ul>
                        <a href="tj" className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        {/* <!-- ***** Menu End ***** --> */}
                    </nav>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- ***** Header Area End ***** -->


    <!-- ***** Welcome Area Start ***** --> */}
    <div className="welcome-area" id="welcome">

        {/* <!-- ***** Header Text Start ***** --> */}
        <div className="header-text">
            <div className="container">
                <div className="row">
                    <div className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <h1>Simple App that we <em>CREATE</em></h1>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ***** Header Text End ***** --> */}
    </div>
    {/* <!-- ***** Welcome Area End ***** -->

    <!-- ***** Features Big Item Start ***** --> */}
    <section className="section" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <div className="features-item">
                        <div className="features-icon">
                            <h2>01</h2>
                            <img src="assets/images/features-icon-1.png" alt=""/>
                            <h4>Trend Analysis</h4>
                            <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            <a href="#testimonials" className="main-button">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
                    <div className="features-item">
                        <div className="features-icon">
                            <h2>02</h2>
                            <img src="assets/images/features-icon-2.png" alt=""/>
                            <h4>Site Optimization</h4>
                            <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            <a href="#testimonials" className="main-button">
                                Discover More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <div className="features-item">
                        <div className="features-icon">
                            <h2>03</h2>
                            <img src="assets/images/features-icon-3.png" alt=""/>
                            <h4>Email Design</h4>
                            <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            <a href="#testimonials" className="main-button">
                                More Detail
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ***** Features Big Item End ***** --> */}

    <div className="left-image-decor"></div>

    {/* <!-- ***** Features Big Item Start ***** --> */}
    <section className="section" id="promotion">
        <div className="container">
            <div className="row">
                <div className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src="assets/images/left-image.png" className="rounded img-fluid d-block mx-auto" alt="App"/>
                </div>
                <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
                    <ul>
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                            <img src="assets/images/about-icon-01.png" alt=""/>
                            <div className="text">
                                <h4>Vestibulum pulvinar rhoncus</h4>
                                <p>Please do not redistribute this template ZIP file for a download purpose. You may <a
                                rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact</a> us for
                            additional licensing of our template or to get a PSD file.</p>
                            </div>
                        </li>
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s">
                            <img src="assets/images/about-icon-02.png" alt=""/>
                            <div className="text">
                                <h4>Sed blandit quam in velit</h4>
                                <p>You can <a rel="nofollow"
                                        href="https://templatemo.com/tm-540-lava-landing-page">download Lava
                                        Template</a> from our website. Duis viverra, ipsum et scelerisque placerat, orci
                                    magna consequat ligula.</p>
                            </div>
                        </li>
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                            <img src="assets/images/about-icon-03.png" alt=""/>
                            <div className="text">
                                <h4>Aenean faucibus venenatis</h4>
                                <p>Phasellus in imperdiet felis, eget vestibulum nulla. Aliquam nec dui nec augue
                                    maximus porta. Curabitur tristique lacus.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ***** Features Big Item End ***** --> */}

    <div className="right-image-decor"></div>

    {/* <!-- ***** Testimonials Starts ***** --> */}
    <section className="section" id="testimonials">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="center-heading">
                        <h2>What They Think <em>About Us</em></h2>
                        <p>Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod purus non, convallis odio.
                            Donec vitae magna ornare, pellentesque ex vitae, aliquet urna.</p>
                    </div>
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <div className="owl-carousel owl-theme">
                        <div className="item service-item">
                            <div className="author">
                                <i><img src="assets/images/testimonial-author-1.png" alt="Author One"/></i>
                            </div>
                            <div className="testimonial-content">
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <h4>Jonathan Smart</h4>
                                <p>“Nullam hendrerit, elit a semper pharetra, ipsum nibh tristique tortor, in tempus
                                    urna elit in mauris.”</p>
                                <span>Besta CTO</span>
                            </div>
                        </div>
                        <div className="item service-item">
                            <div className="author">
                                <i><img src="assets/images/testimonial-author-1.png" alt="Second Author"/></i>
                            </div>
                            <div className="testimonial-content">
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <h4>Martino Tino</h4>
                                <p>“Morbi non mi luctus felis molestie scelerisque. In ac libero viverra, placerat est
                                    interdum, rhoncus leo.”</p>
                                <span>Web Analyst</span>
                            </div>
                        </div>
                        <div className="item service-item">
                            <div className="author">
                                <i><img src="assets/images/testimonial-author-1.png" alt="Author Third"/></i>
                            </div>
                            <div className="testimonial-content">
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <h4>George Tasa</h4>
                                <p>“Fusce rutrum in dolor sit amet lobortis. Ut at vehicula justo. Donec quam dolor,
                                    congue a fringilla sed, maximus et urna.”</p>
                                <span>System Admin</span>
                            </div>
                        </div>
                        <div className="item service-item">
                            <div className="author">
                                <i><img src="assets/images/testimonial-author-1.png" alt="Fourth Author"/></i>
                            </div>
                            <div className="testimonial-content">
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <h4>Sir James</h4>
                                <p>"Fusce rutrum in dolor sit amet lobortis. Ut at vehicula justo. Donec quam dolor,
                                    congue a fringilla sed, maximus et urna."</p>
                                <span>New Villager</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ***** Testimonials Ends ***** --> */}


    {/* <!-- ***** Footer Start ***** --> */}
    <footer id="contact-us">
        <div className="container">
            <div className="footer-content">
                <div className="row">
                    {/* <!-- ***** Contact Form Start ***** --> */}
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="contact-form">
                            <form id="contact" action="" method="post">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <fieldset>
                                            <input name="name" type="text" id="name" placeholder="Full Name" required=""
                                                style={{ backgroundColor: 'rgba(250, 250, 250, 0.3)' }}/>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <fieldset>
                                            <input name="email" type="text" id="email" placeholder="E-Mail Address"
                                                required="" style={{backgroundColor: "rgba(250,250,250,0.3)"}}/>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <textarea name="message" rows="6" id="message" placeholder="Your Message"
                                                required="" style={{backgroundColor: "rgba(250,250,250,0.3)"}}></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="main-button">Send Message
                                                Now</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!-- ***** Contact Form End ***** --> */}
                    <div className="right-content col-lg-6 col-md-12 col-sm-12">
                        <h2>More About <em>Lava</em></h2>
                        <p>Phasellus dapibus urna vel lacus accumsan, iaculis eleifend leo auctor. Duis at finibus odio.
                            Vivamus ut pharetra arcu, in porta metus. Suspendisse blandit pulvinar ligula ut elementum.
                            <br/><br/>If you need this contact form to send email to your inbox, you may follow our <a
                                rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact</a> page
                            for more detail.</p>
                        <ul className="social">
                            <li><a href="https://fb.com/templatemo"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-rss"></i></a></li>
                            <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="sub-footer">
                        <p>Copyright &copy; 2020 Lava Landing Page

                        | Designed by <a rel="nofollow" href="https://templatemo.com">TemplateMo</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </div>
    )
}

export default LandingPage;

