const mailjet = require("node-mailjet").connect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY);

export const sendEmail = async (email, name, subject, part, send = true) => {
  if (send) {
    let response = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: email,
            Name: name,
          },
          To: [
            {
              Email: process.env.MAILJET_EMAIL_RECIEVER,
              Name: "Earth Foundation"
            }
          ],
          Subject: subject,
          TextPart: part,
        }
      ]
    });
    response.body.Messages.forEach(m => console.log(m.Status));
    return response;
  } else {console.log(html);}
};

