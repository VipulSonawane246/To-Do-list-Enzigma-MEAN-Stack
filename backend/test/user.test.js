const chai = require('chai');
     const chaiHttp = require('chai-http');
     const server = require('../index'); // Adjust path as needed
     const UserModel = require('../models/user.model');

     chai.use(chaiHttp);
     const { expect } = chai;

     describe('User API', () => {
       beforeEach(async () => {
         // Clear the database before each test
         await UserModel.deleteMany({});
       });

       it('should sign up a new user', async () => {
         const res = await chai.request(server)
           .post('/api/user/signup')
           .send({
             fullName: 'Test User',
             email: 'testuser@example.com',
             password: 'password123'
           });
         expect(res).to.have.status(201);
         expect(res.body).to.have.property('user');
         expect(res.body).to.have.property('token');
       });

     });
     

     
     