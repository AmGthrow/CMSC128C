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
        return res.status(400).send("Invalid username or password")
    else
        return res.status(200).send("User authenticated")
}

function checkCredentials(username, password) {
    const user = USERS.find(user => user.username === username)

    return !((user == null) || (user.password != password))

}