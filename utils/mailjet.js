
const mailjet = require("node-mailjet").connect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY);

const onEmail = async (email, username, subject, part, html, send = true) => {
	if (send) {
		let response = await mailjet.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: process.env.MAILJET_EMAIL_SENDER,
						Name: "RentDodo"
					},
					To: [
						{
							Email: email,
							Name: displayName
						}
					],
					Subject: subject,
					TextPart: part,
					HTMLPart: html
				}
			]
		});
		response.body.Messages.forEach(m => console.log(m.Status));
		return response;
	} else console.log(html);
};

export default {
	sendEmail
};
