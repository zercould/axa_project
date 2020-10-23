import Policies from "../data/policies";
import Filter from  "../utils/utils"
import Clients from  "../controllers/clients"
export default class clientController {
    static getPolicies(req, res) {
    const { id, amountInsured, email, inceptionDate, installmentPayment, clientId, userId } = req.body;
    const filterPolicies = {
        id, amountInsured , email, inceptionDate, installmentPayment, clientId
    }
    if (Clients.getRoleFromClients(userId) !== "admin"){
        var finalPolicies = Filter(Policies, filterPolicies);
        return res.status(201).json({
            count: finalPolicies.length,
            message: "List of Policies ",
            Policies: finalPolicies
        });
    }else{
        return res.status(404).json({
            error: true,
            message: "Permission Denied",
        });
    }
}
}
    