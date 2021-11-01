const Course = require('../models/Course');

class SiteController {
    //[GET] /home
    index(req, res, next) {
        Course.find({})
            .then(courses => res.render('index', {courses: courses}))
            .catch(next);

    }

}

module.exports = new SiteController;