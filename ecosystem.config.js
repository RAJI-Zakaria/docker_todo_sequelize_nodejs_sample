module.exports = {
    apps: [
      {
        name: "backend-api",
        script: "index.js",
        watch: true,
        ignore_watch: ["node_modules", "database"], // Ignore watching these directories
        env: {
          NODE_ENV: "development",
          PORT: 3232 // Set the port for the API
        },
        env_production: {
          NODE_ENV: "production",
          PORT: 3232 // Set the port for the API in production
        }
      }
    ]
  };
  