var m = require("mithril")

module.exports = {
    view: function(vnode) {
        return m(".pure-g menu-bar", 
            m(".pure-u-2-5", [
                m(".name", "Filip Bontin"),
            ]), 

            m(".pure-u-3-5", 
                m(".menu", 
                    m("div.pure-menu pure-menu-horizontal", [
                        m("ul.pure-menu-list", [
                            m("li.pure-menu-item", m("a.pure-menu-link menu-item", {href: "#", oncreate: m.route.link}, "Home")),
                            m("li.pure-menu-item", m("a.pure-menu-link menu-item", {href: "/about", oncreate: m.route.link}, "About")),
                        ])
                    ])
                )
            )
        )
    }
}