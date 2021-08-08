import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: 'fde6987c3c6e72b36ba9edce61',
	version: 'v3'
});

export { api }