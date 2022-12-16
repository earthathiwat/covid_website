import React from "react";
import logo from "./logo/GTIC-Logo.png";
import WHO_Logo from "./logo/WHO_logo1.png";
import CDC_Logo from "./logo/cdc-2.svg";
import UN_logo from "./logo/unwfp.jpeg";

export function AboutHeader() {
  return (
    <header>
      <h1>About This Information Center</h1>
    </header>
  );
}

export function General() {
  return (
    <section>
      <h2>General</h2>
      <p className="md-spacing">
        With changes to travel regulations during the COVID-19 pandemic,
        travellers must be well-informed when they make travel decisions. The
        data-gathering process can be overwhelming due to different countries
        imposing different regulations. This is where this centralized
        information center comes in to help! This is an interactive information
        center that gives you all the information you need about your
        destination including travel restrictions, quarantine information, and
        local policies. Just select a destination country and we will display
        all travel information applicable to it.
      </p>
    </section>
  );
}

export function HowTo() {
  return (
    <section>
      <h2>How to Use</h2>
      <div className="flex-container">
        <div className="flex-item-2">
          <i className="fa fa-map fa-2x"></i>
          <h3>The Map</h3>
          <p className="md-spacing">
            Hover around and select the country of destination. If you cannot
            find them, just search by the country name! If you are unsure where
            to travel to, use our filter to show only countries that matches
            with your requirements.
          </p>
        </div>
        <div className="flex-item-2">
          <i className="fa fa-database fa-2x"></i>
          <h3>Policy Data</h3>
          <p className="md-spacing">
            Once you have selected a country of destination, COVID-19 travel
            information of that country will be generated underneath the map
            separated into local & travel policies.
          </p>
        </div>
        <div className="flex-item-2">
          <i className="fa fa-line-chart fa-2x"></i>
          <h3>World Data</h3>
          <p className="md-spacing">
            At the bottom of the page, you will find the general trend of the
            COVID-19 situation across the globe including confirmed cases, death
            toll, and recovered cases.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Sources() {
  return (
    <section>
      <h2>Sources</h2>
      <div className="flex-container-2">
        <div className="flex-item-2">
          <a href="https://datahub.io/core/covid-19" target="_blank">
            <img src={WHO_Logo} alt="WHO logo" className="source-logo" />
            <br />
            World Health Organization (WHO)
          </a>
        </div>
        <div className="flex-item-2">
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/map-and-travel-notices.html"
            target="_blank"
          >
            <img src={CDC_Logo} alt="CDC logo" className="source-logo" />
            <br />
            Centers for Disease Control and Prevention (CDC)
          </a>
        </div>
        <div className="flex-item-2">
          <a
            href="https://data.humdata.org/dataset/covid-19-global-travel-restrictions-and-airline-information"
            target="_blank"
          >
            <img src={UN_logo} alt="UN WFP logo" className="source-logo" />
            <br />
            UN WFP's World Travel Restriction
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="flex-container">
        <div className="flex-item">
          <img src={logo} className="footer-logo" alt="GTIC Logo" />
        </div>
        <div className="flex-item">
          <h3>Contact the developers</h3>
          <address>
            Athiwat Patomtajeancharoen:{" "}
            <a href="mailto:athiwat@uw.edu">athiwat@uw.edu</a>
            <br />
            Best Watanapalin: <a href="mailto:bestwat@uw.edu">bestwat@uw.edu</a>
          </address>
        </div>
        <div className="flex-item">
          <h3>Site Map</h3>
          <a href="/" className="site-map">
            Interactive Map
          </a>
          <br />
          <a href="/about" className="site-map">
            About
          </a>
        </div>
        <div className="flex-item">
          <p>&copy; 2021 Athiwat & Best.</p>
        </div>
      </div>
    </footer>
  );
}

export function About() {
  return (
    <div className="content-wrap">
      <AboutHeader />
      <General />
      <HowTo />
      <Sources />
    </div>
  );
}

export default About;
