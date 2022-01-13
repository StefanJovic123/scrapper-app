export default ({ GetArticleFromUrl }) => async (req, res, next) => {
  try {
    const { body } = req;
    const result = await GetArticleFromUrl.execute(body.url);

    return res.sendRes(result);
  } catch (error) {
    next(error);
  }
}
