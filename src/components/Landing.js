import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Tweet } from 'react-twitter-widgets';

import Editor from './Editor';
import { CTA } from './Button'; 
import Samples from './Samples';
import Gallery from './Gallery';
import SubscribeForm from './SubscribeForm';
import { PosterBack, DisplayContainer } from './Page';
import samples from '../lib/samples';
import { isPhone, viewPort } from '../style/utils';

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
              Create a poster of your code in seconds
            </h1>
          </div>
        </div>
        <div className="container-lrg flex">
          <div className="col-12 centervertical">
            <div className="ctas text-center">
              <CTALink fontScale={1} to="/create"> Try it now </CTALink>
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
                  fontSize={isPhone() ? 18 : 25}
                  showLineNumbers={false}
                  width={Math.min(500, viewPort.width() - 50)}
                  height={300}
                  horPadding={isPhone() ? 5 : 25}
                  verPadding={isPhone() ? 70: 30}
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
              <span role='img' aria-label='laptop'>💻</span>
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
              <span role='img' aria-label='decorations'>💅</span>
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
              <span role='img' aria-label='frame'>🖼</span>
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
      <section className="feature1">
        <div className="container-sml">
          <div className="col-12 text-center">
            <h3 className="heading">
              Check out these pictures!
            </h3>
            <p className="paragraph">
              One of our samples printed on a 16x20 poster and framed.
            </p>
          </div>
        </div>
        <div className="container-lrg centerdevices col-12">
          <Gallery/>
        </div>
      </section>
      <section className="socialproof">
        <div className="container-sml">
          <div className="text-center">
            <div className="col-12">
              <h3 className="heading">
                Join the crowd.
              </h3>
              <p> </p>
            </div>
          </div>
        </div>
        <div className="container-lrg">
          <DisplayContainer>
            {["882008531225817089",
              "887544000575553536",
              "887556054447382528",
            ].map(id => (
              <Tweet 
                key={id}
                tweetId={id}
                options={{
                  width: 350,
              }}
            />
            ))}
          </DisplayContainer>
        </div>
        <DisplayContainer>
          <div className="ctas text-center">
            <CTALink fontScale={1} to="/create"> Create your own </CTALink>
          </div>
        </DisplayContainer>
      </section>
      <section className="socialproof">
        <div className="container-sml">
          <div className="col-12 text-center">
            <h3 className="heading">
              <b className="emoji">
                <span role='img' aria-label='party'>🎉 </span>
              </b>
              Sign up for updates.
              <b className="emoji">
                <span role='img' aria-label='star'> 💫</span>
              </b>
            </h3>
            <p className="paragraph">
              We will only send you emails to update you about our products and features.
            </p>
          </div>
        </div>
        <div className="container-lrg centerdevices col-12">
          <div className="ctas text-center">
            <SubscribeForm/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing;