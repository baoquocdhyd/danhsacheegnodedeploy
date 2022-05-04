import Sequelize from "sequelize";
const sequelize = new Sequelize(
  "d85hiofnl01j4m",  "fvfrvysvcuvnju",  "aa9d7a264460dec6e7a432f9c5dbd873c564eb8df52125b50ff68ed470af03b0",
  {
    host: "ec2-54-158-247-210.compute-1.amazonaws.com",
    dialect: "postgres",
    logging: false,    
    query : {"raw": true},
    timezone: "+07:00",
		dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, },
    },

	
	}
);
let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connect successfully.");
  } catch (error) { console.error
      ("Unable to connect to the database:", error); }
};
export default connectDB;
