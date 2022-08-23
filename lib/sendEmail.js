const nodemailer = require('nodemailer');
const generarCodigo=()=>{
    return Date.now();
}
 const enviar=async(sendEmail,token,receivEmail)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: 'smtp.gmail.com',
        port: 465,
        secure:true,
        auth: {
            user: sendEmail,
            pass:token
        }
     });
 try {
        await transporter.sendMail({
        from: 'Prueba On line',
        cc:'lpipnavas@gmail.com',
        to: receivEmail,
        subject: 'Confirmar tu cuenta',
        html: `
    Necesitamos que confirmes tus datos ingresando el siguiente código:<b> ${generarCodigo()}</b>
        `
     })
    // console.log(info)
 } catch (error) {
    console.log(error)
 }
}

module.exports = enviar
 