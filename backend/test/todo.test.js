const chai = require('chai');
     const chaiHttp = require('chai-http');
     const server = require('../index'); // Adjust path as needed
     const UserModel = require('../models/user.model');
     const ToDoModel = require('../models/todo.model');

     chai.use(chaiHttp);
     const { expect } = chai;

     let token;
     let userId;

     beforeEach(async () => {
       // Clear the database before each test
       await UserModel.deleteMany({});
       await ToDoModel.deleteMany({});

       // Create a user and obtain a token
       const res = await chai.request(server)
         .post('/api/user/signup')
         .send({
           fullName: 'Test User',
           email: 'testuser@example.com',
           password: 'password123'
         });
       token = res.body.token;
       userId = res.body.user._id;
     });

     it('should add a new todo', async () => {
       const res = await chai.request(server)
         .post('/api/todo/add')
         .set('Authorization', `Bearer ${token}`)
         .send([
           { title: 'Test ToDo', description: 'Test Description' }
         ]);
       expect(res).to.have.status(201);
       expect(res.body).to.have.property('todos');
       expect(res.body.todos).to.be.an('array').that.is.not.empty;
     });