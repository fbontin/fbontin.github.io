var m = require("mithril")

module.exports = {
    view: function(vnode) {
        return m(".about", [
            m("p", "Here are some things I have done:"),
            m("section", vnode.children),
        ])
    }
}