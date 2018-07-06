const Profile = require('../models/profile.model');
var ObjectId = require('mongodb').ObjectID;


exports.profile_create = function (req, res) {
    let profile = new Profile(
        {
            userName: req.body.userName,
            urlPhoto: req.body.urlPhoto
        }
    );
    profile.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Profile Created successfully');
    })
};

exports.getProfileInfo = function (req, res){

  Profile.findById({_id:ObjectId(req.params.id)}, function (err, Profile) {
        if (err) {
          return next(err);
        }
        // res.send('here');
        res.send(Profile);
    })
};
