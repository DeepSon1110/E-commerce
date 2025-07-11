import nodemailer from 'nodemailer'
const sendMail = async(email,otp) =>{

    const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
    user: "khadkasandip489@gmail.com",
    pass: 'xfegirbjsytblllk',
  },
});
    
const info = await transporter.sendMail({
  from: '"Sandip Sir" <maddison53@ethereal.email>',
  to: email,
  subject: "Your OTP Code",
  text: `Your OTP code is:${otp} `, // plain text fallback
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #4CAF50;">Verification Code</h2>
      <p>Hello Sandip,</p>
      <p>Use the following OTP to complete your verification process:</p>
      <div style="font-size: 24px; font-weight: bold; background-color: #f2f2f2; padding: 10px 20px; display: inline-block; border-radius: 5px; margin: 10px 0;">
        <p>${otp}</p>
      </div>
      <p>This code is valid for the next 5 minutes. Do not share it with anyone.</p>
      <br/>
      <p>Thank you,<br/>Team Stack Overflow Clone</p>
    </div>
  `
});}

export {sendMail}