
export default async function handler(req, res) {

    console.log(req.body);

    res.status(200).json({ error: false, message: "Survey Submitted - Thank You" });

};
