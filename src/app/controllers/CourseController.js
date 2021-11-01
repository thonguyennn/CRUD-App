const Course = require('../models/Course');

class CourseController {
    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(courses => res.render('show', {courses: courses}))
            .catch(next);
    }

    //[GET]  /courses/create
    create(req, res, next) {
        res.render('create')
    }

    //[POST]  /courses/store
    store(req, res, next) {
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                
            });
    }
    
    //[GET]  /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('edit', { course: course }))
            .catch(next);
    }

    //[PUT]  /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id}, req.body)
        .then(() => res.redirect('/me/mystore'))
        .catch(next);
    }

    //[DELETE]  /courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }

    //[DELETE]  /courses/:id/force
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }

    //[PATCH]  /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }

}

module.exports = new CourseController;