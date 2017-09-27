var m = require("mithril")

module.exports = {
    view: function(vnode) {
        return m(".about", [
            m("p", "Here are some things I have done:"),
            m("ul.timeline", 
                m("section", vnode.children)
            )
        ])
    }
}