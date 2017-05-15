import React from 'react';
import {
  Link
} from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <section>
        <div className="container-sml text-center">
          <div className="col-12">
            <h1 className="heading">
              Order a poster of your code in seconds
            </h1>
          </div>
        </div>
        <div className="container-lrg flex">
          <div className="col-6 centervertical">
            <h2 className="paragraph">
              We're creating the best place to go when starting a new business or company. With Launchaco you can instantly search domain names, social media handles, and see your logo in beautiful logotypes.
            </h2>
            <div className="ctas">
              <input className="ctas-input" type="text" placeholder="Your Email Address" />
                <Link className="ctas-button" to="/create"> Order </Link>
            </div>
          </div>
          <div className="col-6 sidedevices">
            
          </div>
        </div>
      </section>
      <section className="feature3">
        <div className="container-lrg flex">
          <div className="col-4">
            <b className="emoji">
              🎓
            </b>
            <h3 className="subheading">
              Choose any language
            </h3>
            <p className="paragraph">
              Launchaco instantly shows you the most relevant domain names. Followed by hundreds of new gtlds. Get your .gold domain name today!
            </p>
          </div>
          <div className="col-4">
            <b className="emoji">
              💐
            </b>
            <h3 className="subheading">
              Hundreds of syntax highlight themes
            </h3>
            <p className="paragraph">
              Naming your brand has never been soooo easy! With Launchaco you can instantly search for twitter, facebook, medium, and instagram handles.
            </p>
          </div>
          <div className="col-4">
            <b className="emoji">
              🚀
            </b>
            <h3 className="subheading">
              Frame or no frame&nbsp;
            </h3>
            <p className="paragraph">
              We've hand travelled the depths of the internet to bring you gorgeous logotypes. Featuring the beautiful fonts of Connary Fagen.
            </p>
          </div>
        </div>
      </section>
      <section className="feature1">
        <div className="container-sml">
          <div className="col-12 text-center">
            <h3 className="heading">
              Brilliant Domain Names.
            </h3>
            <p className="paragraph">
              Launchaco instantly shows you the most relevant domain names. Followed by hundreds of new gtlds. Get your .gold domain name today!
            </p>
          </div>
        </div>
        <div className="container-lrg centerdevices col-12">
          
        </div>
      </section>
      <section className="socialproof">
        <div className="container-sml">
          <div className="text-center">
            <div className="col-12">
              <h4 className="heading">
                Some people think we're pretty neat.
              </h4>
            </div>
          </div>
        </div>
        <div className="container-lrg">
          <div className="tweets flex">
            <div className="col-4">
              <div className="testimonial">
                <div className="flex flexvert">
                  <div>
                    <b>
                      Username
                    </b>
                    <br/>
                    <span>
                      @justcreative
                    </span>
                  </div>
                </div>
                <div className="testimonial-content">
                  <p className="paragraph">
                    Launchaco is a handy tool to help name your business. It checks domains & social media handles for you :)!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="testimonial">
                <div className="flex flexvert">
                  <div>
                    <b>
                      Username
                    </b>
                    <br/>
                    <span>
                      @KurtisAmundson
                    </span>
                  </div>
                </div>
                <div className="testimonial-content">
                  <p className="paragraph">
                    Check out http://launchaco.com  when you br/and your social and internet presence. Great work @launchaco
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="testimonial">
                <div className="flex flexvert">
                  <div>
                    <b>
                      Username
                    </b>
                    <br/>
                    <span>
                      @namli
                    </span>
                  </div>
                </div>
                <div className="testimonial-content">
                  <p className="paragraph">
                    hey @launchaco you do perfect service for non creative us. Thx a lot  : )
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing;