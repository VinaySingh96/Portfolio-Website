const BaseService = require('./BaseService');

class EntityService extends BaseService {
  constructor(serviceName) {
    super();
    this.serviceName = serviceName;
  }

  async createEntityPreHook(body, params, query, req) {
    return { body, params, query };
  }
  async createEntityPostHook(result, params, query) {
    return result;
  }

  async getAllEntitiesPreHook(body, params, query) {
    return { body, params, query };
  }
  async getAllEntitiesPostHook(body, params, query) {
    return { body};
  }

  async getEntityByIdPreHook(body, params, query) {
    return { body, params, query };
  }
  async getEntityByIdPostHook(body, params, query) {
    return { body };
  }

  async updateEntityByIdPreHook(body, params, query) {
    return { body, params, query };
  }
  async updateEntityByIdPostHook(body, params, query) {
    return { body };
  }

  async deleteEntityByIdPreHook( params, query) {
    return { params, query };
  }
  async deleteEntityByIdPostHook(body, params, query) {
    return { body };
  }


  async createEntity(reqBody, reqParams, reqQuery, req){
    const { body, params, query, headers } = await this.createEntityPreHook(reqBody, reqParams, reqQuery, req);
    const doc = await this.model.create(body);
    return this.createEntityPostHook(doc, params, query, headers);
  }

  async getAllEntities(reqBody, reqParams, reqQuery, ){
    const { body, params, query, headers } = await this.getAllEntitiesPreHook(reqBody, reqParams, reqQuery );
    return this.model.find(body.filter);
  }

  async getEntityById(reqBody, reqParams, reqQuery, ){
    return this.model.find({ _id: reqParams.id });
  }

  async updateEntityById(reqBody, reqParams, reqQuery, ){
    const updatedDoc = await this.model.findByIdAndUpdate(params.id, body, { new: true });
    return updatedDoc;
  }

  async deleteEntityById(reqBody, reqParams, reqQuery, ){
    return this.model.findByIdAndDelete(params.id);
  }
}

module.exports = EntityService;
