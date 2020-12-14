import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Sanjula User',
        email: 'Sanjula@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Test User',
        email: 'Test@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users