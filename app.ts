import express from 'express';
import departmentRouter from './Department/department.route';
import employeeRouter from './Employee/employee.route';
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 6000;

const app = express();

app.use(express.json());
app.use('/api', employeeRouter);
app.use('/api', departmentRouter);

const start = async () => {
    try {
        await mongoose.connect(String(process.env.MONGOOSE_DB), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => console.log(`Server on ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();