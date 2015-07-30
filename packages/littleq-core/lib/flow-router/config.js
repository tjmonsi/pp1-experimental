/**
 * Kick off the namespace for the layout
 * @namespace LittleQ.Layout
 */
 
LittleQ.Layout = {}

LittleQ.Layout.MainLayout = function(content) {
  FlowLayout.render("MainLayout", {content: content})
}

/**
 * For Not Found
 * 
 */
 
FlowRouter.notFound = {
  subscriptions: function() {
    
  },
  action: function() {
    LittleQ.Layout.MainLayout("NotFound")
  }
}