var m = require("mithril")

var Body = require("./views/Body")
var Menu = require("./views/Menu")
var Home = require("./views/Home")
var About = require("./views/About")
var Timeline = require("./views/Timeline")

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(Body, [
                m(Menu), 
                m(Home)
            ])
        }
    },
    "/about": {
        render: function() {
            return m(Body, [
                m(Menu), 
                m(About, 
                    m(Timeline)
                )
            ])
        }
    }
})