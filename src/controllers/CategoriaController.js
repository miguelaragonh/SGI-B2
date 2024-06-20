
const Categoria= require("../model/t_categoria");

module.exports = {

async getCategorias(req, res) {
    let categoria = await Categoria.findAll();
    res.json(categoria);
  },

};
