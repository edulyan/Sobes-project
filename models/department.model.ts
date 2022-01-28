import mongoose, { Document, ObjectId, Schema, Types } from 'mongoose';
import { IEmployee } from './employee.model';

export interface IRemoveEmployeeInArr extends Document {
    employeeId: ObjectId;
    departmentId: ObjectId;
}

export interface IDepartment extends Document {
    title: string;
    employees: Types.DocumentArray<IEmployee>;
}

const Department: Schema = new Schema({
    title: {type: String, required: true},
    employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
    }]
})

const DepartmentModel = mongoose.model('Department', Department);

export default DepartmentModel;