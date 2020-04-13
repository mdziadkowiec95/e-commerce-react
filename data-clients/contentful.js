const contentfulManagement = require('contentful-management');
const contentfulDelivery = require('contentful');

require('dotenv').config()

const contentfulManagementClient = contentfulManagement.createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  accessToken: process.env.REACT_APP_CONTENTFUL_PERSONAL_TOKEN,
});

const ContentfulManagement = new Promise(async (resolve, reject) => {
    try {
        const space = await contentfulManagementClient.getSpace(process.env.REACT_APP_CONTENTFUL_SPACE_ID);
        const environement = await space.getEnvironment('master');

        resolve(environement);
    } catch (error) {
        console.error(error);
        reject(error);
    }
});

const ContentfulDelivery = contentfulDelivery.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

module.exports = {
    ContentfulManagement,
    ContentfulDelivery
};
