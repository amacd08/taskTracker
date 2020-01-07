const bcrypt=require('bcryptjs')

module.exports ={
register: async (req, res) => {
    const {firstName, lastName, email, username, password} = req.body
    const {session} = req
    const db = req.app.get('db')
    const userFound = await db.checkUserEmail({email})
    if (userFound[0]) return res.status(409).send('Email already exists')
    const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const createdUser = await db.register({
            firstName,
            lastName,
            username,
            email,
            password: hash
        })
        createdUser.catch(err => console.log(err))
        session.user = {id: createdUser[0].user_id, username: createdUser[0].username}
        res.status(200).send(session.user)
    }
}
