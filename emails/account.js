const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({

        to: email,
        from: 'conorhanson1998@gmail.com',
        subject: 'Welcome!',
        text: `Welcome to the app, ${name}. Let me know if you need any help.`

    })

   
}
const sendCancelEmail = (email, name) => {
    sgMail.send({

        to: email,
        from: 'conorhanson1998@gmail.com',
        subject: 'Goodbye for now!',
        text: `Sorry to see you have cancelled your account, ${name}. Could we have done anything better?.`

    })


}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
