import DepartmentModel, { IDepartment, IRemoveEmployeeInArr } from "../models/department.model";
import EmployeeModel, { IAddEmployee, IEmployee } from "../models/employee.model";
import EmployeeService from "../Employee/employee.service";
import { ObjectId } from "mongoose";

class DepartmentService {

    async getAll(): Promise<IDepartment[]> {
        return await DepartmentModel.find().populate('employees');
    }

    async getById(id: string): Promise<IDepartment> {
        if (!id) {
            throw new Error('not found ID')
        }
        const department = await DepartmentModel.findById(id).populate('employees');
        return department;
    }

    async create(department: IDepartment): Promise<IDepartment> {
        const newDepartment = await DepartmentModel.create(department);
        return newDepartment;
    }

    async addEmployee(addEmployee: IAddEmployee): Promise<boolean> {

        const findDepartment = await DepartmentModel.findById(addEmployee.departmentId);

        const findEmployee = await EmployeeModel.findById(addEmployee.employeeId);

        if(!findEmployee) {
            throw new Error('Not found ID');
        }

        findDepartment.employees.push(findEmployee.id);

        await findDepartment.save();

        return true;
    }

    async removeEmployeeInArr(removeEmployee: IRemoveEmployeeInArr): Promise<void> {

        const findDepartment = await DepartmentModel.findById(removeEmployee.departmentId);

        const findEmployee = await EmployeeModel.findById(removeEmployee.employeeId);

        if(!findEmployee) {
            throw new Error('Not found ID');
        }

        console.log(findEmployee._id); 

        let found = findDepartment.employees.find((x: any) => x._id == findEmployee._id);

        console.log(findDepartment.employees)

        console.log(found);

        await findDepartment.employees.splice(found, 1);
    }

    async remove(id: string): Promise<void> {
        if(!id) {
            throw new Error('not found ID')
        }
        await DepartmentModel.findByIdAndDelete(id);
    }
}

export default new DepartmentService();