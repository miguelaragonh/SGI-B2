
const sequelize = require("../db/config");
const { Model, DataTypes } = require("sequelize");

class t_categoria extends Model {}

t_categoria.init(
  {
    CN_Id_Categoria: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    CT_Descripcion: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    CT_Sistema: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      CN_Activo: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
  },
  {
    sequelize,
    modelName: "T_Categoria",
    tableName: "t_categoria",
    timestamps: false,
  }
);

module.exports = t_categoria;
