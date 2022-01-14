export default class GetArticleById {
  constructor(economistScraperService) {
    this.economistScraperService = economistScraperService;
  }

  async execute(id) {
   const article = await this.economistScraperService.getById(id);
   return this.economistScraperService.getArticleFromUrl(article.url);
  }
}
