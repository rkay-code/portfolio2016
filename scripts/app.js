var work = [
  {
    id: 1,
    img: '',
    title: 'Boss',
    responsibility: 'More boss',
    type: 'test'
  },
  {
    id: 2,
    img: '',
    title: 'Boss',
    responsibility: 'More boss',
    type: 'test'
  },
  {
    id: 3,
    img: '',
    title: 'Boss',
    responsibility: 'More boss',
    type: 'test'
  }
];


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

    var projBriefTemplate = this.templates.projectBrief;

    var html = work.map(function(w) {
      return projBriefTemplate({work: w});
    });

    $('.proj-brief-wrapper').html(html.join(''));

    $('body').scrollspy({
      target: '#my-nav'
    });
  },

  work: function(id) {
    if (this.currentTemplate === 'work-detail') {
      return;
    }

    this.currentTemplate = 'work-detail';

    var html = this.templates.work({
      prevWork: '',
      nextWork: '',
      work: {
        id: id,
        briefImg: '',
        title: 'My Work',
        tagline: 'My tagline',
        responsibility: 'All of it',
        problemImg1: '',
        problemImg2: '',
        problemImg3: '',
        researchImg1: '',
        researchImg2: '',
        designImg1: '',
        designImg2: '',
        designImg3: ''
      }
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
