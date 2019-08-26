const AnxietyInstance = root_require('models/anxiety_instance')

exports.list = (req, res) => {
    AnxietyInstance.findAll().then(instances => res.json(instances))
}