export default class GetAllArticles {
  constructor(economistScraperService) {
    this.economistScraperService = economistScraperService;
  }

  async execute() {
    return this.economistScraperService.getAll();
  }
}
