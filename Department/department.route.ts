import Route from 'express';
import DepartmentController from './department.controller';

const departmentRouter = Route();

departmentRouter.get('/department', DepartmentController.getAll);
departmentRouter.get('/department/:id', DepartmentController.getById);
departmentRouter.post('/department', DepartmentController.create);
departmentRouter.post('/addEmployee', DepartmentController.addEmployee);
departmentRouter.delete('/deleteEmployee', DepartmentController.removeEmployeeInArr);
departmentRouter.delete('/department/:id', DepartmentController.delete);


export default departmentRouter;