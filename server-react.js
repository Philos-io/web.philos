import  webpack from 'webpack';
import  WebpackDevServer from 'webpack-dev-server';
import  config from './webpack.config';


let port = process.env.PORT || 9000;

let server = new WebpackDevServer(webpack(config), {
  contentBase: 'public',
  hot: true,
  stats: {
    colors: true
  }
});

server.listen(port, 'localhost',  (err)=> {
  if (err) {
    console.log(err);
  }
});

