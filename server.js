var reactMiddleware = require('react-page-middleware');
var REACT_LOCATION = __dirname + '/node_modules/react-tools/src';
var ROOT_DIR = __dirname;
var app = connect()
  .use(reactMiddleware.provide({
    logTiming: true,
    pageRouteRoot: ROOT_DIR,           // URLs based in this directory
    useSourceMaps: true,                // Generate client source maps.
    projectRoot: ROOT_DIR,          // Search for sources from
    ignorePaths: function(p) {          // Additional filtering
      return p.indexOf('__tests__') !== -1;
    }
  }))
  .use(connect['static'](__dirname + '/src/static_files'));
http.createServer(app).listen(8080);
