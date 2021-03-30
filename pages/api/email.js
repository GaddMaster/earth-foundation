
import mailjet from "utils/mailjet";

export default async function handler(req, res) {

    let { email, name, subject, message } = JSON.parse(req.body);

    console.log({ email, name, subject, message });

    let result = await mailjet.onEmail(email, name, subject, `<span>${message}</span>`);

    res.status(200).json({ error: false, message: "Email Submitted Possibily", result });

};
