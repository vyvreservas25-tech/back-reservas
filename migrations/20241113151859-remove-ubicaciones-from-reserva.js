'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Eliminar las columnas 'ubicacionOrigen' y 'ubicacionDestino'
    await queryInterface.removeColumn('Reservas', 'ubicacionOrigen');
    await queryInterface.removeColumn('Reservas', 'ubicacionDestino');
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.addColumn('Reservas', 'ubicacionOrigen', {
      type: Sequelize.STRING,
      allowNull: true, 
    });
    await queryInterface.addColumn('Reservas', 'ubicacionDestino', {
      type: Sequelize.STRING,
      allowNull: true, 
    });
  }
};
