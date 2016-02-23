var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function(){
    passport.use(new LocalStrategy(function(username,passport,done){
        User.findOne({username:username},function(err,user){
            if(err){
                return done(err);
            }
            if(!user){
                return done(null,false,{message:'Unknown user'});
            }
            if(!user.authenticate(passport)){
                return done(null,false,{message:'Invalid passport'});
            }
            return done(null,user);
        });
    }));
};