const mongoose = require('mongoose');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('pino')();

const app = express();
const config = require('./config');

const port = config.port || 8080;
async function main() {
  mongoose.Promise = global.Promise;
  // eslint-disable-next-line max-len
  mongoose.connect(config.localUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  app.use(express.json({ limit: '50mb' }));
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: 'true' }));
  app.use(bodyParser.json());
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  app.use(express.static(__dirname + '/public'));
  
  // eslint-disable-next-line global-require
  require('./src/routes/routes')(app);
  logger.info(`App listening on port ${port}`);

  function stopServer() {
    logger.info('stopping server'); 
    app.close();
  }
  process.once('SIGTERM', stopServer);
  process.once('SIGINT', stopServer);
}
app.listen(port, app.get('host'));

main().catch((err) => {
  console.error(err);
  return new Error(err);
});
