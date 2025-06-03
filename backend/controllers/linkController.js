exports.handleLinkSubmit = (req, res) => {
  const { url } = req.body;
  res.json({ success: true, message: `Link received: ${url}` });
};
