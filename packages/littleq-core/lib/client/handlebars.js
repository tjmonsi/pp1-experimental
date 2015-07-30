Template.registerHelper('log', function(context){
  console.log(context);
});

Template.registerHelper('formatDate', function(datetime, format) {
  Session.get('momentLocale'); // depend on session variable to reactively rerun the helper
  return moment(datetime).format(format);
});

Template.registerHelper('timeAgo', function(datetime) {
  Session.get('momentLocale'); // depend on session variable to reactively rerun the helper
  return moment(datetime).fromNow();
});

Template.registerHelper('sanitize', function(content) {
  console.log('cleaning up…');
  console.log(content);
  return LittleQ.utils.cleanUp(content);
});

Template.registerHelper('pluralize', function(count, string) {
  string = count === 1 ? string : string + 's';
  return i18n.t(string);
});