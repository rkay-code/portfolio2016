var Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$app = options.app;
    this.templates = options.templates;

    // What's currently rendered
    this.currentTemplate = undefined;
  },

  routes: {
    '': 'home',
    'work/:id/:section': 'workScroll',
    'work/:id': 'detail',
    'home': 'home',
    'work': 'work',
    'process': 'process',
    'contact': 'contact',
  },

  home: function() {
    if (this.currentTemplate !== 'home') {
      this.currentTemplate = 'home';

      this.$app.html(this.templates.home);

      window.scrollTo(0, 0);
    }

    $('.menu__item').removeClass('menu__item--current');
    $('.about').addClass('menu__item--current');
  },

  work: function() {
    if (this.currentTemplate !== 'work') {
      this.currentTemplate = 'work';

      this.$app.html(this.templates.work);
    }

    $('.menu__item').removeClass('menu__item--current');
    $('.work').addClass('menu__item--current');
    $('.menu').show();
  },

  process: function() {
    if (this.currentTemplate !== 'process') {
      this.currentTemplate = 'process';

      this.$app.html(this.templates.process);
    }

    $('.menu__item').removeClass('menu__item--current');
    $('.process').addClass('menu__item--current');
    $('.menu').show();
  },

  contact: function() {
    if (this.currentTemplate !== 'contact') {
      this.currentTemplate = 'contact';

      this.$app.html(this.templates.contact);
    }

    $('.menu__item').removeClass('menu__item--current');
    $('.contact').addClass('menu__item--current');
    $('.menu').show();
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

  detail: function(id) {
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

    var html = this.templates.detail({
      prevWork: projects[prevWorkIndex].id,
      nextWork: projects[nextWorkIndex].id,
      work: projects[currentWorkIndex]
    });

    this.$app.html(html);

    $('.menu__item').removeClass('menu__item--current');
    $('.work').addClass('menu__item--current');

    window.scrollTo(0, 0);
  }
});

$(document).ready(function() {
  var router = new Router({
    app: $('#app'),
    templates: {
      home: $('#home-content').html(),
      work: _.template($('#work-content').html()),
      detail: _.template($('#work-detail-content').html()),
      process: _.template($('#process-content').html()),
      contact: _.template($('#contact-content').html()),
    }
  });

  Backbone.history.start();

  [].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
    var menuItems = menu.querySelectorAll('.menu__link'),
      setCurrent = function(ev) {

        var item = ev.target.parentNode;

        if (classie.has(item, 'menu__item--current')) {
          return false;
        }
        classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
        classie.add(item, 'menu__item--current');
      };

    [].slice.call(menuItems).forEach(function(el) {
      el.addEventListener('click', setCurrent);
    });
  });

});
