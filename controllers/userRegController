exports.saveFormData = (req, res) => {
    const {email,password} = req.body;
    const pool = req.pool;
    console.log("Pool -", pool);
    const sql = `INSERT INTO users (email, password) VALUES (?, ?)`;
    req.pool.query(sql, [email, password], (err, results) => {
        console.log("Result: " + JSON.stringify(results));
        if(err) {
            console.error(err);
            res.status(500).json({ error: 'Error saving form data' });
            return;
        }
        res.json({
            status: 'success',
            data: {...req.body}
        })  
    })
}