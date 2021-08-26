const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

/**
 * Here we're using Gmail to send
 */

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "smanivasagamtnj@gmail.com",
    pass: "bqdrkkfwrvvsghxr",
  },
});

exports.sendBookingConfirmMail = functions.database
  .ref("/assignedTasks/{assignedTasksId}")
  .onCreate((snapshot, context) => {
    const val = snapshot.val();

    // getting dest email by query string

    const mailOptions = {
      from: "Sample Report <report@sample.com>", // You can write any mail Adress you want this doesn't effect anything
      to: "iammani1211@gmail.com",
      // This mail adress should be filled with any mail you want to read it
      title: "df",
      subject: "Sample Subject", // Sample Subject for you template
      html: `<body style="margin: 0; padding: 0;"> 
            <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
                <tr>
                    <td style="padding: 10px 0 30px 0;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
                            <tr>
                                <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/h1.gif" alt="Creating Email Magic" width="300" height="230" style="display: block;" />
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                                                
                                                <b>title</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                sb
                                            </td>
                                        </tr>
                                        <tr>
            
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>                
                        </table>
                    </td>
                </tr>
            </table>
        </body>
            `, // email content in HTML. You can write any Html template in here
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: " + info.response);
    });
  });
