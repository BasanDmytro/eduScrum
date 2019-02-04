const mongoose = require('mongoose');

class BaseRepository {
  constructor(modelType) {
    this._modelType = modelType;
  }

  async count(filter) {
    if (filter) {
      return this._modelType.countDocuments(filter);
    }
    return this._modelType.estimatedDocumentCount();
  }

  async countDocuments(filter) {
    return this._modelType.countDocuments(filter);
  }

  async esimatedDocumentCount() {
    return this._modelType.estimatedDocumentCount();
  }

  async find(filter, projection, options) {
    return (await this._modelType.find(filter, projection, options)).map(
      this._toPlainObject
    );
  }

  async findOne(filter, projection, options = {}) {
    const result = await this.find(filter, projection, {
      ...options,
      limit: 1,
    });
    return result[0];
  }

  async findById(_id, projection, options) {
    return this.findOne({ _id }, projection, options);
  }

  async create(document) {
    if (Array.isArray(document)) {
      throw 'To create many document use createMany method';
    }
    const documentToInsert = { ...document };
    if (!documentToInsert._id) {
      const id = mongoose.Types.ObjectId();
      documentToInsert._id = id.toString();
    }
    return this._toPlainObject(await this._modelType.create(documentToInsert));
  }

  async createMany(documents) {
    if (!Array.isArray(documents)) {
      throw 'To create one document use create method';
    }
    const documentsWithId = documents.map(async (document) => {
      const result = { ...document };
      if (!result._id) {
        const id = mongoose.Types.ObjectId();
        result._id = id.toString();
      }
      return result;
    });
    const createdDocuments = await this._modelType.insertMany(documentsWithId);
    return createdDocuments.map(this._toPlainObject);
  }

  async update(filter, updateFields, options = {}) {
    if (options.multi !== true) {
      return this._modelType.updateOne(filter, updateFields);
    }
    return this._modelType.updateMany(filter, updateFields);
  }

  async updateOne(filter, updateFields, options) {
    return this._modelType.updateOne(filter, updateFields, options);
  }

  async updateMany(filter, updateFields, options) {
    return this._modelType.updateMany(filter, updateFields, options);
  }

  async remove(filter, options) {
    return this._modelType.remove(filter, options);
  }

  async deleteOne(filter) {
    return this._modeType.deleteOne(filter);
  }

  async deleteMany(filter) {
    return this._modelType.deleteMany(filter);
  }

  async aggregate(aggregations) {
    return this._modelType.aggregate(aggregations);
  }

  async distinct(query, field) {
    return this._modelType.distinct(field, query);
  }

  _toPlainObject(document) {
    if (document) {
      return document.toObject();
    }
    return null;
  }
}

module.exports = BaseRepository;
