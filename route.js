const User = require("./user.js");
const sql = require('./db.js');

// getUser = (id) => {
//     //return 
//     var user = sql.querySync(`SELECT id, lastname, firstname, username, email FROM Users WHERE id = ${id}`).fetchAllSync();
//     // , (err, res) => {
//     //     if (err) {
//     //         console.log("error: ", err);
//     //         //result(err, null);
//     //         return;
//     //     }

//     //     console.log(`Found User ${id}:`, JSON.stringify(res[0], null, 2));
//     //     //var user = new User(res[0]);
//     //     //result(null, user);
//     // });
//     console.log(user);
// };

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
    if (req.query.followedid) {
        console.log(`get followers of User ${req.query.followedid}`);
        //console.log(getUser(req.query.followedid));
        //var user = getUser(req.query.followedid);

        const user = new User({
            "id": req.query.followedid,
            "lastname": "",
            "firstname": "",
            "username": "",
            "email": ""
        });

        // get a User followers
        user.getFollower((err, data) => {
            if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while getting a user followers."
            });
            else res.send(data);
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
        //var user = getUser(req.query.followedid);

        // Get a user following users
        user.getFollowing((err, data) => {
            if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while get a user following users."
            });
            else res.send(data);
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