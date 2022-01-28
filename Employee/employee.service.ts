import DepartmentModel, { IDepartment } from '../models/department.model';
import DepartmentService from '../Department/department.service';
import EmployeeModel, { IEmployee } from '../models/employee.model';
import { ObjectId } from 'mongoose';


class EmployeeService {
    
    async getAll(): Promise<IEmployee[]> {
        return await EmployeeModel.find();
    }

    async getById(id: string): Promise<IEmployee> {
        if (!id) {
            throw new Error('not found ID')
        }
        const employee: any = await EmployeeModel.findById(id);
        return employee;
    }

    async create(employee: IEmployee): Promise<IEmployee> {
        const newEmployee = await EmployeeModel.create(employee);
        return newEmployee;
    }

    async update(id: string, employee: IEmployee): Promise<void> {
        if(!id) {
            throw new Error('not found ID')
        }
        await EmployeeModel.findByIdAndUpdate(id, employee);
    }

    async remove(id: string): Promise<void> {
        if(!id) {
            throw new Error('not found ID')
        }
        await EmployeeModel.findByIdAndDelete(id);
    }
}


export default new EmployeeService();