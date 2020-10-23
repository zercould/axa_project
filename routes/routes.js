import policiesController from "../controllers/policies";
import clientsController from "../controllers/clients";

export default (app)=>{

    app.post("/api/v1/", (req, res)=>
    res.status(200).json({"Policies API": "Healthy"}))
    app.post("/api/v1/client", clientsController.getClients);
    app.post("/api/v1/policies", policiesController.getPolicies);

}