const User = require("./user.js");
const sql = require('./db.js');

follow = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    //console.log(req.body);
    const user = new User(req.body.follower);
    const followed = new User(req.body.followed);

    console.log(user.id, followed.id);

    // Follow a User
    user.follow(followed, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while following a user."
        });
        else res.send(data);
    });
};

unfollow = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }
    
    const user = new User(req.body.follower);
    const followed = new User(req.body.followed);

    console.log(user.id, followed.id);

    // Follow a User
    user.unfollow(followed, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while unfollowing a user."
        });
        else res.send(data);
    });
};

getFollow = (req, res) => {
    var start = 0;
    var lim = false;
    var end = 0;
    // limit hardcoded to 20
    const page = 20;
    
    if (req.query.limit) {
        lim = true;
        if (req.query.after_id) start = req.query.after_id;
        //console.log(lim, start, req.query.after_id);
    }

    if (req.query.followedid) {
        console.log(`get followers of User ${req.query.followedid}`);
        const user = new User({
            "id": req.query.followedid,
            "lastname": "",
            "firstname": "",
            "username": "",
            "email": ""
        });

        // get a User followers
        user.getFollower((err, data) => {
            if (err || data.length <= start){
                res.status(500).send({
                    message: "Some error occurred while getting a user followers."//|| err.message 
                });                
            } else {
                var list = [];
                if (lim) end = (data.length >= page + start)? page + start:data.length;
                else end = data.length;
                for (var i = start; i < end; i++) list.push(data[i].followerid);
                console.log(`Displayed ${end - start} Users: ${list.toString()}`);
                user.getUsers(list.toString(), (err, info) => {
                    res.send(info);
                });
                // for (i of data) list.push(i.followerid);
                // console.log(list.toString());
                // user.getUsers(list.toString(), (err, info) => {
                //     res.send(info);
                // });
            }
        });
    } else if (req.query.followerid) {
        console.log(`get followings of User ${req.query.followerid}`);
        const user = new User({
            "id": req.query.followerid,
            "lastname": "",
            "firstname": "",
            "username": "",
            "email": ""
        });

        // Get a user following users
        user.getFollowing((err, data) => {
            if (err || data.length <= start) {
                res.status(500).send({
                    message: "Some error occurred while get a user following users."//|| err.message 
                });                
            } else {
                var list = [];
                if (lim) end = (data.length >= page + start)? page + start:data.length;
                else end = data.length;
                for (var i = start; i < end; i++) list.push(data[i].followedid);
                console.log(`Displayed ${end - start} Users: ${list.toString()}`);
                user.getUsers(list.toString(), (err, info) => {
                    res.send(info);
                });

                // var list = [];
                // for (i of data) list.push(i.followedid);
                // console.log(list.toString());
                // user.getUsers(list.toString(), (err, info) => {
                //     res.send(info);
                // });
            }
        });
    } else {
        res.send({message: "Invalid Query"});
    }

};

module.exports = app => {
    // POST -> Follow a User
    app.post("/relations", follow);
    // DELETE -> Unfollow a User
    app.delete("/relations", unfollow);
    // GET -> get Follower/Following list
    app.get("/relations", getFollow);
    
    // GET -> get User info by ID
    //app.get("/users", getUser)
};