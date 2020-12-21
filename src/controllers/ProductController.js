const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    //colocar o inicio da pagina na query do metodo get.
    //agora podemos acessar a pagina 2 sem problemas
    const { page = 1 } = req.query;

    //primeiro parametro eh para caso quisermos usar algumas querys ou filtros.
    const products = await Product.paginate({}, { page, limit: 20 });

    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async store(req, res) {
    // Criação

    const { username, email, cep, whatsapp } = await Product.create(req.body);

    return res.json({
      username,
      email,
      cep,
      whatsapp,
    });
  },

  async update(req, res) {
    //tem q passar o parametro new como true para poder salvar o novo valor no banco
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
