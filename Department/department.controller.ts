import DepartmentService from "./department.service";


class DepartmentController {
    async getAll(req: any, res: any){
        try {
            const departments = await DepartmentService.getAll();
            return res.json(departments);      
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getById(req: any, res: any) {
        try {
            const department = await DepartmentService.getById(req.params.id);
            return res.json(department);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async create(req: any, res: any) {
        try {
            const newDepartment = await DepartmentService.create(req.body);
            return res.json(newDepartment);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async addEmployee(req: any, res: any) {
        try {
            const connect = await DepartmentService.addEmployee(req.body);
            return res.json(connect);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async removeEmployeeInArr(req: any, res: any) {
        try {
            const employee = await DepartmentService.removeEmployeeInArr(req.body);
            return res.json(employee);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async delete(req: any, res: any) {
        try {
            const department = await DepartmentService.remove(req.params.id);
            return res.json(department);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}


export default new DepartmentController();