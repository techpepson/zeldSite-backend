//code logic to receive email from the zeldSite frontend

const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const nodeMailer = require('nodemailer')

const PORT = process.env.PORT || 3001

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/send-email", (req, res) => {
  const { name, email, phone, message } = req.body;


});
