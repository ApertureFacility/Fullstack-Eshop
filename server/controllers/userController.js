class UserController {
    async registration(req, res) {
        try {
            res.status(201).json({ message: 'User registered' });
        } catch (e) {
            res.status(500).json({ message: 'Registration error' });
        }
    }

    async login(req, res) {
        try {
            res.status(200).json({ message: 'Login successful' });
        } catch (e) {
            res.status(500).json({ message: 'Login error' });
        }
    }

    async check(req, res) {
        res.json({ message: 'checkwork' });
    }
}


module.exports = new UserController();
