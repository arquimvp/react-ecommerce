const axios = require("axios");

function kebabCaseToCamel(str) {
  return str.replace(/(\-\w)/g, (matches) => matches[1].toUpperCase());
}

/*
  This class allows us to centralize the api calls via HTTP PROTOCOL VERBS
*/
class API {
  constructor({ url }) {
    this.url = url;
    this.endpoints = {};
  }

  createEntity(entity) {
    const name = kebabCaseToCamel(entity.name);
    this.endpoints[name] = this.createBasicCRUDEndpoints(entity);
  }

  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this));
  }

  createBasicCRUDEndpoints({ name }) {
    const endpoints = {};
    const resourceURL = `${this.url}/${name}`;

    // GET
    endpoints.getAll = ({ params = {} }, config = {}) =>
      axios.get(resourceURL, { params }, config);

    // GET
    endpoints.getOne = ({ id }, config = {}) =>
      axios.get(`${resourceURL}/${id}`, config);

    // POST
    endpoints.create = (toCreate, config = {}) =>
      axios.post(resourceURL, toCreate, config);

    // PUT
    endpoints.update = (toUpdate, config = {}) =>
      axios.put(`${resourceURL}/${toUpdate.id}`, toUpdate, config);

    // PATCH
    endpoints.patch = ({ id }, toPatch, config = {}) =>
      axios.patch(`${resourceURL}/${id}`, toPatch, config);

    // DELETE
    endpoints.delete = ({ id }, config = {}) =>
      axios.delete(`${resourceURL}/${id}`, config);

    return endpoints;
  }
}

export default API;
