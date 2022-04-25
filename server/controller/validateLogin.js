// TODO: Grab user data from the db instead
// Sample database of users
const USERS = [
    {
        "username": "user1",
        "password": "pass1"
    },
    {
        "username": "user2",
        "password": "pass2"
    },
]
exports.validateLogin = async function (req, res) {

    const { username = '', password = '' } = req.query

    if (!checkCredentials(username, password))
        return res.status(400).send({ "detail": "Invalid username or password" })
    else
        // TODO: use a secure, randomly generated token
        return res.status(200).send({ "token": "12345" })
}

function checkCredentials(username, password) {
    const user = USERS.find(user => user.username === username)

    return !((user == null) || (user.password != password))

}