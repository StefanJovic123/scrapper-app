export default class GetArticleFromUrl {
  constructor(economistScraperService) {
    this.economistScraperService = economistScraperService;
  }

  async execute(url) {
    return this.economistScraperService.getArticleFromUrl(url);
  }
}
