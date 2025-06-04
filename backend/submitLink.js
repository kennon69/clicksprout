// Simulate backend logic to handle URL submissions
module.exports = function submitLink(url) {
  console.log(`Received URL to promote: ${url}`);
  return { success: true, message: "URL submitted successfully!" };
};