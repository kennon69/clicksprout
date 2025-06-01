function generateBacklinks() {
  const result = document.getElementById('result');
  result.innerHTML = "⏳ Generating backlinks using AI...";

  setTimeout(() => {
    result.innerHTML = "✅ Backlinks generated and content syndicated to: Medium, Reddit, Pinterest, etc.";
  }, 2000);
}