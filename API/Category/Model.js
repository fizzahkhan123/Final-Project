const { Schema, model } = require ('mongoose')

const CategorySchema = new Schema(
{
    CategoryName : {
       type : String,
       unique : true,
       require : true
    },
    CategoryImage : {
        type : String,
       unique : true,
       require : true
    }
}
)
const Category = model('Category', CategorySchema)
module.exports = Category