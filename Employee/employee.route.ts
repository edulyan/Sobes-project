import Route from 'express';
import EmployeeController from './employee.controller';

const employeeRouter = Route();

employeeRouter.get('/employee', EmployeeController.getAll);
employeeRouter.get('/employee/:id', EmployeeController.getById);
employeeRouter.post('/employee', EmployeeController.create);
// employeeRouter.post('/addEmpToDep', EmployeeController.addEmployee);
employeeRouter.put('/employee/:id', EmployeeController.update);
employeeRouter.delete('/employee/:id', EmployeeController.delete);



export default employeeRouter;