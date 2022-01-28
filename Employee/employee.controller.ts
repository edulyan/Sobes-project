import Employee from "../models/employee.model";
import EmployeeService from "./employee.service";

class EmployeeController {
    async getAll(req: any, res: any) {
        try {
            const employees = await EmployeeService.getAll();
            return res.json(employees);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getById(req: any, res: any) {
        try {
            const employee = await EmployeeService.getById(req.params.id);
            return res.json(employee);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async create(req: any, res: any) {
        try {
            const newEmployee = await EmployeeService.create(req.body);
            return res.json(newEmployee);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async update(req: any, res: any) {
        try {
            const updEmployee = await EmployeeService.update(req.params.id, req.body);
            return res.json(updEmployee);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async delete(req: any, res: any) {
        try {
            const employee = await EmployeeService.remove(req.params.id)
            return res.json(employee);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default new EmployeeController();