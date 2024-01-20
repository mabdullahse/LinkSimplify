const shortId = require("shortid");

const URL = require("../models/url");

async function hanleGenerateNewShortURL(req, res) {
  const body = req.body;

  if (!body) return res.status(400).json({ error: "URL is missing" });
  const shortID = shortId();

  console.log(body);
  await URL.create({
    shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ url: shortID });
}

async function handleGetShortURL(req, res) {
  const urlid = req.params.urlid;

  const urlObj = await URL.findOneAndUpdate(
    {
      shortID: urlid,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );

  return res.redirect(urlObj.redirectURL);
  return res.status(200).json({ url: urlObj.redirectURL });
}

async function handleGetAnalyticsURL(req, res) {
  const shortID = req.params.shorturlid;

  const urlData = await URL.findOne({ shortID });

  return res.status(200).json({
    totalClick: urlData.visitHistory.length,
    visitHistory: urlData.visitHistory,
  });
}

module.exports = {
  hanleGenerateNewShortURL,
  handleGetShortURL,
  handleGetAnalyticsURL,
};
