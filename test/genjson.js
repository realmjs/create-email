"use strict"

const fs = require('fs')

const template = {
  charset: 'UTF-8',
  subject: 'Verify your email registered at {{service}}',
  body: `
<p>Dear {{customer}},</p>
<p>Your email is registered to use services provided by <b> {{service}} </b> </p>
<p>To verify that your are the owner of this email, please go to the following URL</p>
<a href='{{endpoint}}?t={{token}}' > {{endpoint}}?t={{token}} </a>
<p> This link expires 24 hours after your original request </p>
<p style="color: red"> Notes: If you did not register this email at our service, please DO NOT click on the link. We are sorry for the inconvenience </p>
<p> This email is auto-generated. Please <b>do not reply</b> this email.</p>
<p> Sincerely, </p>
<p> {{signature}} </p>`
}

const text = JSON.stringify(template)

const fname = `test/Template.json`

fs.writeFileSync(fname, text)

console.log(`Created ${fname}`)
