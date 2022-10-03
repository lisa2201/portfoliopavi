const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => { 
  let data = req.body;

  console.log('====================================');
  console.log(data);
  console.log('====================================');

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "santhpavi19950122@gmail.com",
      pass: "Spaviththira95",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "santhpavi19950122@gmail.com",
    subject: `message from ${data.name}`,
    html: `

            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)

      console.log('====================================');
      console.log(error);
      console.log('====================================');
        return res.status(400).json({ msg: "Please Fill All The Fields!" });
      res.status(200).json({ msg: "Thank You For Contacting Ehizeex." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});
module.exports = router;
