const sendE = require('./lib/sendEmail');
//
const enviarEmail=(sendEmail,token,receivEmail)=>{
    sendE(sendEmail,token,receivEmail).then(()=>{console.log('se envío');}).catch(err=>console.log(err))
}
module.exports = enviarEmail
