const bcrypt = require('bcrypt');
const { getUserByEmail, createUserDB } = require('../repository/api.repository');
const salt = 10;
async function createUser(name, surname, email, pwd) {
    const user = await getUserByEmail(email);
    if (user.length) throw new Error('User has already exist');

    const hashPWD = await bcrypt.hash(pwd, salt);

    const data = await createUserDB(name, surname, email, hashPWD);
    if (!data.length) throw new Error('Not created')
    return data
}

async function authUser(email, pwd) {
    const user = await getUserByEmail(email);
    if (!user.length) throw new Error('Email not found');

    const pwdUserHash = user[0].pwd;

    if (!(await bcrypt.compare(pwd, pwdUserHash))) throw new Error('Password does not match')
    return user;
}
module.exports = { createUser, authUser }