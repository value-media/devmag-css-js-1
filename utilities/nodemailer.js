import nodemailer from 'nodemailer';
import { smtpOptions, from } from './smtp.config.js';

class EmailSender {
    constructor(smtpOptions) {
        this.transporter = nodemailer.createTransport(smtpOptions);
    }

    async sendEmail({from,to,subject,text,html}, verbose = false) {
        verbose && console.log('sendingEmail:', {from,to,subject,text,html});
        await this.transporter.sendMail({from,to,subject,text,html})
    }
}

async function sendEmail() {
    const sender = new EmailSender(smtpOptions);
    await sender.sendEmail({
        from,
        to: [{
            name: "Tomek",
            address: "tomek@dominiak24.pl"
        }],
        subject: 'Wiadomość wysłana z Node.js',
        text: 'To jest testowa wiadomość z Node-a.',
        html: 'To jest <b>TESTOWA</b> wiadomość z <b>Node-a</b>.'
    });

    console.log('Wysłano mail-a');
}

sendEmail();
