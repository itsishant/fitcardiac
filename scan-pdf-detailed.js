const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

(async () => {
  const pdfBytes = fs.readFileSync(
    "./public/referal form Canadian heart care.pdf"
  );
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const form = pdfDoc.getForm();
  const fields = form.getFields();

  console.log("=== ALL PDF FIELDS - DETAILED SCAN ===\n");

  const textFields = [];
  const checkboxFields = [];

  fields.forEach((field) => {
    const name = field.getName();
    const type = field.constructor.name;

    try {
      const widget = field.acroField.getWidgets()[0];
      const rect = widget.getRectangle();

      if (type === "PDFTextField") {
        textFields.push({
          name,
          type,
          x: rect.x.toFixed(0),
          y: rect.y.toFixed(0),
          width: rect.width.toFixed(0),
          height: rect.height.toFixed(0),
        });
      } else if (type === "PDFCheckBox") {
        checkboxFields.push({
          name,
          type,
          x: rect.x.toFixed(0),
          y: rect.y.toFixed(0),
        });
      }
    } catch (e) {
      console.log(`Error reading ${name}: ${e.message}`);
    }
  });

  console.log(
    "=== TEXT INPUT FIELDS (sorted by Y position - top to bottom) ===\n"
  );
  textFields
    .sort((a, b) => b.y - a.y)
    .forEach((field, idx) => {
      console.log(`${idx + 1}. ${field.name}`);
      console.log(`   Position: X=${field.x}, Y=${field.y}`);
      console.log(`   Size: Width=${field.width}, Height=${field.height}`);
      console.log("");
    });

  console.log(
    "\n=== CHECKBOX FIELDS (sorted by Y position - top to bottom) ===\n"
  );
  checkboxFields
    .sort((a, b) => b.y - a.y)
    .forEach((field, idx) => {
      console.log(`${idx + 1}. ${field.name} - X=${field.x}, Y=${field.y}`);
    });
})();
