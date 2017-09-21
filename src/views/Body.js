var m = require("mithril")

module.exports = {
    view: function(vnode) {
        return m(".body", 
            m("section", vnode.children),
        )
    }
}