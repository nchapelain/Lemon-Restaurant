import React from "react";
import './About.css';
import image1 from '../../../icons_assets/about1.jpg';
import image2 from '../../../icons_assets/about2.jpg';


const About = () => {
    return (
        <>
        <section className="grid2 container about">
                <section>
                    <h1 className="yellow">About</h1>
                    <h4 className="subtitle">Little lemon Chicago</h4>

                    <p >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit.
    Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia enim velit mollit.

                            <br />
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit.
    Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia enim velit mollit.
                    </p>
                    </section>
                    <section className="grid2">
                        <img src={image1} className="roundedcorner" />
                        <img src={image2} className="roundedcorner" />
                    </section>
                    </section>
                </>
    );
}

export default About;