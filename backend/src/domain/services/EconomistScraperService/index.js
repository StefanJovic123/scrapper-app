class EconomistScraperService {
  constructor(page) {
    this.page = page;
  }

  /**
   * Method opens article on URL, scrapes data and returns it back in json format
   * @param {string} url 
   */
  async getArticleFromUrl(url) {
    let article = {
      paragraphs: [],
      subtitle: null,
      title: null,
      imageUrl: null
    }

    await this.page.goto(url, {
      waitUntil: 'networkidle2',
    });
    
    const articleHeadlines = await this.page.$$('.article__headline');
    if (articleHeadlines.length) {
      article.title = await this.page.evaluate(e => e.textContent, articleHeadlines[0]);
    }
    
    const articleDescriptions = await this.page.$$('.article__description');
    if (articleDescriptions.length) {
      article.subtitle = await this.page.evaluate(e => e.textContent, articleDescriptions[0]);
    }

    const articleLeadImagesContainers = await this.page.$$('.article__lead-image');

    if (articleLeadImagesContainers.length) {
      const articleLeadImages = await articleLeadImagesContainers[0].$$('img');
      if (articleLeadImages.length) {
        article.imageUrl = await this.getImageSrc(articleLeadImages[0]);
      }
    }

    const articleParagraphs = await this.page.$$('.article__body-text');
    for (let articleParagraph of articleParagraphs) {
      const articleParagraphContent = await this.page.evaluate(e => e.textContent, articleParagraph);
      article.paragraphs.push(articleParagraphContent);
    }

    return article;
  }

  /**
   * Method scrapes and returns all articles on economist home page in json format
   */
  async getAllArticles() {
    /**
     * Articles array item
     * { title: string, paragraphs?: string[], url: string, imageUrl?: string }
     */
    const articles = [];
    
    // TODO: move economist url to constant
    await this.page.goto('https://economist.com', {
      waitUntil: 'networkidle2',
    });

    await this.acceptAllCookiesIfPresent(this.page);
    // await this.hideSubscribeBannerIfPresent(page);

    // Section HTML elements (<section>) hold all potential articles
    const allSections = await this.page.$$('section');

    for (let section of allSections){
      const h3Titles = await this.getTitles(section, 'h3')

      for (let h3Title of h3Titles) {
        const h3TitleContent = await this.page.evaluate(e => e.textContent, h3Title);

        let h3TitleClassNameObject = await h3Title.getProperty("className")
        let classNameString = await h3TitleClassNameObject.jsonValue();
        let isHeadlineTitle = classNameString.includes("ds-section-headline")

        // get paragraphs only for non headline titles
        if (!isHeadlineTitle) {
          let article = {
            title: h3TitleContent,
            paragraphs: [],
            url: null,
            imageUrl: null
          }

          // get full article with title and paragraphs
          const parentNode = await h3Title.getProperty('parentNode'); // Element Parent
          const urls = await h3Title.$$('a');
          if (urls.length) {
            article.url = await this.getHrefFromLinkElement(urls[0]);
          }

          const articlePargraphs = await parentNode.$$('p');
          for (let articleParagraph of articlePargraphs) {
            const paragraphContent = await this.page.evaluate(e => e.textContent, articleParagraph);
            article.paragraphs.push(paragraphContent);
          }

          // Get article image
          const articleImages = await parentNode.$$('img');
          if (articleImages.length) {
            article.imageUrl = await this.getImageSrc(articleImages[0]);
          }

          // Add new article
          articles.push(article);
        }
      }
    }

    return articles;
  }

  /**
   * page object documentation: https://pptr.dev/#?product=Puppeteer&version=v13.0.1&show=api-class-page
   * @param {Page} page - page defintion got from pupeteer
   */
  async acceptAllCookiesIfPresent(page) {
    try {
      await this.page.click('#_evidon-banner-acceptbutton');
    } catch (e) {
      console.log('ERROR: acceptAllCookiesIfPresent', e);
    }
  }

  /**
   * page object documentation: https://pptr.dev/#?product=Puppeteer&version=v13.0.1&show=api-class-page
   * @param {Page} page - page defintion got from pupeteer
   */
   async hideSubscribeBannerIfPresent(page) {
    try {
      await this.page.click('button.ds-control-expand');
    } catch (e) {
      console.log('ERROR: hideSubscribeBannerIfPresent', e);
    }
  }

  /**
   * page object documentation: https://pptr.dev/#?product=Puppeteer&version=v13.0.1&show=api-class-page
   * @param {Page} page - page defintion got from pupeteer
   * @param {TitleType} titleType - possible values are `h1`, 'h2', 'h3', 'h4' 
   */
  async getTitles(element, titleType) {
    try {
      const titles = await element.$$(titleType);

      return titles;
    } catch (e) {
      console.log('ERROR: getTitles', e);
      return null;
    }
  }

  /**
   * Returns value of href property from <a> element
   * @param {*} linkElement 
   * @returns
   */
  async getHrefFromLinkElement(linkElement) {
    const hrefPropertyObject = await linkElement.getProperty('href');
    const hrefStringValue = await hrefPropertyObject.jsonValue();

    return hrefStringValue;
  }

  /**
   * Returns value of src property from <img> element
   * @param {*} imageElement 
   * @returns
   */
  async getImageSrc(imageElement) {
    const srcPropertyObject = await imageElement.getProperty('src');
    const srcStringValue = await srcPropertyObject.jsonValue();

    return srcStringValue;
  }
}

export default EconomistScraperService;
