import { factory, primaryKey } from '@mswjs/data';

export const mockUsers = [
  {
    id: 1,
    firstName: 'Stefan',
    lastName: 'Jovic',
    password: '$2b$10$lhqIIZN.418fQfZnD9u6WODelRUUuIuCKEM/.nGpRBLEN1n1kBevu',
    email: 'stefan@gmail.com'
  }
];

export const mockArticle = {
  id: 1,
  imageUrl:
    'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20220115_USP002_0.jpg',
  title: 'As violent crime leaps, liberal cities rethink cutting police budgets',
  subtitle: '',
  paragraphs: [
    'United States^^^The tricky politics of criminal-justice reform at a time of rising fears'
  ],
  url: 'https://www.economist.com/united-states/2022/01/15/as-violent-crime-leaps-liberal-cities-rethink-cutting-police-budgets'
};

export const mockArticles = [
  {
    id: 1,
    imageUrl:
      'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20220115_USP002_0.jpg',
    title: 'As violent crime leaps, liberal cities rethink cutting police budgets',
    subtitle: '',
    paragraphs:
      'United States^^^The tricky politics of criminal-justice reform at a time of rising fears',
    url: 'https://www.economist.com/united-states/2022/01/15/as-violent-crime-leaps-liberal-cities-rethink-cutting-police-budgets'
  },
  {
    id: 2,
    imageUrl:
      'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20220115_BRP002_0.jpg',
    title: 'Omicron and the logic of testing',
    subtitle: '',
    paragraphs:
      'Britain^^^Britain ponders an end to free lateral-flow tests. America is just starting',
    url: 'https://www.economist.com/britain/2022/01/15/omicron-and-the-logic-of-testing'
  },
  {
    id: 3,
    imageUrl: '',
    title: 'Lexington: Joe Biden was set up to fail',
    subtitle: '',
    paragraphs:
      'United States^^^The Democratic president is a flawed politician in an impossible job',
    url: 'https://www.economist.com/united-states/2022/01/15/joe-biden-was-set-up-to-fail'
  },
  {
    id: 4,
    imageUrl: 'https://www.economist.com/img/b/1280/720/90/media-assets/image/20220115_BLP504.jpg',
    title: 'Australia cancels Novak Djokovic’s visa—again',
    subtitle: '',
    paragraphs: 'A court ruled he could stay. The government says he should pack his bags',
    url: 'https://www.economist.com/asia/2022/01/14/australia-cancels-novak-djokovics-visa-again'
  },
  {
    id: 5,
    imageUrl:
      'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20220115_BRD000_0.jpg',
    title: 'What did you expect from Boris Johnson?',
    subtitle: '',
    paragraphs: 'The prime minister, in his own way, is Britain’s most honest politician',
    url: 'https://www.economist.com/britain/2022/01/15/what-did-you-expect-from-boris-johnson'
  },
  {
    id: 6,
    imageUrl: 'https://www.economist.com/img/b/1280/720/90/media-assets/image/20220115_WOP404.jpg',
    title: 'Why Britain needs more migrants',
    subtitle: '',
    paragraphs: 'It cannot fix its population-growth slowdown without them',
    url: 'https://www.economist.com/graphic-detail/2022/01/14/why-britain-needs-more-migrants'
  },
  {
    id: 7,
    imageUrl:
      'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20220115_ASP001_0.jpg',
    title: 'Demand for pet otters is driving a harmful trade',
    subtitle: '',
    paragraphs: 'The creatures are cute but make lousy pets',
    url: 'https://www.economist.com/asia/2022/01/13/demand-for-pet-otters-is-driving-a-harmful-trade'
  },
  {
    id: 9,
    imageUrl:
      'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/2022/01/articles/main/20220108_brd001.jpg',
    title: 'The harm Prince Andrew does to the crown',
    subtitle: '',
    paragraphs: 'Hereditary monarchy rests on consent. A sexual-assault case undermines that',
    url: 'https://www.economist.com/britain/the-harm-prince-andrew-does-to-the-crown/21807004'
  },
  {
    id: 10,
    imageUrl: 'https://www.economist.com/img/b/1280/720/90/sites/default/files/20200118_BRD000.jpg',
    title: 'Harry, Meghan and Marx',
    subtitle: '',
    paragraphs: 'Brand Sussex represents the biggest threat to the monarchy so far',
    url: 'https://www.economist.com/britain/2020/01/16/harry-meghan-and-marx'
  },
  {
    id: 11,
    imageUrl: 'https://www.economist.com/img/b/1280/720/90/media-assets/image/20211023_BLP509.jpg',
    title: 'Explainer: How does the British monarchy’s line of succession work?',
    subtitle: '',
    paragraphs:
      'Prince Charles’s ascension to the throne would seem very different from his mother’s',
    url: 'https://www.economist.com/the-economist-explains/2021/10/22/british-royal-succession-queen-elizabeth'
  },
  {
    id: 12,
    imageUrl: '',
    title: 'Prince Philip, Duke of Edinburgh, died on April 9th',
    subtitle: '',
    paragraphs: 'The husband of Queen Elizabeth II was 99',
    url: 'https://www.economist.com/obituary/2021/04/15/prince-philip-duke-of-edinburgh-died-on-april-9th'
  }
];

// Create a "db" with an user model and some defaults
export const db = factory({
  user: {
    id: primaryKey(Number),
    firstName: () => 'Stefan',
    lastName: () => 'Jovic',
    password: () => '$2b$10$lhqIIZN.418fQfZnD9u6WODelRUUuIuCKEM/.nGpRBLEN1n1kBevu',
    email: () => 'stefan@gmail.com'
  },
  article: {
    id: primaryKey(Number),
    imageUrl: () => '',
    title: () => '',
    subtitle: () => '',
    paragraphs: () => '',
    url: () => ''
  }
});

// create mock data
mockUsers.forEach((user) => db.user.create(user));
mockArticles.forEach((article) => db.article.create(article));
