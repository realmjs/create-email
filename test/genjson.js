"use strict"

const fs = require('fs')

const template = {
  charset: 'UTF-8',
  subject: 'Reset Password link generated',
  body: `
<html>
<head></head>
<body>
<p>Dear {{customer}},</p>
<p>We have received a request to reset your password at <b> {{service}} </b> </p>
<p>If you requested this, please go to the following URL to enter your new password</p>
<a href='{{endpoint}}?t={{token}}' > {{endpoint}}?t={{token}} </a>
<p> This link expires 24 hours after your original request </p>
<p> If you did NOT request to reset password, please do not click on the link. We are sorry for the inconvenience </p>
<p> This email is auto-generated. Please <b>do not reply</b> this email.</p>
<p> Sincerely, </p>
<p> {{signature}} </p>
</body>
</html>`
}

const text = JSON.stringify(template)

const fname = `test/Template.json`

fs.writeFileSync(fname, text)

console.log(`Created ${fname}`)
