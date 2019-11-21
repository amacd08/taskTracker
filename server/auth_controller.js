const bcrypt=require('bcryptjs')

module.exports ={
register: async (req, res) => {
    const {firstName, lastName, email, username, password} = req.body
    const {session} = req
    const db = req.app.get('db')
    const userFound = await db.check_user_email({email})
    if (userFound[0]) return res.stat(409).send('Email already exists')
    const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const createdUser = await db.register_user({
            firstName,
            lastName,
            username,
            email,
            password: hash
        })
        session.user = {id: createdUser[0].user_id, username: createdUser[0].username}
        res.status(200).send(session.user)
    }
}