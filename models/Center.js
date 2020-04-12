const BaseModel = require('./BaseModel')


module.exports = class Center extends BaseModel {
    static get tableName() {
      return `center`
    }
  
    static get relationMappings() {
      const CenterType = require('./CenterType');

      return {
        campaign: {
            relation: BaseModel.HasOneRelation,
            modelClass: CenterType,
            join: {
              from: `${this.tableName}.type`,
              to: `${CenterType.tableName}.id`
            }
          },
    }
  }
  static get jsonSchema () {
    return {
      type: 'object',
      required: [ 'codCNH' ],

      properties: {
        id:                      {type: 'integer'},

        createdAt:               {type: 'integer'},
        updatedAt:               {type: 'integer'},

        codCNH:                  {type: 'string', minLength: 1, maxLength: 255},
        name:                    {type: 'string', minLength: 1, maxLength: 255},
        region:                  {type: 'string', minLength: 1, maxLength: 255},
        postalCode:              {type: 'string', minLength: 1, maxLength: 255},
        phone:                   {type: 'string', minLength: 1, maxLength: 255},
        fax:                     {type: 'string', minLength: 1, maxLength: 255},
        beds:                    {type: 'integer'},
        type:                    {type: 'string', minLength: 1, maxLength: 255},
        notes:                   {type: 'string'},
        agreement:               {type: 'string', minLength: 1, maxLength: 255},
        lat:                     {type: 'string', minLength: 1, maxLength: 255},
        lon:                     {type: 'string', minLength: 1, maxLength: 255},
        }
      }
    }
}
