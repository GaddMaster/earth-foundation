
const mailjet = require("node-mailjet").connect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY);

const onEmail = async (email, name, subject, part, html, send = true) => {
	if (send) {
		let response = await mailjet.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: process.env.MAILJET_EMAIL_SENDER,
						Name: "The Earth Foundation"
					},
					To: [
						{
							Email: email,
							Name: name
						}
					],
					Subject: subject,
					TextPart: part || "The Earth Foundation PART !?",
					HTMLPart: html
				}
			]
		});
		response.body.Messages.forEach((m, i) => console.log(`Email ${i+1} ${m.Status}`));
		return response;
	} else console.log(html);
};

export default {
	onEmail
};
