const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index'); 
const TaskModel = require('../models/Task'); 

chai.use(chaiHttp);
const { expect } = chai;

describe('Task API', () => {
  // Run before each test to clear the Task collection
  beforeEach(async () => {
    await TaskModel.deleteMany({});
  });

  // Test case for adding a new task
  it('should add a new task', async () => {
    const res = await chai.request(server)
      .post('/api/task') // Adjusted endpoint
      .send({
        title: 'Test Task',
        description: 'Test Description',
        dueDate: '2024-09-30',
        status: 'Not Started',
        priority: 'Normal'
      });
    expect(res).to.have.status(201);
    expect(res.body).to.have.property('title', 'Test Task');
    expect(res.body).to.have.property('description', 'Test Description');
  });

  // Test case for retrieving all tasks
  it('should retrieve all tasks', async () => {
    // Add a task first
    await TaskModel.create({
      title: 'Sample Task',
      description: 'Sample Description',
      dueDate: '2024-09-30',
      status: 'Not Started',
      priority: 'Normal'
    });

    const res = await chai.request(server)
      .get('/api/tasks'); // Adjusted endpoint
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array').that.is.not.empty;
  });

  // Test case for updating a task
  it('should update a task', async () => {
    // Add a task first
    const task = await TaskModel.create({
      title: 'Task to Update',
      description: 'Update Description',
      dueDate: '2024-09-30',
      status: 'Not Started',
      priority: 'Normal'
    });

    const res = await chai.request(server)
      .put(`/api/task/${task._id}`) // Adjusted endpoint with task ID
      .send({ status: 'Completed' });
    expect(res).to.have.status(200);
    expect(res.body).to.have.property('status', 'Completed');
  });

  // Test case for deleting a task
  it('should delete a task', async () => {
    // Add a task first
    const task = await TaskModel.create({
      title: 'Task to Delete',
      description: 'Delete Description',
      dueDate: '2024-09-30',
      status: 'Not Started',
      priority: 'Normal'
    });

    const res = await chai.request(server)
      .delete(`/api/task/${task._id}`); // Adjusted endpoint with task ID
    expect(res).to.have.status(200);
    expect(res.body).to.have.property('message', 'Task deleted successfully');
  });
});
