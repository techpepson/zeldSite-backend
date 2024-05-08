//code logic to receive email from the zeldSite frontend

const bodyParser = require("body-parser");
const express = require("express");
const nodeMailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const corsOptions = {
  origin: "https://zeld.vercel.app",
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

const transporter = nodeMailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: "zeld.customer@gmail.com",
    pass: "uabiteoekyjjsgcm",
  },
});

app.post("https://zeld-backend.vercel.app", (req, res) => {
  const { name, email, phone, message } = req.body;
  const mailOptions = {
    from: email,
    to: "zeld.customer@gmail.com",
    subject: `User request from ${name}`,
    text: `Name: ${name}, Phone: ${phone}, Message: ${message}`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending email");
      res.status(500).send("Error sending your details");
    } else {
      console.log("Email received from: ", name);
      res.status(200).send("Your message is sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
