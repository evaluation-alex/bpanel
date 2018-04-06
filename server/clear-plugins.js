'use strict';

//import fs from 'fs';
//import { resolve } from 'path';
//import logger from './logger';
const fs = require('fs');
const path = require('path');
const logger = require('./logger');

module.exports = () => {
  const indexText = 'export default {};';
  const pluginsPath = path.resolve(__dirname, '../webapp/plugins');
  try {
    fs.writeFileSync(path.resolve(pluginsPath, 'local/index.js'), indexText);
    fs.writeFileSync(path.resolve(pluginsPath, 'index.js'), indexText);
  } catch (e) {
    logger.error('There was an error clearing plugins: ', e);
  }
};

if (require.main === module) {
  module.exports();
}
