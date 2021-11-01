const Course = require('../models/Course');

class MeController {
    //[GET] /me/stored
    stored(req, res, next) {
        Course.find({})
            .then(courses => res.render('myCourse', {
                courses: courses
            }))
            .catch(next);
    }
    //[GET] /me/trash
    trash(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('trash', {
                courses: courses
            }))
            .catch(next);
    }

}

module.exports = new MeController;