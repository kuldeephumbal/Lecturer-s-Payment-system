module.exports.insertPayment = (req, res) => {
    const { Professor_id, order_date, remarks, start_date, end_date } = req.body;
    if (!Professor_id || !order_date || !remarks || !start_date || !end_date) {
        return res.status(400).json({ error: "Input is missing" });
    }
    const query = `INSERT INTO payments (Professor_id, order_date, remarks, start_date, end_date) 
    VALUES (?, ?, ?, ?, ?)`;
    connection.query(query, [Professor_id, order_date, remarks, start_date, end_date], (err, results) => {
        if (err) {
            console.error("Database query error:", err); 
            return res.status(500).json({ error: "Database query error" });
        }
        return res.status(201).json({ message: "Payment inserted successfully", professor_id: results.insertId });
    });
}

module.exports.getPayments = (req, res) => {
    const query = `SELECT * FROM payments`;
    connection.query(query, (err, results) => {
        if (err) {
            console.error("Database query error:", err);
            return res.status(500).json({ error: "Database query error" });
        }
        return res.status(200).json(results);
    });
}

module.exports.updatePayment = (req, res) => {
    const { id } = req.params; 
    const { Professor_id, order_date, remarks, start_date, end_date } = req.body;
    if (!Professor_id || !order_date || !remarks || !start_date || !end_date) {
        return res.status(400).json({ error: "Input is missing" });
    }
    const query = `UPDATE payments 
        SET Professor_id = ?, order_date = ?, remarks = ?, start_date = ?, end_date = ? 
        WHERE id = ?`;
    connection.query(query, [Professor_id, order_date, remarks, start_date, end_date, id], (err, results) => {
        if (err) {
            console.error("Database query error:", err); 
            return res.status(500).json({ error: "Database query error" });
        }
        if (results.affectedRows > 0) {
            return res.status(200).json({ message: "Payment updated successfully" });
        } else {
            return res.status(404).json({ error: "Payment not found" });
        }
    });
}

module.exports.deletePayment = (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM payments WHERE id = ?`;
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error("Database query error:", err);
            return res.status(500).json({ error: "Database query error" });
        }
        if (results.affectedRows > 0) {
            return res.status(200).json({ message: "Payment deleted successfully" });
        } else {
            return res.status(404).json({ error: "Payment not found" });
        }
    });
}


