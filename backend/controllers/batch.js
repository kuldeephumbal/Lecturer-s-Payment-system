module.exports.insertBatch = (req, res) => {
    const { course_id, start_date, end_date, class_time } = req.body;
    if (!course_id || !start_date || !end_date || !class_time) {
        return res.status(400).json({ error: "Input is missing" });
    }
    const query = `INSERT INTO batches (course_id, start_date, end_date, class_time) 
    VALUES (${course_id}, '${start_date}', '${end_date}', '${class_time}')`;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }
        return res.status(200).json({ message: "Batch inserted successfully", batchId: results.insertId });
    });
}

module.exports.getAllBatches = (req, res) => {
    const query = 'SELECT * FROM batches';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }
        return res.status(200).json(results);
    });
}

module.exports.updateBatch = (req, res) => {
    if (!course_id || !start_date || !end_date || !class_time) {
        return res.status(400).json({ error: "Input is missing" });
    }
    const { id } = req.params;
    const { course_id, start_date, end_date, class_time } = req.body;
    const query = `UPDATE batches SET course_id=${course_id}, start_date='${start_date}', end_date='${end_date}', class_time='${class_time}' WHERE id=${id}`;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }else if (results.affectedRows === 0) {
            return res.status(404).json({ error: "Batch not found" });
        }else { 
            return res.status(200).json({ message: "Batch updated successfully" });
        }
    });
}

module.exports.deleteBatch = (req, res) => {    
    const { id } = req.params;
    const query = `DELETE FROM batches WHERE id=${id}`;
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query error" });
        }else if (results.affectedRows === 0) {
            return res.status(404).json({ error: "Batch not found" });
        }else { 
            return res.status(200).json({ message: "Batch deleted successfully" });
        }
    });
}
