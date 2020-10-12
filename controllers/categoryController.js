var Category = require('../models/Category')

module.exports.delete = (req, res) => {
    Category.deleteOne({ _id: req.params.id }, (err, success) => {
        if (err) throw err;
        if (success) {
            Category.find({}, (err, categories) => {
                if (err) throw err;
                res.json(categories)
            })
        }
    })
}