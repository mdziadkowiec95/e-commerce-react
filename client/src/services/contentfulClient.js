import { createClient } from 'contentful';

console.log(process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN);

const contentfulDeliveryClient = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export default contentfulDeliveryClient;
