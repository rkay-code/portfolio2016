var Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$app = options.app;
    this.templates = options.templates;

    // What's currently rendered
    this.currentTemplate = undefined;
  },

  routes: {
    '': 'index',
    'work/:id/:section': 'workScroll',
    'work/:id': 'work',
    'home': 'index',
    'work': 'index',
    'process': 'index',
    'contact': 'index',
    'tools': 'index'
  },

  index: function() {
    if (this.currentTemplate !== 'index') {
      this.currentTemplate = 'index';

      this.$app.html(this.templates.index);

      $('body').scrollspy({
        target: '#my-nav',
        offset: 50
      });

      window.scrollTo(0, 0);

      // $('#work').scrollex({
      //   top: '10%',
      //   bottom: '10%',
      //   enter: function() {
      //     $('.work-link').addClass('active');
      //   },
      //   leave: function() {
      //     $('.work-link').removeClass('active');
      //   }
      // });
      // $('#process').scrollex({
      //   top: '10%',
      //   bottom: '10%',
      //   enter: function() {
      //     $('.process-link').addClass('active');
      //   },
      //   leave: function() {
      //     $('.process-link').removeClass('active');
      //   }
      // });
      // $('#tools').scrollex({
      //   top: '20%',
      //   bottom: '10%',
      //   enter: function() {
      //     $('.tools-link').addClass('active');
      //   },
      //   leave: function() {
      //     $('.tools-link').removeClass('active');
      //   }
      // });
    }

    if (location.hash) {
      $('html, body').animate({
        scrollTop: $('#' + location.hash.substring(2)).offset().top - 50
      }, 1000);
    }
  },

  workScroll: function(id, section) {
    if (this.currentTemplate === 'work-detail-' + id) {

      $('html, body').animate({
        scrollTop: $('#' + section).position().top
      }, 1000);
    } else {
      this.work(id);
    }
  },

  work: function(id) {
    if (this.currentTemplate === 'work-detail-' + id) {
      return;
    }

    this.currentTemplate = 'work-detail-' + id;

    $('.work-link').addClass('active');

    var projects = window.WORK.projects;
    var currentWorkIndex = _.findIndex(projects, function(w) {
      return w.id === id
    });

    var nextWorkIndex = currentWorkIndex < (projects.length - 1) ? (currentWorkIndex + 1) : 0;
    var prevWorkIndex = currentWorkIndex > 0 ? (currentWorkIndex - 1) : projects.length - 1;

    var html = this.templates.work({
      prevWork: projects[prevWorkIndex].id,
      nextWork: projects[nextWorkIndex].id,
      work: projects[currentWorkIndex]
    });

    this.$app.html(html);

    window.scrollTo(0, 0);
  }
});

$(document).ready(function() {
  var router = new Router({
    app: $('#app'),
    templates: {
      index: $('#index-content').html(),
      work: _.template($('#work-detail-content').html())
    }
  });

  Backbone.history.start();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.navbar-scroll').fadeIn(500);
    }
  });

});
