export const validate = values => {
    const errors = {};
    // const fullNameSplit = values.fullName.split(' ')
    console.log(values);
    // if (!values.fullName) {
    //     errors.fullName = 'กรุณากรอกชื่อ นามสกุล';
    // } else if (fullNameSplit[0] === '') {
    //     errors.fullName = 'กรุณาตรวจสอบชื่อ นามสกุลอีกครั้ง'
    // } else if (fullNameSplit.length !== 2) {
    //     errors.fullName = 'กรุณาเว้นวรรคระหว่างชื่อ และนามสกุล'
    // }

    // if (!values.phoneNumber) {
    //     errors.phoneNumber = 'กรุณากรอกเบอร์โทรศัพท์';
    // } else if (/\D/.test(values.phoneNumber)) {
    //     errors.phoneNumber = 'กรุณากรอกตัวเลข 0-9';
    // } else if (!/[0-9]{10}/.test(values.phoneNumber)) {
    //     errors.phoneNumber = 'กรุณาตรวจสอบเบอร์โทรอีกครั้ง';
    // } else if (/[0-9]{11,}/.test(values.phoneNumber)) {
    //     errors.phoneNumber = 'กรุณาตรวจสอบเบอร์โทรอีกครั้ง';
    // }

    // if (!values.email) {
    //     errors.email = 'กรุณากรอกอีเมล';
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = 'กรุณาตรวจสอบอีเมลอีกครั้ง';
    // }

    // if (!values.password) {
    //     errors.password = 'กรุณากรอกรหัสผ่าน';
    // } else if (!/[\w\W]{15,}/.test(values.password)) {
    //     errors.password = 'รหัสผ่านควรมีความยาวอย่างน้อย 15 ตัวอักษร';
    // }

    return errors;
};