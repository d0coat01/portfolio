if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

var skills = new Vue({
  el: '#skills',
  data: {
    skills: [
      {
        name: "Javascript",
        icon: "fab fa-js",
        experience: "6 Years",
        tools: [
          {
            name: "ES6",
            experience: "6 months",
            description: "",
          },
          {
            name: "AngularJS 1.x",
            experience: "4 years",
            description: "",
          },
          {
            name: "React",
            experience: "1 month",
            description: "",
          },
          {
            name: "Gulp",
            experience: "3 years",
            description: "",
          },
        ]
      },
      {
        name: "Web Design",
        icon: "fab fa-html5",
        experience: "6 Years",
        tools: [
          {
            name: "Responsive Web Design",
            experience: "5 years",
            description: "",
          },
          {
            name: "Bootstrap",
            experience: "4 years",
            description: "",
          },
          {
            name: "CSS Preprocessing (Less)",
            experience: "3 years",
            description: "",
          },
        ]
      },
      {
        name: "PHP",
        icon: "fab fa-php",
        experience: "5 Years",
        tools: [
          {
            name: "CakePHP",
            experience: "1.5 years",
            description: "",
          },
          {
            name: "PHPUnit",
            experience: "6 months",
            description: "",
          },
          {
            name: "AWS SDK",
            experience: "6 months",
            description: "",
          },
        ]
      },
      {
        name: "Relational Databases",
        icon: "fas fa-database",
        experience: "5 Years",
        tools: [
          {
            name: "MySQL",
            experience: "4 years",
            description: "",
          },
          {
            name: "PostgreSQL",
            experience: "6 months",
            description: "",
          },
        ]
      },
      {
        name: "Python",
        icon: "fab fa-python",
        experience: "6 months",
        tools: [
          {
            name: "Flask",
            experience: "3 months",
            description: "",
          },
          {
            name: "SqlAlchemy",
            experience: "2 months",
            description: "",
          },
        ]
      },
    ]
  }
})
