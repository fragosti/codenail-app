import React from 'react';
import styled from 'styled-components';
import { Tweet } from 'react-twitter-widgets';

import Editor from './Editor';
import { CTALink } from './Button'; 
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

const Landing = () => {
  return (
    <div>
      <section>
        <div className="container-sml text-center">
          <div className="col-12">
            <h1 className="heading">
              Create art with your code
            </h1>
          </div>
        </div>
        <div className="container-lrg flex">
          <div className="col-12 centervertical">
            <div className="ctas text-center">
              <CTALink fontScale={1} to="/create"> Create your own </CTALink>
            </div>
            <Center>
              <EditorDemo>
                <Editor
                  value={`        
        
        
                                         o(t){                                          
                                      ,n),o}retu                                        
                                    ar ),u=t(8), s                                      
                                  rops=t,   .prototy                                    
                                ,"$&/")}      unc=t,th                                  
                              ll!=n&&(          );var c=                                
                            xt=null,              {forEac                               
                          rcle:o("              ath:o("c                                
                        n:o("pat              :o("polyg                                 
                      :8}],8:[              ){"use st                                   
                    d 0!==t.              :!0,__sou                                     
                  f:n,prop              ; l. f=""                                       
                __source              .call(e,i                                         
              AndRepla              {if(null=                                           
            is.resul              =x}, ,20:                                             
          ,canvas:              ails:o("d                                               
          inp ),              nuitem:o(                                                 
          ),sou             "str ,tfo                                                   
          e:o("p          dient"),r                                                     
          id 0==        r e) u.ca                                                       
          tu (a,!0);var c=new +                                                         
          ){var }var i={escap                                                           
          return new ,e,n,r                                                             
                                                                                        
                                                                                        
                                                                                        
                                                                                        
           ar x={forEach:a,map:l,mapIn {"use strict";var r=t(8),                        
          lipPath:o("clipPath"),defs:o("defs"),ellipse:o("ellipse                       
          on:o("polygon"),polyline:o("polyline"),radialGradient:o                       `}
                  theme='monokai'
                  language='javascript'
                  fontSize={isPhone() ? 6 : 7}
                  showLineNumbers={false}
                  width={Math.min(500, viewPort.width() - 50)}
                  height={300}
                  horPadding={isPhone() ? 25 : 100}
                  verPadding={isPhone() ? 20 : 0}
                />
              </EditorDemo>
            </Center>
            <h2 className="paragraph">
              Whether you've written code you're proud of, have a personal project you want to commemorate, want a parting gift for your intern, or even just like all the pretty colors: 
              this is the place to order a <strong>poster or a shirt</strong> of it!
            </h2>
          </div>
        </div>
      </section>
      <section className="feature3">
        <div className="container-lrg flex">
          <div className="col-4">
            <b className="emoji">
              <span role='img' aria-label='decorations'>💅</span>
            </b>
            <h3 className="subheading">
              Tons of options and sizes
            </h3>
            <p className="paragraph">
              Choose the color of your shirt, whether you would like your poster framed, its dimensions, editor theme, font-size and more. We provide the tools you need to create the product you want!
            </p>
          </div>
          <div className="col-4">
            <b className="emoji">
              <span role='img' aria-label='paint'>🎨</span>
            </b>
            <h3 className="subheading">
              Shape your code into a logo
            </h3>
            <p className="paragraph">
              Upload your logo, paste some code and automatically format your code into the shape of your logo. You can even pick how many characters to use and whether to invert the image.
            </p>
          </div>
          <div className="col-4">
            <b className="emoji">
              <span role='img' aria-label='rocket'>🚀</span>
            </b>
            <h3 className="subheading">
              Free shipping worldwide
            </h3>
            <p className="paragraph">
              Shipping is completely free worldwide. All U.S. orders are guaranteed to arrive 3-5 business days after fulfillment, which usually occurs 1 or 2 days after your order is received. 
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
          <Gallery images={[1,2,3,4,5,6].map((num) => ({ src: `https://s3-us-west-2.amazonaws.com/codenail-gallery/${num}.JPG`}))}/>
        </div>
      </section>
      <section className="feature1">
        <div className="container-sml">
          <div className="col-12 text-center">
            <h3 className="heading">
              Don't forget the shirts!
            </h3>
            <p className="paragraph">
              Pictures of an actual order from  <strong>Code at Uni</strong>.
            </p>
          </div>
        </div>
        <div className="container-lrg centerdevices col-12">
          <Gallery images={[1,2,3,4].map((num) => ({ src: `https://s3-us-west-2.amazonaws.com/codenail-gallery/${num}s.JPG`}))}/>
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