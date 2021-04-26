require("dotenv").config();
const mailgun = require("mailgun-js")({
  apiKey: process.env.REACT_APP_MAILGUN_APIKEY,
  domain: process.env.REACT_APP_DOMAIN,
});

export const sendEmail = async (name, email, message) => {
  const data = {
    from: email,
    to: "galuszkabartosz5@gmail.com",
    subject: `PORTFOLIO from ${name}`,
    html: `<p>${message}</p>`,
  };

  return await mailgun.messages().send(data);
};
