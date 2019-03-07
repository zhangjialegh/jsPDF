var pdf = require("./dev-template-pdf");

(function () {
  for (var key in pdf) {
      if (pdf.hasOwnProperty(key)) {
          exports[key] = pdf[key];
      }
  }
})();