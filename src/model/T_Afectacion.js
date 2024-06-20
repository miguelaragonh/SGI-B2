
const sequelize = require("../db/config");
const { Model, DataTypes } = require("sequelize");

class t_afectacion extends Model {}

t_afectacion.init(
  {
    CN_Id_Afectacion: {
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
    modelName: "T_Afectacion",
    tableName: "t_afectacion",
    timestamps: false,
  }
);

module.exports = t_afectacion;
