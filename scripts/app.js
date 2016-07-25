var Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$app = options.app;
    this.templates = options.templates;

    // What's currently rendered
    this.currentTemplate = undefined;
  },

  routes: {
    '': 'index',
    'work/:id': 'work',
    'work': 'index',
    'desk': 'index',
    'room': 'index',
    'contact': 'index'
  },

  index: function() {
    if (this.currentTemplate === 'index') {
      return;
    }

    this.currentTemplate = 'index';

    this.$app.html(this.templates.index);

    $('body').scrollspy({
      target: '#my-nav'
    });
  },

  work: function(id) {
    if (this.currentTemplate === 'work-detail') {
      return;
    }

    this.currentTemplate = 'work-detail';

    var work = _.find(window.WORK.projects, function(w) {
      return w.id === id
    });

    var html = this.templates.work({
      prevWork: '',
      nextWork: '',
      work: work
    });

    this.$app.html(html);
  }
});

$(document).ready(function() {
  var router = new Router({
    app: $('#app'),
    templates: {
      index: $('#index-content').html(),
      work: _.template($('#work-detail-content').html()),
      projectBrief: _.template($('#project-detail-brief-content').html())
    }
  });

  Backbone.history.start();
});
