'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.changeColumn('Viajes', 'usuarioEmpresa_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: 'precio' 
    });
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.changeColumn('Viajes', 'usuarioEmpresa_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: 'medioTransporte_id' 
    });
  }
};
