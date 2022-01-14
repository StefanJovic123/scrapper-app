import cron from 'node-cron';

const setupCronJobs = (services) => {
  cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
    services.EconomistScraperService.scrapeAllArticles();
  });
}

export default setupCronJobs;