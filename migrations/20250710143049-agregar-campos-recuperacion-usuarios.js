'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //  Agregar columna 'recuperacionToken'
    await queryInterface.addColumn('Usuarios', 'recuperacionToken', {
      type: Sequelize.STRING,
      allowNull: true,
      after: 'fechaVerificacion' 
    });

    //  Agregar columna 'recuperacionTokenExpira'
    await queryInterface.addColumn('Usuarios', 'recuperacionTokenExpira', {
      type: Sequelize.DATE,
      allowNull: true,
      after: 'recuperacionToken'
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar campos si se hace rollback
    await queryInterface.removeColumn('Usuarios', 'recuperacionTokenExpira');
    await queryInterface.removeColumn('Usuarios', 'recuperacionToken');
  }
};
