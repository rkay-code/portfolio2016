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
    'room': 'index',
    'contact': 'index'
  },

  index: function() {
    if (this.currentTemplate === 'index') {
      return;
    }

    this.currentTemplate = 'index';

    this.$app.html(this.templates.index);

    $('a[href*=#]:not([href=#])').on('click', function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 50
          }, 1000);
          return false;
        }
      }
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.navbar-scroll').fadeIn(500);
      }
    });
    //
    // $('#home').scrollex({
    //   top: '10%',
    //   bottom: '20%',
    //   enter: function() {
    //     $('body').css('background-color', '#FFF');
    //   },
    //   leave: function() {
    //   }
    // });
    //
    //
    // $('#desk').scrollex({
    //   top: '10%',
    //   bottom: '30%',
    //   enter: function() {
    //     $('body').css('background-color', '#FCF6E8');
    //     $('.desk-wrapper').css('opacity', '1');
    //   },
    //   leave: function() {
    //   }
    // });
    //
    // $('#room').scrollex({
    //   top: '10%',
    //   bottom: '30%',
    //   enter: function() {
    //     $('body').css('background-color', '#FFE1D6');
    //     $('.room-wrapper').css('opacity', '1');
    //
    //   },
    //   leave: function() {
    //     $('.room-wrapper').css('opacity', '.3');
    //   }
    // });
    //
    // $('#mail').scrollex({
    //   top: '5%',
    //   bottom: '30%',
    //   enter: function() {
    //     $('body').css('background-color', '#FCF9F2');
    //     $('.rod').addClass('transform');
    //     $('.contact-wrapper').css('opacity', '1');
    //
    //   },
    //   leave: function() {
    //     $('.rod').removeClass('transform');
    //   }
    // });
    //
    // $('#work-wrapper').scrollex({
    //   top: '10%',
    //   bottom: '30%',
    //   enter: function() {
    //     $('body').css('background-color', '#fff');
    //
    //   },
    //   leave: function() {
    //   }
    // });


    $('body').scrollspy({
      target: '#my-nav',
      offset: 50
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
