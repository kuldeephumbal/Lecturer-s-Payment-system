module.exports.getBatchWiseLectureDetails = (req, res) => {
    const { batch_id, start_date, end_date } = req.body;
    if (!batch_id || !start_date || !end_date) {
        return res.status(400).json({ error: "Batch ID, start date, and end date are required" });
    }
    const query = `
        SELECT l.id, l.batch_id, l.Professor_id, l.subject_id, l.Payment_id, l.duration, l.amount, l.lecture_date 
        FROM lectures l
        WHERE l.batch_id = ? AND l.lecture_date BETWEEN ? AND ?`;

    connection.query(query, [batch_id, start_date, end_date], (err, results) => {
        if (err) {
            console.error("Database query error:", err); 
            return res.status(500).json({ error: "Database query error" });
        }
        return res.status(200).json(results);
    });
}

