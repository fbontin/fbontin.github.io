var m = require("mithril")

var aboutMe = "Dedicated software engineer with a passion for programming and UX-design. When I'm not in front of the computer, I hang out with friends, travel or enjoy nature. If the weather allows I'll probably try to get some longboarding in there too."

module.exports = {
    view: function(vnode) {
        return m(".home", [
            m("img.face", {src: "face.png", width: "100%"}),
            m("p.name", "Filip Bontin"),
            m("p", aboutMe),
            m("p", "Want to know ", [
                m("a", {href: "/about", oncreate: m.route.link}, "more"),
                m("span", "?"),
            ]),
            m(".icons", 
                m(".pure-g", [
                    m(".pure-u-1-3", 
                        m("a.icon", {href: "mailto:fbontin@gmail.com"}, m("i.fa fa-envelope fa-lg"))
                    ),
                    m(".pure-u-1-3", 
                        m("a.icon", {href: "https://github.com/fbontin/"}, m("i.fa fa-github fa-lg"))
                    ),
                    m(".pure-u-1-3", 
                        m("a.icon", {href: "https://linkedin.com/in/fbontin"}, m("i.fa fa-linkedin fa-lg"))
                    ),
                ])
            )
        ])
    }
}