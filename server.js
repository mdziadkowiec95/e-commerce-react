const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const { ContentfulManagement, ContentfulDelivery } = require('./data-clients/contentful');

const { Debug } = require('./utilities');

require('dotenv').config();



// (async function() {
//   const space = await ContentfulDelivery;

//   const product = await space.getEntries({
//     content_type: 'product',
//     'fields.slug[in]': 'hudson-wall-cup'
//   });
//   // console.log(Debug.print(product.items))
//   console.log(product.items);
// })()


// (async function() {
//   const space = await ContentfulManagement;
//   const contentTypes = await space.getContentTypes()

//   const entries = await space.getEntries() 

//   console.log(entries.items)

//   const entry = await space.getEntry('3DVqIYj4dOwwcKu6sgqOgg');
//   entry.fields.quantity['en-US'] = entry.fields.quantity['en-US'] - 10;

//   await entry.update();
  
// })()



app.use(express.json({ extended: false }));

app.use(cors());

// Routes

// Serve static assets in production

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
