'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.removeColumn('Viajes', 'chofer');

    await queryInterface.addColumn('Viajes', 'usuarioEmpresa_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarioEmpresa',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('Viajes', 'usuarioEmpresa_id');


    await queryInterface.addColumn('Viajes', 'chofer', {
      type: Sequelize.STRING,
      allowNull: true 
    });
  }
};
