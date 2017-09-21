var m = require("mithril")

var Body = require("./views/Body")
var Menu = require("./views/Menu")
var Home = require("./views/Home")

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(Body, [
                m(Menu), 
                m(Home)
            ])
        }
    }
})