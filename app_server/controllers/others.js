/**
 * Created by Admin on 5/9/2016.
 */
/* GET about page */
module.exports.about = function(req, res){
    res.render('index', {title: 'About'})
};