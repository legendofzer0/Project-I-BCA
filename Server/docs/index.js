const basicInfo = require("./basicInfo");
const server = require("./server");
const components = require("./components");
const tags = require("./tags");
const paths = require("./paths");

module.exports = {
  ...basicInfo,
  ...server,
  ...components,
  ...tags,
  ...paths,
};
