var m = require("mithril")

module.exports = {
    view: function(vnode) {
        return m(".pure-g", 
            m(".pure-u-2-5", [
                m(".name", "Filip Bontin"),
            ]), 

            m(".pure-u-3-5", 
                m(".menu", 
                    m("div", {class: "pure-menu pure-menu-horizontal"}, [
                        m("ul.pure-menu-list", [
                            m("li.pure-menu-item", m("a.pure-menu-link", {href: "#"}, "Home")),
                            m("li.pure-menu-item", m("a.pure-menu-link", {href: "#"}, "About")),
                            m("li.pure-menu-item", m("a.pure-menu-link", {href: "#"}, "Contact")),
                        ])
                    ])
                )
            )
        )
    }
}