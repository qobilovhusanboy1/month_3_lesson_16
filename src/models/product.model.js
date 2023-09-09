const {Schema, model} = require("mongoose");

const schema = new Schema(
    {
        product_name: {
            type: String,
            require: true
        },
        product_title: {
            type: String,
            require: true
        },
        product_price: {
            type: Number,
            require: true
        },
        cash: {
            type: Boolean,
            require: true
        },
        product_category: {
            type: String,
            require: true
        },
        photo_url: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = model("Product", schema);