import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Description } from './Page';

const FAQ = () => (
  <Container>
    <Description>
      <h1> Frequently Asked Questions </h1>
      <h2> How long does shipping take?</h2>
      <p> Shipping takes 3-5 business days after fulfillment.
          Fulfillment usually takes 3 business days or less, 
          but can take as long as 5. 
      </p>
      <h2> How much is shipping?</h2>
      <p> Shipping is free world-wide, but will take longer if outside the United States. </p>
      <h2> What kind of shipping do you use?</h2>
      <p> We use whichever shipping is necessary to get the order to you in 3-5 days or less after fulfillment. 
          This usually ends up being USPS Priority Mail or DHL Expedited.
      </p>
      <h2> What kind of paper do you use?</h2>
      <p> 
        Our museum-quality posters are made on thick, durable, matte paper. 
        Printed on archival, acid-free paper.
      </p>
      <h2> What is your return policy?</h2>
      <p> We do not offer returns but offer full refunds for any product that is 
          damaged or incorrectly printed.
      </p>
      <h2> What is your cancellation policy?</h2>
      <p> You may cancel an order any time before it is printed. This is usually 1 business day before it ships, so approximately 2 days from your order.</p>
      <h2> When do you charge my credit card?</h2>
      <p> We execute the charge immediately after your order, but it can take a few days to process.
      </p>
      <h2> Where is my order?</h2>
      <p> As soon as your order ships you will receive a notification email with more information, including a tracking number. 
          If you have received an order confirmation email but no shipping confirmation e-mail, 
          your order is still being fulfilled. 
      </p>
      <h2> What if I don't want any syntax highlighting?</h2>
      <p> Select <i>plain_text</i> in the language selection dropdown to disable syntax highlighting.
      </p>
      <h2> How do I strip out new lines and extra space?</h2>
      <p> At the bottom of the editor on the <Link to='create'><u>/create</u></Link> page you'll see an option to do that!
      </p>
      <h2> Can you add <i>*insert feature here*</i>?</h2>
      <p> Absolutely! Please email use at <i> support@codenail.com</i> with any requests.</p>
    </Description>
  </Container>
)

export default FAQ