# gatsby-plugin-userbase

Plugin for setting up the userbase object globally in gatsby projects

# Usage

You'll need dotenv for environment variables

https://www.npmjs.com/package/dotenv

Install userbase:

`npm install userbase-js gatsby-plugin-userbase`

or

`yarn add userbase-js gatsby-plugin-userbase`

Set up your environment variables:

`.env.development` and `.env.production`

```
USERBASE_APP_ID=YOUR_USERBASE_APP_ID
```

Now go to `gatsby-config.js` and add gatsby-plugin-userbase to the plugins array with the following options:

```
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-userbase",
      options: {
        APP_ID: process.env.USERBASE_APP_ID,
      },
    },

  ],
}

```

run `gatsby develop`

You should have access to the userbase object globally from the browser
