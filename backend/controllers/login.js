module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Input is missing" });
    }

    const query = `SELECT * FROM admin WHERE email = '${email}' AND password = '${password}';`;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json([{ error: "Database query error" }]);
        } else if (results.length > 0) {
            return res.status(200).json([{ message: "Login successful", user: results[0] }]);
        } else {
            return res.status(401).json([{ error: "Invalid email or password" }]);
        }
    });
};


