module.exports.insertLecture = (req, res) => {
    const { batch_id, Professor_id, subject_id, Payment_id, duration, amount, lecture_date } = req.body;
    if (!batch_id || !Professor_id || !subject_id || !Payment_id || !duration || !amount || !lecture_date) {
        return res.status(400).json({ error: "Input is missing" });
    }
    const query = `INSERT INTO lectures (batch_id, Professor_id, subject_id, Payment_id, duration, amount, lecture_date) 
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;
    connection.query(query, [batch_id, Professor_id, subject_id, Payment_id, duration, amount, lecture_date], (err, results) => {
        if (err) {
            console.error("Database query error:", err); 
            return res.status(500).json({ error: "Database query error" });
        }
        return res.status(201).json({ message: "Lecture inserted successfully" });
    });
}

module.exports.getLectures = (req, res) => {
    const query = `SELECT * FROM lectures`;
    connection.query(query, (err, results) => {
        if (err) {
            console.error("Database query error:", err);
            return res.status(500).json({ error: "Database query error" });
        }
        return res.status(200).json(results);
    });
}


// module.exports.updateLecture = (req, res) => {
//     const { id } = req.params; 
//     const { batch_id, Professor_id, subject_id, Payment_id, duration, amount, lecture_date } = req.body;
//     if (!batch_id || !Professor_id || !subject_id || !Payment_id || !duration || !amount || !lecture_date) {
//         return res.status(400).json({ error: "All fields are required" });
//     }
//     const query = `UPDATE lectures 
//                    SET batch_id = ?, Professor_id = ?, subject_id = ?, Payment_id = ?, duration = ?, amount = ?, lecture_date = ? 
//                    WHERE id = ?`;
//     connection.query(query, [batch_id, Professor_id, subject_id, Payment_id, duration, amount, lecture_date, id], (err, results) => {
//         if (err) {
//             console.error("Database query error:", err); 
//             return res.status(500).json({ error: "Database query error" });
//         } else if (results.affectedRows > 0) {
//             return res.status(200).json({ message: "Lecture updated successfully" });
//         } else {
//             return res.status(404).json({ error: "Lecture not found" });
//         }
//     });
// }

// module.exports.deleteLecture = (req, res) => {  
//     const { id } = req.params;
//     const query = `DELETE FROM lectures WHERE id = ?`;
//     connection.query(query, [id], (err, results) => {
//         if (err) {
//             console.error("Database query error:", err); 
//             return res.status(500).json({ error: "Database query error" });
//         } else if (results.affectedRows > 0) {
//             return res.status(200).json({ message: "Lecture deleted successfully" });
//         } else {
//             return res.status(404).json({ error: "Lecture not found" });
//         }
//     });
// }
