/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig  (old standard code)

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {

    return {

      env: {
        mongodb_username: "sultanoss",
        mongodb_password: "h7mDzwwG2sYqvhMj",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev"
      },

    };

  }

  return {

    env: {
      mongodb_username: "sultanoss",
      mongodb_password: "h7mDzwwG2sYqvhMj",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site"
    },

  }

}



