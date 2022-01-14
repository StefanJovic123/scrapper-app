export default ({ GetArticleById }) => async (req, res, next) => {
  try {
    const { params } = req;
    const result = await GetArticleById.execute(params.id);

    return res.sendRes(result);
  } catch (error) {
    next(error);
  }
}
