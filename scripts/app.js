var WORK = [
  {
    id: "gigster",
    title: "Gigster",
    briefImg: "img/gigster.jpg",
    responsibility: "I led design, prototyping, and front-end implementation for the user-facing dashboard and project page.",
    tagline: "On demand software development.",
    problem: "<b>It was difficult to visualize and find important information.</b> <br><br><b>Problem One - The Unhelpful Dashboard:</b><br>You’re a project manager for many projects, in multiple locations, working with teams in different time zones - and your main window into the state of all of them is a dashboard page on your screen. Sounds a little stressful, but you know your handy dashboard has your back until… wait, this dashboard doesn’t have your back at all! You stare, slack jawed staring at a listing of nothing but project names, paralyzed by the realization that you have to click into and scroll through each and every one to find out what’s happening. The part of your workflow that should only take 30 minutes actually eats into hours of your day.<br><br><b>Problem Two - The Cluttered Description Page:</b><br>You’re a developer trying to find the key links for the project you just started. You know they’re included somewhere in the project page, but for the life of you - you can’t remember where. After a lot of clicking, squinting, and scrolling around, you finally stumble upon them - but wait, where were those files…",
    research: "At this point, the platform was still fairly early stage and the individual most connected with users was the CTO. I worked with him to find out the largest problems up to this point and what the product needed to be able to do going forward. Since I was part of the network, I was also available to collect qualitative information and do user testing with project managers and developers on the platform.",
    researchImg1: "img/gigster-01.png",
    researchCaption1: "We knew we needed to visualize key project information, but had to test what the most pertinent information was.",
    researchImg2: "img/gigster-03.png",
    researchCaption2: "An alternative explored layout.",
    constraints: "<b>Short timeline:</b> < 1 month for complete cycle of ideation, design, and production implementation.<br><b>Layout:</b> Some aspects of the original layout needed to be maintained for engineering/timeline purposes.",
    design: "I created a visual interface using a progress bar for timeliness and an emoticon face for customer satisfaction. They have potential states of good (green), be careful (orange), and this is going south quickly (red) to notify users when action is necessary. We also modularized the gig details page, locking key info to the top for easy access.",
    designImg1: "img/gigster-dash.png",
    designCaption1: "I created a visual dashboard based on key information states.",
    designImg2: "img/gigster-project.png",
    designCaption2: "The modularized dashboard is easier to navigate and find key information regularly.",
    retrospective: "In retrospect (and going forward!), I’m aware of some weaknesses in the current design. As Gigster scales, the timeline for a project to be completely handed off/deactivated can be much longer than the actual end date. Because of this, an individual user’s dashboard can be filled with more projects than the max project estimate in the original designs - reducing the intended simplicity.",
    type: "Case Study"
  },
  {
    id: "riskmaster",
    title: "Riskmaster",
    img: "img/riskmaster-logo.png",
    briefImg: "img/riskmaster-thumb.png",
    role: "Design | Development",
    responsibility: "I led design and development (objective-c) on an app that organizes and manages information on portfolio investments.",
    tagline: "A visual portfolio management tool.",
    problem: "<b>It was difficult to filter, recall, and find important details for portfolio investments.</b><br><br>Tim Draper, of Draper Associates, has been investing in companies for a long time. Often, at events or in meetings, he would find himself struggling to remember key details about a company, but he could always remember some key filter. In these moments, he didn’t have his laptop to search through the database of his investments, and even if he did - it wouldn’t be much help. The antiquated system all the data was stored in made it difficult to quickly visualize and skim through companies based on things like company type, the fund invested through, or the founder’s name. He needed to have his investments in his pocket in an easy to browse interface.",
    research: "I worked with Tim to find out how he would use the existing system and the key information he usually needed. In addition, I spoke to his assistant and key staff members who would also be using the application to find out their issues, and any requests they commonly received from Tim for information.<br><br>Originally, Tim wanted a swipable card interface, but I had usability concerns. We tested a few layouts and came to the conclusion that the card layout in combination with more sorted grid options covered all expected use cases.",
    constraints: "<b>Short timeline:</b> 1 month for complete cycle of ideation, design, and beta build.<br><b>Data and Formats:</b> The data I could display, and how it could be pulled from the database, had limited to no flexibility based on the services the customer used.",
    design: "We decided to make a no frills interface - clean, simple, and easily readable. There were two primary use cases we designed for: 1.) the ability to swipe through all investments in a card-like interface, and 2.) the ability to quickly skim through companies by category or fund.",
    designImg1: "img/riskmaster-homegrid.png",
    designCaption1: "The home screen - clicking view all takes the user to the card inteface, the square buttons direct to filtered grid layouts.",
    designImg2: "img/riskmaster-cardview.png",
    designCaption2: "The front view of a card.",
    designImg3: "img/riskmaster-detailview.png",
    designCaption3: "The back side of a card, accessed by tapping on either a card or logo in grid view. Easily dismissed by swiping down.",
    designImg4: "img/riskmaster-gridview.png",
    designCaption4: "The filtered grid view.",
    retrospective: "Having social information for the founder and multi-tier filtering would provide an even better solution to the problem. These were left out in the original development cycle due to time/data constraints.",
    type: "Case Study"
  },
  {
    id: "coinmotion",
    title: "Coinmotion",
    img: "img/coinmotion-logo.png",
    briefImg: "img/coinmotion.jpg",
    role: "Design | Development",
    responsibility: "I led design and front-end development (html, css, javascript) of the primary wallet/dashboard screen.",
    tagline: "Bitcoin - Easy, fast, the way it should be.",
    problem: "<b>To understand your current account balances and take action, users had to click through multiple pages.</b>",
    problemImg1: "img/coinmotion-oldbuy.png",
    problemCaption1: "The original buy screen.",
    problemImg2: "img/coinmotion-oldsend.png",
    problemCaption2: "The original send screen.",
    problemImg3: "img/coinmotion-oldsummary.png",
    problemCaption3: "The original account summary screen.",
    research: "The company was part of the Boost accelerator, and through another company in the class we had access to the largest active Q&A forum of bitcoin users. We used this to discover common questions and complaints about existing wallet sites, to ask how users are currently utilizing their wallets, and to ask what an ideal use flow would be.",
    constraints: "<b>Timeline:</b> 3 weeks for design and development.",
    designImg1: "img/coinmotion-new.png",
    design: "I took the many possible actions/views on the primary wallet interface and consolidated them into a single screen view. This was done by giving send money (one of the highest use cases) a permanent home at the top and moving less common transactional flows into modals. I also added in light gamification of the registration system to increase the amount of information provided.<br><br>Not pictured: I modified the UI of other screens within the site to match the new elements.",
    type: "Overview"
  },
  {
    id: "gamesmith",
    title: "Gamesmith",
    img: "img/gamesmith-logo.png",
    briefImg: "img/gamesmith-carousel.jpg",
    role: "Design",
    responsibility: "I led product design on a social network for the video game industry.",
    tagline: "The network for video game professionals.",
    problem: "<b>There isn’t a site for video game professionals to showcase their work and find jobs.</b>",
    research: "The CEO is actively involved in the video game space and had done extensive user interviews before coming to me with the project - most project decisions were based on that data.",
    constraints: "<b>Timeline:</b> 3 weeks for design.",
    design: "We wanted to combine the clean feel of a networking site with the modern playfulness of a game. The primary mechanism is a deck of cards containing other professionals in your network. Each user has a card which lists their accomplishments, and users can validate or invalidate other user's accomplishments. I created a color palette based on video game imagery, and I combined clean typography with modern iconography to give the content heavy product a lighter feel.",
    designImg1: "img/gamesmith-carousel.png",
    designCaption1: "A user's network is represented by a deck of cards, giving a more playful, physical feel.",
    designImg2: "img/gamesmith-card.png",
    designCaption2: "Cards can be expanded into a detail view of a user's career, credibility, and connections.",
    retrospective: "The deck nature of the layout works well in early stages, but alternate layouts that allow the same playful feel are being explored as the product scales.",
    type: "Overview"
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

    var html = WORK.map(function(w) {
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

    var work = _.find(WORK, function(w) {
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
