
const mailjet = require("node-mailjet").connect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY);

const onValid = number => (/^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/.test(number));

const sendEmail = async (email, displayName, subject, part, html, send = true) => {
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

const onSMS = async (sender, message, mobile, send) => {
	if(onValid(mobile)) {
		if (send) {
			const response = await fetch(process.env.MAILJET_SMS_ENDPOINT, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${process.env.MAILJET_SMS_KEY}`
				},
				body: JSON.stringify({
					From: sender,
					To: mobile,
					text: message
				})
			});
			const json = await response.json();
			if (!json || json.ErrorCode || !json.Status) {
				return ({
					error: true,
					message: "Country Code Not Supported"
				});
			}
			else if (json.Status.Code === 1) {
				return({
					error: false,
					data: "Message Sent Successfully"
				});
			} else return({ error: true, message: "Exit With No Action" });
		} 
		return({
			error: false,
			message: "Message Not Sent"
		});
	} else return({ error: true, message: "Not Valid Phone Number" });
};

export default {
	sendEmail,
	onSMS
};
