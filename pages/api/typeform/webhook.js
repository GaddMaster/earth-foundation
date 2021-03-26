
export default async function handler(req, res) {

    let body = JSON.parse(req.body);

    console.log(body);

    res.status(200).json({ error: false, message: "Survey Submitted - Thank You" });

};
