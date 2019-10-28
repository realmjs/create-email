"user strict"

module.exports = function ({sender, recipient, template, data}) {
  // get template, later will get by an url to json file
  const tml = template
  // create body html using parser
  const body = {
    html: parser(tml.body, data)
  }
  // create body text by remove all html tag
  body.text = html2text(body.html)
  // create email object and return
  return {
    charset: tml.charset,
    subject: parser(tml.subject, data),
    body,
    recipient,
    sender,
  }
}

function parser (template, data) {
  const matcher = /{{\s?([^{}\s]*)\s?}}/g
  let text = template.replace(matcher, (substring, value, index) => {
    value = data[value]
    return value
  })
  return text
}

function html2text (html) {
  const matcher = /<\s?([^<>\s]*)\s?>/g
  return html.replace(matcher, '')
}
