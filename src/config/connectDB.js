import Sequelize from "sequelize";
const sequelize = new Sequelize(
  "danhsacheeg3",  "postgres",  "123456",
  {
    host: "localhost",
    dialect: "postgres",
    logging: false,    
    query : {"raw": true},
    timezone: "+07:00",  }
);
let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connect successfully.");
  } catch (error) { console.error
      ("Unable to connect to the database:", error); }
};
export default connectDB;
