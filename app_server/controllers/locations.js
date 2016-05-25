11/**
 * Created by Admin on 5/9/2016.
 */
/* GET about page */
module.exports.homelist = function(req, res){
    res.render('index', {title: 'Home'})
};

/* GET Locations info page */
module.exports.locationsInfo = function(req, res){
    res.render('index', {title: 'Locations Info'})
};

/* GET Add Review page */
module.exports.addReview = function(req, res){
    res.render('index', {title: 'Add Review'})
};