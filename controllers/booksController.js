
exports.saveFormData = (req, res) => {
    const {author,name,publication_date} = req.body;
    const pool = req.pool;
    console.log("Pool -", pool);
    const sql = `INSERT INTO books (author, name,publication_date) VALUES (?, ?, ?)`;
    req.pool.query(sql, [author, name,publication_date], (err, results) => {
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


exports.updateBook = (req, res) => {
    const { name } = req.params;
    const { updateAuthor, updatePublicationDate } = req.body;
    const pool = req.pool;
    const sql = `UPDATE books SET author = ?, publication_date = ? WHERE name = ?`;
    pool.query(sql, [updateAuthor, updatePublicationDate, name], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error updating book' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json({
            status: 'success',
            message: 'Book updated successfully',
            data: { name, author: updateAuthor, publication_date: updatePublicationDate }
        });
    });
};

exports.deleteBook = (req, res) => {
    const { name } = req.params;
    const pool = req.pool;
    const sql = `DELETE FROM books WHERE name = ?`;
    pool.query(sql, [name], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error deleting book' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json({
            status: 'success',
            message: 'Book deleted successfully',
            data: { name }
        });
    });
};


exports.getData = (req, res) => {
    const pool = req.pool;
    let sql = `SELECT author, name, publication_date FROM books`;

    const { sort, order } = req.query;
    if (sort && order) {
        sql += ` ORDER BY ${sort} ${order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'}`;
    }

    pool.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error fetching books' });
        }
        res.json({
            status: 'success',
            data: results // Assuming results is an array of book objects
        });
    });
};

