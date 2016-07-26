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

    var landing = document.getElementById('landing');
    var work = document.getElementById('work');
    landing.addEventListener('animationend',function( event ) {
      landing.style.display = 'none';
      $('#work').addClass('show');},
      false);


    $('#work').scrollex({
      top: '10%',
      bottom: '30%',
      enter: function() {
        $('body').css('background-color', '#FFF');
      },
      leave: function() {
          // $('body').css('background-color', '');

      }
    });


    $('#desk').scrollex({
      top: '10%',
      bottom: '30%',
      enter: function() {
        $('body').css('background-color', '#FFF3B2');
      },
      leave: function() {
          // $('body').css('background-color', '');

      }
    });

    $('#room').scrollex({
      top: '10%',
      bottom: '30%',
      enter: function() {
          $('body').css('background-color', '#FFBFC3');

      },
      leave: function() {
          // $('body').css('background-color', '#fff');
      }
    });

    $('#contact').scrollex({
      top: '10%',
      bottom: '30%',
      enter: function() {
          $('body').css('background-color', '#FFF2F2');
          $('.rod').addClass('transform');

      },
      leave: function() {
          // $('body').css('background-color', '#fff');
      }
    });

    $('body').scrollspy({
      target: '#my-nav'
    });
  },

  workScroll: function(id, section) {
    if (this.currentTemplate === 'work-detail-' + id) {
      var position = $('#' + section).position();
      window.scrollTo(0, position.top);
    } else {
      this.work(id);
    }
  },

  work: function(id) {
    if (this.currentTemplate === 'work-detail-' + id) {
      return;
    }

    this.currentTemplate = 'work-detail-' + id;

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
});
