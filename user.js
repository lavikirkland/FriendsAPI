const sql = require('./db.js');

// User constructor
class User {
  constructor(user) {
    this.id = user.id;
    this.lastname = user.lastname;
    this.firstname = user.firstname;
    this.username = user.username;
    this.email = user.email;
  }

  follow(followedUser, result) {
    //console.log(this.id, followedUser.id);
    sql.query(`INSERT IGNORE INTO Relations (followerid, followedid) VALUES (${this.id}, ${followedUser.id})`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.affectedRows == 0) {
        // already following
        result({ kind: "already following" }, null);
        return;
      }

      // console.log("created customer: ", { id: res.insertId, ...newCustomer });
      // result(null, { id: res.insertId, ...newCustomer });
      console.log(`User ${this.id}:${this.firstname} followed User ${followedUser.id}:${followedUser.firstname}!`);
      result(null, res);
    });
  }

  // unfollow user function
  unfollow(followedUser, result) {
    sql.query(`DELETE FROM Relations WHERE followerid = ${this.id} AND followedid = ${followedUser.id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // relation not found
        result({ kind: "not_found" }, null);
        return;
      }

      console.log(`User ${this.id}:${this.firstname} unfollowed User ${followedUser.id}:${followedUser.firstname}!`);
      result(null, res);
    });
  }

  // get all follower function
  getFollower(result) {
    sql.query(`SELECT followerid FROM Relations WHERE followedid = ${this.id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // no followers
        result({ kind: "no_followers" }, null);
        return;
      }

      console.log(`User ${this.id}:${this.firstname} has ${res.length} followers!`);
      result(null, res);
    });
  }

  // get all following function
  getFollowing(result) {
    sql.query(`SELECT followedid FROM Relations WHERE followerid = ${this.id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // no followings
        result({ kind: "no_followings" }, null);
        return;
      }

      console.log(`User ${this.id}:${this.firstname} is following ${res.length} Users!`);
      result(null, res);
    });
  }
}

module.exports = User;