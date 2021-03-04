
import MentorModel from "model/mentor";

import onConnectDB from "utils/connect";

export default async function handler(req, res) {

    let { first, last, dob, email, institution, degree, expect, selected, other, why } = JSON.parse(req.body);

    console.log({ first, last, dob, email, institution, degree, expect, selected, other, why });

    await onConnectDB();
    
    let application = await MentorModel.create({
        first, 
        last, 
        dob, 
        email, 
        institution, 
        degree, 
        expect, 
        selected, 
        other, 
        why
    });

    console.log(application);

    res.status(200).json({ error: false, message: "Survey Submitted - Thank You" });

};