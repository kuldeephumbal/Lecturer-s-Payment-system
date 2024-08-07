module.exports.insertCourses = (req, res) => {
    const { title, fees, duration, description } = req.body;
    if (!title || !fees || !duration || !description) {
        return res.status(400).json({ error: "Input is missing" });
    }
    const query = `INSERT INTO courses ( title, fees, duration, description) VALUES ( '${title}', 
    ${fees}, '${duration}', '${description}');`;

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Database query error: ", err);
            return res.status(500).json([{ error: "Database query error" }]);
        } else if (results.affectedRows > 0) {
            return res.status(200).json([{ message: "Inserted successful" }]);
        } else {
            return res.status(401).json([{ error: "Invalid data" }]);
        }
    });
};

module.exports.getAllCourses = (req, res) => {
    const query = 'SELECT * FROM courses;';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }
        res.status(200).json(results);
    });
};

module.exports.updateCourse = (req, res) => {
    const { id } = req.params;
    const { title, fees, duration, description } = req.body;
    if (!title || !fees || !duration || !description) {
        return res.status(400).json({ error: "Input is missing" });
    }
    const query = `
    UPDATE courses
    SET title = '${title}', fees = ${fees}, duration = '${duration}', description = '${description}'
    WHERE id = ${id};`;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }
        res.status(200).json({ message: "Course updated successfully" });
    });
};

module.exports.deleteCourse = (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM courses WHERE id = ${id}`;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }
        if (results.affectedRows > 0) {
            return res.status(200).json({ message: "Course deleted successfully" });
        } else {
            return res.status(404).json({ error: "Course not found" });
        }
    });
}
