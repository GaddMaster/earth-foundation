
import axios from "axios";

export default async function handler(req, res) {

    let { email } = JSON.parse(req.body);

    console.log("Email : ", email);
    
    let moopoint = `https://api.moosend.com/v3/subscribers/${process.env.MOO_AWARDS_REMINDER}/subscribe.json?apikey=${process.env.MOO_API}`;

    console.log("End Point : ", moopoint);

    let { data } = await axios.post(moopoint, {
        "Name" : email,
        "Email" : email,
        "HasExternalDoubleOptIn": false
    });

    console.log(data);

	res.status(200).json({ error: false });

};