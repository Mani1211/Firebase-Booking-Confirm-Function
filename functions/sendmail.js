const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "iammani1211@gmail.com",
    pass: "norchqioygznejyx",
  },
});

const sendmail = () => {
  const mailOptions = {
    from: "smanivasagamtnj@gmail.com", // You can write any mail Adress you want this doesn't effect anything
    // to: val.general.email,
    to: "smanivasagamtnj@gmail.com",
    // This mail adress should be filled with any mail you want to read it
    Date: "Wed, 25 Aug 2021 12:24:49 +0530",
    subject: `Booking Confirmation !`,
    attachments: [
      {
        // utf-8 string as an attachment
        filename: "text.pdf",
        path: "https://firebasestorage.googleapis.com/v0/b/touronapp-248e4.appspot.com/o/OBLU%20HELENGELI%20-%20ISLAND%20PLAN%202021-2022.pdf?alt=media&token=a0116637-1791-449b-b553-1d4bd3412d7f",
      },
    ], // Sample Subject for you template
    html: `<body style="margin: 0; padding: 0;"> 

      <p>Dear ,<p>
<p>Thank you for choosing us & we are happy to host you!!<p>
<p>
We’re glad that you found what you were looking for. It is our goal that you are always happy with what you bought from us, so please let us know if your buying experience was anything short of excellence. <p>

<p>Please feel free to reach us for any queries.  <p>

<p>Happy Day to you!! <p>
<div style={{display: "flex"}}>
 <img src="https://touron.in/static/media/logof.801ade17.png"  width='200px' height='70px'/>
                
 <div>
<p> Best Regards, </p>
<p>Booking Team</p>
<p>tour On (A Brand of Lotsatravel Holidays LLP)</p>
<p>Phone / Whatsapp : +91-9751009800  </p>
<div style={{display: "flex"}}>
<p>Click here for:</p>
<a href="https://www.touron.in/" target="_blank">Website</a>
<a href="https://www.facebook.com/touronholidays" target="_blank">Facebook</a>
<a href="https://www.instagram.com/touronholidays" target="_blank">Instagram</a>

</div>
</div>
 </div>
        
        </body>
            `, // email content in HTML. You can write any Html template in here
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
};

sendmail();
