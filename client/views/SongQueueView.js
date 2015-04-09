// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    var context = this;
    this.collection.on("add", function(e){
      context.render();
    });
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model:song}).render();
      })
    );
  }

});
