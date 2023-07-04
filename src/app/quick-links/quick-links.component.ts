import { Component, OnInit } from '@angular/core';
import { SearchEngine } from '../models/search_engine';
// import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css'],
})
export class QuickLinksComponent implements OnInit {
  categories: Array<string> = [];
  languages: Array<SearchEngine> = [];
  frameworks: Array<SearchEngine> = [];
  competitive: Array<SearchEngine> = [];
  others: Array<SearchEngine> = [];

  Quicklinks : any = {};
  
  object = Object;

  constructor() {
    this.categories.push('Languages');
    this.categories.push('Frameworkds');
    this.categories.push('Competitive Coding');
    this.categories.push('Others');

    this.languages.push(
      new SearchEngine(
        'Python',
        '../../assets/quicklinks/python.png',
        'https://docs.python.org/3/'
      )
    );
    this.languages.push(
      new SearchEngine(
        'Real Python',
        '../../assets/quicklinks/realpython.png',
        'https://www.realpython.com/'
      )
    );
    this.languages.push(
      new SearchEngine(
        'Dart',
        '../../assets/quicklinks/dart.png',
        'https://www.dart.dev/guides/'
      )
    );
    this.languages.push(
      new SearchEngine(
        'WebDevelopment',
        '../../assets/quicklinks/w3schools.png',
        'https://www.w3schools.com/'
      )
    );
    this.languages.push(
      new SearchEngine(
        'My Sql',
        '../../assets/quicklinks/mysql.png',
        'https://www.mysqltutorial.org/'
      )
    );
    this.languages.push(
      new SearchEngine(
        'Sql Server',
        '../../assets/quicklinks/sqlserver.png',
        'https://www.sqlservertutorial.net/'
      )
    );

    this.frameworks.push(
      new SearchEngine(
        'Flutter',
        '../../assets/quicklinks/flutter.png',
        'https://docs.flutter.dev'
      )
    );
    this.frameworks.push(
      new SearchEngine(
        'FlutterFire',
        '../../assets/quicklinks/flutterfire.png',
        'https://firebase.flutter.dev/'
      )
    );
    this.frameworks.push(
      new SearchEngine(
        'React',
        '../../assets/quicklinks/react.png',
        'https://www.react.dev/learn'
      )
    );
    this.frameworks.push(
      new SearchEngine(
        'Angular',
        '../../assets/quicklinks/angular.png',
        'https://www.angular.io/docs'
      )
    );
    this.frameworks.push(
      new SearchEngine(
        'Playwright',
        '../../assets/quicklinks/playwright.png',
        'https://playwright.dev/docs/intro'
      )
    );

    this.competitive.push(
      new SearchEngine(
        'Codeforces',
        '../../assets/quicklinks/codeforces.webp',
        'https://www.codeforces.com/'
      )
    );
    this.competitive.push(
      new SearchEngine(
        'Code Chef',
        '../../assets/quicklinks/codechef.png',
        'https://www.codechef.com/'
      )
    );
    this.competitive.push(
      new SearchEngine(
        'LeetCode',
        '../../assets/quicklinks/leetcode.png',
        'https://www.leetcode.com/explore'
      )
    );
    this.competitive.push(
      new SearchEngine(
        'Coding Ninjas',
        '../../assets/quicklinks/codingninjas.png',
        'https://www.codingninjas.com/'
      )
    );

    this.others.push(
      new SearchEngine(
        'Geeks for Geeks',
        '../../assets/quicklinks/geeksforgeeks.png',
        'https://www.geeksforgeeks.org/'
      )
    );
    this.others.push(
      new SearchEngine(
        'TutorialsPoint',
        '../../assets/quicklinks/tutorialspoint.png/',
        'https://www.tutorialspoint.com/'
      )
    );

    this.Quicklinks["Languages"]=this.languages;
    this.Quicklinks["Frameworks"]=this.frameworks;
    this.Quicklinks["Competitive Coding"]=this.competitive;
    this.Quicklinks["Others"]=this.others;
  }
  ngOnInit(): void { }

  navigateQuicklink(selected:SearchEngine){
    window.open(selected.url,"_self");
  }
}
