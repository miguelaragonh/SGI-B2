
const Categoria= require("../model/t_categoria");

module.exports = {

  async getCategorias(req, res) {
    try {
      let categoria = await Categoria.findAll();
      res.json(categoria);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las categorías", error: error.message });
    }
  }

};
