
import InvolvedModel from "model/involved";

import onConnectDB from "utils/connect";

export default async function handler(req, res) {

    let { first, last, city, reason, how } = JSON.parse(req.body);

    console.log({ first, last, city, reason, how });

    await onConnectDB();
    
    let survey = await InvolvedModel.create({
        first, 
        last, 
        city, 
        reason, 
        how
    });

    console.log(survey);

    res.status(200).json({ error: false, message: "Survey Submitted - Thank You" });

};
