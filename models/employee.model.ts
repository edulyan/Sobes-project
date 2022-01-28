import mongoose, { Document, ObjectId, Schema } from 'mongoose';

export interface IAddEmployee extends Document {
    employeeId: ObjectId;
    departmentId: ObjectId;
}

export interface IEmployee extends Document {
    name: string;
    lastname: string;
    phone: string;
    departmentId: ObjectId;
}

const Employee: Schema = new Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    phone: {type: String, required: true},
    departments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    }
})

const EmployeeModel = mongoose.model<IEmployee>('Employee', Employee);

export default EmployeeModel;