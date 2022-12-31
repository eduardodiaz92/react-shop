//path => quiere decir donde vamos a trabajar o hubicar/utilizar este proyecto
const path = require("path");
//simplifica la creación de archivos HTML para servir a sus paquetes webpack
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//module.exports => objeto donde agregamos la configuracion del proyecto
module.exports = {
  //entry => hubicacion del punto de entrada
  entry: "./src/index.js",
  //output => donde vive el proyecto unas vez preparado
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  //esta configuracion se ejecutara en modo desarollo
  mode: "development",
  //extensiones que vamos a utilizar
  resolve: {
    extensions: [".js", ".jsx"],
  },
  //reglas a crear con nuestros loaders y plugins
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].scss",
    }),
  ],
  //configuracion de desarrollo local para que funcione el servidor
  devServer: {
    historyApiFallback: true,
    // static: {
    //   directory: path.join(__dirname, "public"),
    // },
    // compress: true,
    // port: 3005,
  },
};
