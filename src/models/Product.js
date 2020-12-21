const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cep: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: String,
    required: true,
  },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema);
