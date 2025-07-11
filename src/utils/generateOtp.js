import otpGenerator from 'otp-generator'

const generateOtp = () =>{
    const otp = otpGenerator.generate(6,{upperCaseAlphabets : false, specialCharacter: false})
    console.log(otp)
    return otp;
}
export{generateOtp}