var orm = require("../config/orm.js");

var university = {
  all: function(cb) {
      orm.all("universities", function(res) {
        cb(res);
      });
    },
    //hint:orm.all()
  create: function(name, cb) {
    orm.create("universities", 
    ["university_name", "devoured"],
    [name, false],
    cb);
  },
    //hint:orm.create()
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("universities", {devoured: true}, condition, cb) 
  }
};
    //hint:orm.update


module.exports = university;
