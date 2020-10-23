import Policies from "../data/policies";
import Filter from  "../utils/utils"
export default class clientController {
    static getPolicies(req, res) {
    const { id, amountInsured, email, inceptionDate, installmentPayment, clientId } = req.body;
    const filterPolicies = {
        id, amountInsured , email, inceptionDate, installmentPayment, clientId
    }
    console.log(filterPolicies);
    var finalPolicies = Filter(Policies, filterPolicies);
    return res.status(201).json({
        count: finalPolicies.length,
        message: "List of Policies ",
        Policies: finalPolicies
    });
    }
   
}
    