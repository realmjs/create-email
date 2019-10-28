"use strict"

const createEmail = require('../src/main')

// create a template temporary for dev, will remove soon
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

const data = {
  service: 'Studiha',
  customer: 'Awesome Dev',
  endpoint: 'https://www.endpoint.com/ln/verifyemail',
  token: 'random-unique-token-to-user',
  signature: 'Studiha Support Team'
}

const sender = {
  name: 'Studiha Support Center',
  address: 'do.not.reply@studiha.com'
}

const recipient = {
  name: 'Awesome Dev',
  address: 'dev@team.com'
}

const email = createEmail({template, data, recipient, sender})

console.log(email)
