const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (_, arg) => ({
  entry: "./src/index.js",
  // mode: "development",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    publicPath: arg.mode === "development" ? "http://localhost:3000/" : "https://container-smoky.vercel.app/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        listing: "arg.mode === 'development' ? 'listing@http://localhost:3001/remoteEntry.js' : 'https://listing-rouge.vercel.app/remoteEntry.js'",
        cart: "arg.mode === 'development' ? 'cart@http://localhost:3002/remoteEntry.js' : 'https://cart-psi-seven.vercel.app/remoteEntry.js'",
        checkout: "arg.mode === 'development' ? 'checkout@http://localhost:3003/remoteEntry.js' : 'https://checkout-liart.vercel.app/remoteEntry.js'",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
})
