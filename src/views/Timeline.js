var m = require("mithril")
var items = require("../data/TimelineData")

items = items.map(function(item) {
    return m(".item", [
        m(".title", item.title),
        m(".text", item.text),
        m(".date", item.startDate + " - " + item.endDate),
    ])
})

module.exports = {
    view: function(vnode) {
        return m(".timeline", items)
    }
}

