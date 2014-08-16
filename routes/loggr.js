var Dropbox = require('./dropbox-datastores');

var TOKEN = "XaWZ0be4p9UAAAAAAAAAZt-eeap48-JD1QKJNUkUz5tdtb7elOmhWzhaGPTe1NdV"
var client = new Dropbox.Client({token: TOKEN});
var ds;
var entries;
var groups;
var categories;
var datastoreManager = client.getDatastoreManager();
datastoreManager.openDefaultDatastore(
  function(error, datastore) {
    ds = datastore;
    ds.recordsChanged.addListener(function(event) {});
    entries = ds.getTable("entries");
    groups = ds.getTable("groups");
    categories = ds.getTable("categories");
    categories.query({}).forEach(function(cat) { 
      var categoryEntries = cat.get("entries").toArray();
      if (categoryEntries.length) {
        var total = categoryEntries.reduce(function(p, c) { return entries.get(c).get("value") + p; }, 0);
        console.log(cat.get("name") + ": " + parseInt(total));
      }
    });
  });

module.exports = datastoreManager;
