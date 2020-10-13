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

module.exports.getByID = (req, res) => {
    Category.findOne({ _id: req.params.id }, (err, category) => {
        if (err) throw err
        res.json(category)
    })
}

module.exports.add = (req, res) => {

    console.log(req.body.name)
    let newCategory = new Category({
        name: req.body.name
    })

    newCategory.save((err) => {
        if (err) throw err
        res.json(newCategory)
    })
}

module.exports.update = (req, res) => {
    console.log(req.body)
    Category.update({ _id: req.body._id }, req.body, (err, category) => {
        if (err) throw err;
        res.json(category)
    })
}