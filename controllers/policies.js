import Policies from "../data/policies";
import Filter from  "../utils/utils"
import Clients from  "../controllers/clients"
export default class clientController {
    static getPolicies(req, res) {
    const { id, amountInsured, email, inceptionDate, installmentPayment, clientId, userId } = req.body;
    const filterPolicies = {
        id, amountInsured , email, inceptionDate, installmentPayment, clientId
    }
    var userData =Clients.getRoleFromClients(userId);
    if (typeof userData !== 'undefined' && userData.length > 0) {
        console.log(Clients.getRoleFromClients(userId));
        var finalPolicies = Filter(Policies, filterPolicies);
        return res.status(200).json({
            count: finalPolicies.length,
            message: "List of Policies ",
            Policies: finalPolicies
        });
    }else{
        return res.status(500).json({
            error: true,
            message: "Permission Denied",
        });
    }
}
}
    