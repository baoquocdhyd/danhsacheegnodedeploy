import express from "express";
import { getHomePage, handleSave, handleDelete, getOne, handlePut} from "../controllers/patientController.js";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/getone", getOne);
  router.post("/api/save", handleSave); 
  router.delete("/api/delete", handleDelete); 
  router.put("/api/put", handlePut); 
  return app.use("/", router);
};
export default initWebRoutes;
