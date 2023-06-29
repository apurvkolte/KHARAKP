const app = require('./server');
const connection = require('./config/connection');
const dotenv = require('dotenv');
const schedule = require('node-schedule');
const mysqlbackup = require('./config/mysqldump');
const deleteAllFiles = require('./config/deleteAllFiles');
const { deleteFailOrder } = require('./controllers/orderController');

const PORT = process.env.PORT || 4000;

//Handle Uncaught exception
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.message}`);
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1);
});
// console.log("dwedwdfwdfwed");

//Setting up config file
dotenv.config({ path: 'config/config.env' });
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'config/config.env' });

//Connecting to database
// connectDatabase();
connection.getConnection((error) => {
    if (error) throw error;
    if (!error) {
        console.log("Database is connected successfully...!");
    } else {
        console.log("Database connection failed :", error.message);
    }
});

const server = app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT} in ${process.env.NODE_ENV} mode.`);
});

const job = schedule.scheduleJob({ hour: 1, minute: 23 }, function () {
    mysqlbackup();
});

const job1 = schedule.scheduleJob({ date: 3, hour: 1, minute: 23 }, function () {
    deleteFailOrder();
    deleteAllFiles()
});



//Handle Unhandled Promise rejection
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down th server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1);
    });
});

process.on('uncaughtException', (err) => {
    console.log('Uncaught exception', err);
    throw err;
});