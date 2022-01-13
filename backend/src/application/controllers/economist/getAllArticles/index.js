export default ({ GetAllArticles }) => async (_req, res, next) => {
  try {
    const result = await GetAllArticles.execute();

    return res.sendRes(result);
  } catch (error) {
    next(error);
  }
}
