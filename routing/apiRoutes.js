var friendData = require('../app/data/friends.js');


module.exports = function(app){
    app.get("/api/friendList", function(req, res) {
        res.json(friendData);
      });

      app.post("/api/friendList", function(req, res) {
        friendData.push(req.body);
      });
    
    
}


