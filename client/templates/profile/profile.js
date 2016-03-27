Template.profile.events({
  "submit .edit-profile": function(event){
    var file = $('#ProfileImages').get(0).files[0];
    if(file){
      fsFile = new FS.File(File);
      ProfileImages.insert(fsFile, function(err, result){
        if(err){
          throw new Meteor.Error(err);
        }
        else {
          var ImageLoc = '/cfs/files/ProfileImages/' +result._id;

          UserImages.insert({
            userId: Meteor.userId(),
            username: Meteor.user().username,
            image:ImageLoc
          });
          Router.go('/');
        }
      });
    }
    return false;
  }
});
