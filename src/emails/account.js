const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const  sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'abhinav@abhinavm.com.np',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })

}

const sendCancelationEmail = (name, email) => {
    sgMail.send({
        to: email,
        from: 'abhinav@abhinavm.com.np',
        subject: 'Sorry to see you go.',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

module.exports = {
    sendWelcomeEmail, sendCancelationEmail
}