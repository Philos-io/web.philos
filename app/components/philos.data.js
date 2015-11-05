const philos = {
  products : [
    {
      topic: 'Advanced JavaScript & Angular Bootcamp for developers',
      date: '23rd November',
      image: 'img/workshops/angularjs.png',
      length: '6 Days Bootcamp',
      detailsUrl: '/program',
      type: 'bootcamp',
      why: `There's a huge demand for developers with JavaScript and AngularJS skills`,
      who: `Developers with prior programming experience. We won't be teaching loops or basics programming skills.
      Any candidate should master at least one programming language (Php, C#, Java, Closure...)`,
      agenda: [
        'Day 1: Deep dive in JavaScript, mastering the syntax by building a simple library',
        'Day 2: Advanced JavaScript concepts: closure, prototypal inheritance, scope and context switching',
        'Day 3: Introduction to Angular, core concepts',
        'Day 4: Directives and routing in AngularJS',
        'Day 5: Architecture, testing and deployment in Angular',
        'Day 6: Putting everything together one more time',
      ],
      requirements: [
        'A prior programming experience, we will not be teaching loops',
        'A well equiped computer with admin privileges',
        'A modern browser (Having nightly build installed would also help)',
        'An IDE or a good code editor like Atom.io, Sublime or Vim'
      ]
    },
    {
      topic: 'JavaScript Best Practices and Patterns',
      date: 'On demand',
      image: 'img/workshops/JS.png',
      length: 'Half Day Workshop',
      detailsUrl: '/workshops/javascript-best-practices-and-patterns',
      type: 'workshop',
      why: ``,
      who: ``,
      agenda: [
        '',
        ''
      ],
      requirements: [
        'A prior programming experience, we will not be teaching loops',
        'A well equiped computer with admin privileges',
        'A modern browser (Having nightly build installed would also help)',
        'An IDE or a good code editor like Atom.io, Sublime or Vim'
      ]
    },
    {
      topic: 'Writing Testable JavaScript Application',
      date: 'On demand',
      length: 'Half Day Workshop',
      image: 'img/workshops/TDD.png',
      detailsUrl: '/workshops/writing-testable-javascript-applications',
      type: 'workshop',
      why: `You all heard that unit testing your application is important but records show that most of people don't test
      their code. Why is that? Is testing difficult? Where do you start? During this workshop, we will show tools and techniques
      that make testing easier than one would think.`,
      who: `Developers with experience developing JavaScript applications. This is a hands-on session of 4 hours using Angular so experience
      using Angular is mandatory. For a general testing workshop in JavaScript, you can join our 2 days bootcamps on JavaScript.`,
      agenda: [
        'Introduction to Mocha, Jasmine, Chai, Karma and SinonJS',
        'Testing controller in Angular',
        'Testing service and filter in Angular',
        'Testing directive in Angular'
      ],
      requirements: [
        'A prior programming experience, we will not be teaching loops',
        'A well equiped computer with admin privileges',
        'A modern browser (Having nightly build installed would also help)',
        'An IDE or a good code editor like Atom.io, Sublime or Vim'
      ]
    },
    {
      topic: 'Getting up and running with ES6/ES2015',
      date: 'On demand',
      image: 'img/workshops/ES6.png',
      length: 'Half Day Workshop',
      detailsUrl: '/workshops/getting-up-and-running-with-es6',
      type: 'workshop',
      why: ``,
      who: ``,
      agenda: [
        'Setting up your build tool for ES2015',
        'Improving your workflow with Webpack, Gulp, Browserify or JSPM',
        'Design Modular apps using the module system',
        'In deepth look at Classes in ES2015',
        'Arrow function',
        'Variables and parameters',
        'Inheritance with Subclasses',
        'Collections',
        'Proxy',
        'Iterators, Symbols and Generators',
        'Architecture & Best Practices',
        'Capstone project: Migrating a simple application to ES2015'
      ],
      requirements: [
        'A prior programming experience, we will not be teaching loops',
        'A well equiped computer with admin privileges',
        'A modern browser (Having nightly build installed would also help)',
        'An IDE or a good code editor like Atom.io, Sublime or Vim'
      ]
    },
    {
      topic: 'Performances in Angular',
      date: 'On demand',
      image: 'img/workshops/angularjs.png',
      length: 'Half Day Workshop',
      detailsUrl: '/workshops/performances-in-angular',
      type: 'workshop',
      why: ``,
      who: ``,
      agenda: [
        '',
        ''
      ],
      requirements: [
        'A prior programming experience, we will not be teaching loops',
        'A well equiped computer with admin privileges',
        'A modern browser (Having nightly build installed would also help)',
        'An IDE or a good code editor like Atom.io, Sublime or Vim'
      ]
    },
    {
      topic: 'JavaScript in Depth',
      date: 'On demand',
      image: 'img/workshops/JS.png',
      length: '2 Days Bootcamp',
      detailsUrl: '/workshops/javascript-in-depth',
      type: 'bootcamp',
      why: ``,
      who: ``,
      agenda: [
        '',
        ''
      ],
      requirements: [
        'A prior programming experience, we will not be teaching loops',
        'A well equiped computer with admin privileges',
        'A modern browser (Having nightly build installed would also help)',
        'An IDE or a good code editor like Atom.io, Sublime or Vim'
      ]
    },
    {
      topic: 'Testing in Angular',
      date: 'On demand',
      image: 'img/workshops/angularjs.png',
      length: 'Half Day Workshop',
      detailsUrl: '/workshops/testing-in-angular',
      type: 'workshop',
      why: ``,
      who: ``,
      agenda: [
        '',
        ''
      ],
      requirements: [
        'A prior programming experience, we will not be teaching loops',
        'A well equiped computer with admin privileges',
        'A modern browser (Having nightly build installed would also help)',
        'An IDE or a good code editor like Atom.io, Sublime or Vim'
      ]
    },
    {
      topic: 'Asynchronous Programming in JavaScript',
      date: 'On demand',
      image: 'img/workshops/JS.png',
      length: 'Half Day Workshop',
      detailsUrl: '/workshops/asynchronous-programming-in-javascript',
      type: 'workshop',
      why: `JavaScript is a single threaded language and function are first-class citizen in it. The later is used to manage asynchronous processes
      in JavaScript by using callbacks. The language has evolved over the time and become more mature at managing asynchronous processes.
      During this workshop you will learn how to use different techniques from callbacks to async/await including promises`,
      who: `Developers with experience building JavaScript Applications.`,
      agenda: [
        'Managing asynchronous processes using callbacks',
        'Managing asynchronous processes using Promise',
        'Introduction to  Iterators and Generators',
        'Managing asynchronous processes using async/await'
      ],
      requirements: [
        'A prior programming experience, we will not be teaching loops',
        'A well equiped computer with admin privileges',
        'Having Node and Git installed',
        'A modern browser (Having nightly build installed would also help)',
        'An IDE or a good code editor like Atom.io, Sublime or Vim'
      ]
    },
    {
      topic: 'End to end testing and continuous integration',
      date: 'On demand',
      length: 'Half Day Workshop',
      detailsUrl: '/workshops/end-to-end-testing-and-continuous-integration',
      type: 'workshop',
      why: `Testing your application `,
      who: ``,
      agenda: [
        'Introduction to Protractor',
        'Hands-on: Add End to end testing to a sample application',
        'Getting started with Travis and CI',
        'Hands-on: Running our E2E tests on Travis on Git-push',
        'Hands-on: Running our E2E tests on Jenkins'
      ],
      requirements: [
        'A prior programming experience, we will not be teaching loops',
        'A well equiped computer with admin privileges',
        'Having Node and Git installed',
        'A modern browser (Having nightly build installed would also help)',
        'An IDE or a good code editor like Atom.io, Sublime or Vim'
      ]
    },
    {
      topic: 'One day with TypeScript',
      date: 'On demand',
      length: '1 Day Workshop',
      detailsUrl: '/workshops/one-day-in-typescript',
      type: 'workshop',
      blogUrl: '',
      why: `TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. If you are an AngularJS developer and part of a mid-sized team
      of 5 people working on a huge code base then you will find TypeScript really handy for managing the complexity for your application. Moreover, starting
      from Angular 2, most of the examples you will find online will be in TypeScript.`,
      who: `Developers with experience building JavaScript applications using vanilla JS, ES6 or CoffeeScript.`,
      agenda: [
        'Introduction to TypeScript',
        'TypeScript Koans by Philos',
        'Migrating a simple AngularJS application from vanilla JavaScript to TypeScript',
        'Testing made easier with TypeScript'
      ],
      requirements: [
        'A prior programming experience using vanilla JS, ES6 or CoffeeScript',
        'A well equiped computer with admin privileges',
        'Having Node and Git installed',
        'A modern browser (Having nightly build installed would also help)',
        'An IDE or a good code editor like Atom.io, Sublime or Vim'
      ]
    },
    {
      topic: 'Writing modular applications (Architecture & Design)',
      date: 'On demand',
      length: '2 Days bootcamp',
      detailsUrl: '/workshops/everything-is-a-component',
      type: 'bootcamp',
      blogUrl: '',
      why: ``,
      who: ``,
      agenda: [
        '',
        ''
      ],
      requirements: [
        'A prior programming experience, we will not be teaching loops',
        'A well equiped computer with admin privileges',
        'Having Node and Git installed',
        'A modern browser (Having nightly build installed would also help)',
        'An IDE or a good code editor like Atom.io, Sublime or Vim'
      ]
    },
    {
      topic: 'Everything is a component',
      date: 'On demand',
      length: '1 Day Workshop',
      detailsUrl: '/workshops/everything-is-a-component',
      type: 'workshop',
      blogUrl: '',
      why: `A web application can be seen as a set of components, small components that are developed independly of each other, have their own version.
      One of the main benefits of building smaller set of components is the reusability. It makes your development process much faster. Your applications
      end up being easier to maintain`,
      who: `Senior developers with experience building web or mobile applications. We will be using either Angular, React or AmpersandJS for this bootcamp
      so having some experience building applications using JavaScript is mandatory. This is an advanced hands-on session.`,
      agenda: [
        'Introduction to component-based development',
        'Refactor our sample application by using a component-based approach',
        'Developing more components as stand alone library',
        'Testing your components an a single unite',
        'Managing our components with semantic versioning',
        'Deploying our components to a private or public npm repository',
        'Reusing our components in another project',
        'Introduction to Web Components'
      ],
      requirements: [
        'Experience building JavaScript applications using frameworks like Angular, Backbone, AmpersandJS or React...',
        'Experience using Git extensively is mandatory',
        'Having Node and Git installed',
        'A well equiped computer with admin privileges',
        'A modern browser (Having nightly build installed would also help)',
        'An IDE or a good code editor like Atom.io, Sublime or Vim'
      ]
    }
  ],
  partners : [
    {
      name: 'De Persgroep',
      logo: 'img/partners/grey/de-persgroep_g.png'
    },
    {
      name: 'Volt',
      logo: 'img/partners/grey/volt_g.png'
    },
    {
      name: 'KBC',
      logo: 'img/partners/grey/kbc_g.png'
    },
    {
      name: 'TekSystems',
      logo: 'img/partners/grey/teksystems_g.png'
    },
    {
      name: 'Wemanity',
      logo: 'img/partners/grey/wemanity_g.png'
    },
    {
      name: 'Bizboard',
      logo: 'img/partners/grey/bizboard_g.png'
    }
  ],
  testimonials : [
    {
      author: 'Juan Sanchez',
      company: {
        name: 'Assisto',
        website: 'https://assis.to'
      },
      role: 'Web Developer',
      testimonial: "A passionate team and a high value training. Philos' workshop was amazing. It gave me a deep understanding of the framework and the JS concepts related to it."
    },
    {
      author: 'Maarten Cautreels',
      company: {
        name: 'De Persgroep',
        website: 'http://www.persgroep.be/en/'
      },
      role: 'Lead Software Engineer',
      testimonial: 'Philos is the perfect way to get the most of JavaScript and AngularJS. Workshops were always interactive and based on our current projects  which made them very valuable for us.'
    }
  ]
};

export default philos;
