import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        username: "rrrr",
        password: "pppp"
    },

    secure: true,

    port: 465,

    host: 'smtp.gmail.com',

})
export default transporter