import React from 'react';
import styled from 'styled-components';
import {
  Link
} from 'react-router-dom';

import Editor from './Editor';
import { CTA } from './Button'; 
import Samples from './Samples';
import samples from '../lib/samples';
import { PosterBack } from './Page';

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const EditorDemo = PosterBack.extend`
  margin: 35px 0px;
`

const CTALink = CTA.withComponent(Link)

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
          <div className="col-12 centervertical">
            <div className="ctas text-center">
              <CTALink fontScale={1} to="/create"> Try it! </CTALink>
            </div>
            <Center>
              <EditorDemo>
                <Editor
                  value={`

const tryItOut = () => {
    console.log('A Poster!');
}`}
                  theme='monokai'
                  language='javascript'
                  fontSize={25}
                  showLineNumbers={false}
                  showGutter={false}
                  width={500}
                  height={300}
                  horPadding={25}
                  verPadding={30}
                />
              </EditorDemo>
            </Center>
            <h2 className="paragraph">
              Whether you've written code you're proud of, are a fan of a famous algorithm, stumbled upon some funny comments, or even just like all the pretty colors: 
              this is the place to order a poster of it!
            </h2>
          </div>
        </div>
      </section>
      <section className="feature3">
        <div className="container-lrg flex">
          <div className="col-4">
            <b className="emoji">
              💻
            </b>
            <h3 className="subheading">
              Choose any language or theme 
            </h3>
            <p className="paragraph">
              We support many programming languages and syntax highlighting themes out of the box, and are constantly adding more. 
            </p>
          </div>
          <div className="col-4">
            <b className="emoji">
              💅🏼
            </b>
            <h3 className="subheading">
              Tons of options and sizes
            </h3>
            <p className="paragraph">
              Add line numbers, choose the poster dimensions, font-size and adjust it all with padding. We provide the tools you need to create the poster you want!
            </p>
          </div>
          <div className="col-4">
            <b className="emoji">
              🖼
            </b>
            <h3 className="subheading">
              With or without a frame
            </h3>
            <p className="paragraph">
              Have your poster delivered framed and ready to be mounted on a wall. Every poster dimension can optionally be framed in a gorgeous black wood frame.
            </p>
          </div>
        </div>
      </section>
      <section className="feature1">
        <div className="container-sml">
          <div className="col-12 text-center">
            <h3 className="heading">
              Need Some Inspiration?
            </h3>
            <p className="paragraph">
              Check out these samples!
            </p>
          </div>
        </div>
        <div className="container-lrg centerdevices col-12">
          <Samples samples={samples}/>
        </div>
      </section>
      <section className="socialproof">
        <div className="container-sml">
          <div className="text-center">
            <div className="col-12">
              <h4 className="heading">
                Join the crowd.
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