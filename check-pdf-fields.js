const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

(async () => {
  const pdfBytes = fs.readFileSync(
    "./public/referal form Canadian heart care.pdf"
  );
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const form = pdfDoc.getForm();
  const fields = form.getFields();

  console.log("=== TEXT FIELDS (ordered by Y position - top to bottom) ===");
  const textFields = fields
    .filter((f) => f.constructor.name === "PDFTextField")
    .map((field) => {
      const name = field.getName();
      const widget = field.acroField.getWidgets()[0];
      const rect = widget.getRectangle();
      return { name, y: rect.y, x: rect.x };
    })
    .sort((a, b) => b.y - a.y); // Sort by Y position (top to bottom)

  textFields.forEach((field, idx) => {
    console.log(
      `${idx + 1}. ${field.name} - Y: ${field.y.toFixed(
        0
      )}, X: ${field.x.toFixed(0)}`
    );
  });

  console.log("\n=== CHECKBOXES (ordered by Y position - top to bottom) ===");
  const checkboxes = fields
    .filter((f) => f.constructor.name === "PDFCheckBox")
    .map((field) => {
      const name = field.getName();
      const widget = field.acroField.getWidgets()[0];
      const rect = widget.getRectangle();
      return { name, y: rect.y, x: rect.x };
    })
    .sort((a, b) => b.y - a.y);

  checkboxes.forEach((field, idx) => {
    console.log(
      `${idx + 1}. ${field.name} - Y: ${field.y.toFixed(
        0
      )}, X: ${field.x.toFixed(0)}`
    );
  });
})();
