import policiesController from "../controllers/policies";
import clientsController from "../controllers/clients";
import tokenController from "../controllers/token";
import middleware from "../middleware/middleware";

export default (app)=>{
    app.post("/api/v1/", (req, res)=>
    res.status(500).json({"message": "Access Denied"}))
    app.post("/api/v1/objective1", middleware.authenticateJWT, clientsController.getClientById);
    app.post("/api/v1/objective2", middleware.authenticateJWT, clientsController.getClientByUserName);
    app.post("/api/v1/objective3", middleware.authenticateJWT, policiesController.getPolicesByUserName);
    app.post("/api/v1/objective4", middleware.authenticateJWT, clientsController.getClientByPoliceNumber);
    app.post("/api/v1/getToken", tokenController.getToken);
    
}