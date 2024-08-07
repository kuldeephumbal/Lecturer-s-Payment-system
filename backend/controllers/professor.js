module.exports.insertProfessor = (req, res) => {
    const { photo, name, mobile, email, gender, qualification, experience } = req.body;
    if (!photo || !name || !mobile || !email || !gender || !qualification || !experience) {
        return res.status(400).json({ error: "Input is missing" });
    }
    const query = `INSERT INTO Professors (photo, name, mobile, email, gender, qualification, experience) 
    VALUES ('${photo}', '${name}', ${mobile}, '${email}', '${gender}', '${qualification}', '${experience}')`;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }
        return res.status(200).json({ message: "Professor inserted successfully" });
    });
}

module.exports.getProfessors = (req, res) => {
    const query = "SELECT * FROM Professors";
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }
        return res.status(200).json(results);
    });
}

module.exports.updateProfessor = (req, res) => {
    const { id } = req.params;
    const { photo, name, mobile, email, gender, qualification, experience } = req.body;
    if (!photo || !name || !mobile || !email || !gender || !qualification || !experience) {
        return res.status(400).json({ error: "Input is missing" });
    }
    const query = `UPDATE Professors SET photo = ?, name = ?, mobile = ?, email = ?, gender = ?, qualification = ?, experience = ? WHERE id = ?`;
    connection.query(query, [photo, name, mobile, email, gender, qualification, experience, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }else if (results.affectedRows > 0) {
            return res.status(200).json({ message: "Professor updated successfully" });
        }else {
            return res.status(404).json({ error: "Professor not found" });
        }
    });
};

module.exports.deleteProfessor = (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM Professors WHERE id = ${id}`;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }else if (results.affectedRows > 0) {
            return res.status(200).json({ message: "Professor deleted successfully" });
        }else {
            return res.status(404).json({ error: "Professor not found" });
        }
    });
}

