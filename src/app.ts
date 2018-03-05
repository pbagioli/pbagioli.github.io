import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Baggy Home';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
   //   { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Baggyish' },
      { route: 'froggy',         name: 'froggy',        moduleId: './froggy/froggy',        nav: true, title: 'Flex-Box' },
      { route: 'css',         name: 'css',        moduleId: './css/css',        nav: true, title: 'Css-Positioning' }
 
    ]);

    this.router = router;
  }
}
