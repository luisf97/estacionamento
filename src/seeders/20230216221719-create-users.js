'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        register: '202302161919',
        fullname: 'Luís Fernando de Oliveira Freire',
        birthdate: '1997-06-03',
        username: 'luis.freire',
        email: 'luisfernando@gmail.com',
        password: '123456',
        cpf: '06782874300',
        rg: '20085590902',
        age: 25,
        gender: 'Masculino',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        register: '202302161920',
        fullname: 'Letícia Rodrigues Mota',
        birthdate: '1998-07-20',
        username: 'leticia.mota',
        email: 'leticia@gmail.com',
        password: '101010',
        cpf: '08592311785',
        rg: '32146598777',
        age: 24,
        gender: 'Feminino',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        register: '202302161921',
        fullname: 'Aldenor Lima Mota',
        birthdate: '1970-02-17',
        username: 'aldenor.mota',
        email: 'aldenor@gmail.com',
        password: '300003',
        cpf: '32165465498',
        rg: '14788956522',
        age: 53,
        gender: 'Masculino',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
