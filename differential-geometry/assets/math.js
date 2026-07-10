// Shared MathJax loader for the QFT teaching workspace.
// Include with:  <script src="../assets/math.js"></script>  (before </body>).
// Then write inline math as \( ... \) and display math as \[ ... \].
// Dollar-sign delimiters ($...$, $$...$$) are intentionally NOT enabled,
// to avoid accidentally typesetting stray currency/prose symbols.
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    tags: "none"
  },
  options: {
    skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"]
  }
};
(function () {
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
  s.async = true;
  s.id = "MathJax-script";
  document.head.appendChild(s);
})();
