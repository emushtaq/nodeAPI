/**
 * This is not a protected route. Will return a random number.
 * @param req
 * @param res
 * @returns {*}
 */
function getRandomizedNumber(req, res) {
  return res.json({
    num: Math.random() * 100
  });
}

export default { getRandomizedNumber };
