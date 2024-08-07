module.exports.insertSubject = (req, res) => {
    const { course_id, title, rate } = req.body;
    if (!course_id || !title || !rate) {
        return res.status(400).json({ error: "Input is missing" });
    }
    const query = `INSERT INTO subjects (course_id, title, rate) VALUES (${course_id}, '${title}', ${rate})`;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }
        return res.status(200).json({ message: "Subject inserted successfully" });
    });
};

module.exports.getAllSubjects = (req, res) => {
    const query = 'SELECT * FROM subjects';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }
        return res.status(200).json(results);
    });
}

module.exports.updateSubject = (req, res) => {
    const { id } = req.params;
    const { course_id, title, rate } = req.body;
    const query = `UPDATE subjects SET course_id=${course_id}, title='${title}', rate=${rate} WHERE id=${id}`;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }else if (results.affectedRows === 0) {
            return res.status(404).json({ error: "Subject not found" });
        }else { 
            return res.status(200).json({ message: "Subject updated successfully" });
        }
    });
}

module.exports.deleteSubject = (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM subjects WHERE id=${id}`;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }else if (results.affectedRows === 0) {
            return res.status(404).json({ error: "Subject not found" });
        }else { 
            return res.status(200).json({ message: "Subject deleted successfully" });
        }
    });
}
