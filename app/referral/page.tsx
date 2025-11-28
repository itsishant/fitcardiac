"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PDFDocument } from "pdf-lib";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FileText,
  Download,
  Send,
  CheckCircle,
  MapPin,
  Heart,
  Activity,
  AlertCircle,
} from "lucide-react";

export default function ReferralPage() {
  const [formData, setFormData] = useState({
    // Locations
    locationBramptonSouth: false,
    locationBramptonNorth: false,
    locationMississauga: false,
    locationMilton: false,
    locationWaterloo: false,
    locationBowmanville: false,
    locationNorthYork: false,
    locationBurlington: false,
    locationOakville: false,

    // Patient Information
    patientFirstName: "",
    patientLastName: "",
    patientAddress: "",
    patientPhone: "",
    patientHealthCard: "",
    patientDOB: "",

    // Doctor Information
    physicianName: "",
    physicianAddress: "",
    physicianBillingNo: "",
    physicianPhone: "",
    physicianFax: "",
    physicianEmail: "",
    physicianSignature: "",

    // Cardiology
    cardiologyConsultation: false,
    echocardiography: false,
    exerciseStressTest: false,
    treadmillStressEcho: false,
    consultationAbnormal: false,
    restingECG: false,
    holterMonitor72: false,
    ambulatoryBP: false,
    spirometry: false,
    annualCheckup: false,

    // Nuclear Cardiology (Waterloo)
    myocardialPerfusionExercise: false,
    myocardialPerfusionPersantine: false,
    myocardialPerfusionRest: false,
    viabilityStudy: false,
    ventricularFunctionRest: false,

    // Reasons for Test
    chestPain: false,
    palpitations: false,
    sob: false,
    syncopePresyncope: false,
    abnormalECG: false,
    dizzinessFatigue: false,
    pedalEdema: false,
    hypertension: false,
    obesity: false,
    miStroke: false,
    highRiskFactors: false,
    otherReason: false,

    // Additional Comments
    additionalComments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checkbox.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Generate the filled PDF
      const pdfBase64 = await generateFilledPDF();

      // Download the PDF for the user
      if (pdfBase64) {
        const pdfBytes = Uint8Array.from(atob(pdfBase64), (c) =>
          c.charCodeAt(0)
        );
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        const timestamp = new Date().toISOString().split("T")[0];
        const patientName = `${formData.patientFirstName || "Patient"}_${
          formData.patientLastName || "Referral"
        }`.replace(/\s+/g, "_");
        link.download = `Referral_${patientName}_${timestamp}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }

      // Send the email with PDF attachment
      const response = await fetch("/api/referral", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pdfAttachment: pdfBase64, // Include PDF as base64
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Reset form (optional, maybe better to keep for reference or print? Let's reset for now)
        // setFormData({ ...initialState });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting referral:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateFilledPDF = async (): Promise<string | null> => {
    try {
      // Fetch the PDF template
      const existingPdfBytes = await fetch(
        "/referal form Canadian heart care.pdf"
      ).then((res) => res.arrayBuffer());

      // Load the PDF
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Get the form
      const form = pdfDoc.getForm();

      // Map form data to PDF field names based on actual positions from scan
      // Order: Top to Bottom, Left to Right
      const textFields = {
        // Patient Information (Left side)
        text_3dunk: formData.patientFirstName, // Y=648 - First Name
        text_4nwqi: formData.patientLastName, // Y=631 - Last Name
        text_7enbf: formData.patientAddress, // Y=618 - Address
        text_8idof: formData.patientPhone, // Y=602 - Phone
        text_9qor: formData.patientHealthCard, // Y=587 - Health Card
        text_10ethr: formData.patientDOB, // Y=571 - DOB

        // Doctor Information (Right side)
        text_11ewrq: formData.physicianName, // Y=647 - Name
        text_12lsqe: formData.physicianAddress, // Y=633 - Address
        text_13xshm: formData.physicianBillingNo, // Y=617 - Billing No
        text_14frj: formData.physicianPhone, // Y=602 - Phone
        text_15mpvm: formData.physicianFax, // Y=583 - Fax
        text_38mliz: formData.physicianEmail, // Y=565 - Email (NEW FIELD)
      };

      // Fill text fields
      Object.entries(textFields).forEach(([fieldName, value]) => {
        if (value) {
          try {
            const field = form.getTextField(fieldName);
            field.setText(String(value));
            console.log(`✓ Filled ${fieldName}: ${value}`);
          } catch (e) {
            console.error(`✗ Could not fill ${fieldName}:`, e);
          }
        }
      });

      // Signature - use text_20hlwq
      if (formData.physicianSignature) {
        try {
          const field = form.getTextField("text_20hlwq");
          field.setText(formData.physicianSignature);
          console.log(
            `✓ Filled signature in text_20hlwq: ${formData.physicianSignature}`
          );
        } catch (e) {
          console.error("✗ Could not fill signature:", e);
        }
      }

      // Additional comments - use text_36zwcw (large field for comments)
      if (formData.additionalComments) {
        try {
          const field = form.getTextField("text_36zwcw");
          field.setText(formData.additionalComments);
          console.log(`✓ Filled additional comments in text_36zwcw`);
        } catch (e) {
          console.log(
            "Could not fill comments in text_36zwcw, trying text_37zabz..."
          );
          try {
            const field = form.getTextField("text_37zabz");
            field.setText(formData.additionalComments);
            console.log(`✓ Filled additional comments in text_37zabz`);
          } catch (e2) {
            console.error("✗ Could not fill additional comments:", e2);
          }
        }
      }

      // Map checkboxes - these need to match the order in your PDF
      const checkboxMappings = [
        { field: "checkbox_13teok", value: formData.cardiologyConsultation },
        { field: "checkbox_14jwkl", value: formData.echocardiography },
        { field: "checkbox_15icsi", value: formData.exerciseStressTest },
        { field: "checkbox_16sumr", value: formData.treadmillStressEcho },
        { field: "checkbox_17rgmv", value: formData.consultationAbnormal },
        { field: "checkbox_18pwjb", value: formData.restingECG },
        { field: "checkbox_19hkpk", value: formData.holterMonitor72 },
        { field: "checkbox_20vnhf", value: formData.ambulatoryBP },
        { field: "checkbox_21kunq", value: formData.spirometry },
        { field: "checkbox_22ggie", value: formData.annualCheckup },
        { field: "checkbox_23otib", value: formData.chestPain },
        { field: "checkbox_24gnjo", value: formData.palpitations },
        { field: "checkbox_25ftco", value: formData.sob },
        { field: "checkbox_26jtlc", value: formData.syncopePresyncope },
        { field: "checkbox_27iwml", value: formData.abnormalECG },
        { field: "checkbox_28ip", value: formData.dizzinessFatigue },
        { field: "checkbox_29puul", value: formData.pedalEdema },
        { field: "checkbox_30vmoe", value: formData.hypertension },
        { field: "checkbox_31mmze", value: formData.obesity },
        { field: "checkbox_32ltuv", value: formData.miStroke },
        { field: "checkbox_33gxxz", value: formData.highRiskFactors },
        { field: "checkbox_34epuh", value: formData.otherReason },
      ];

      // Fill checkboxes
      checkboxMappings.forEach(({ field, value }) => {
        if (value) {
          try {
            const checkbox = form.getCheckBox(field);
            checkbox.check();
            console.log(`✓ Checked ${field}`);
          } catch (e) {
            console.error(`✗ Could not check ${field}:`, e);
          }
        }
      });

      // Additional comments - find any remaining text fields
      if (formData.additionalComments) {
        // Get all text fields to find unused ones
        const allFields = form.getFields();
        const allTextFields = allFields.filter(
          (f) => f.constructor.name === "PDFTextField"
        );

        // Try to find and fill the comments field
        let commentsFilled = false;
        for (const field of allTextFields) {
          const fieldName = field.getName();
          // Skip already filled fields
          if (
            [
              "text_3dunk",
              "text_4nwqi",
              "text_7enbf",
              "text_8idof",
              "text_9qor",
              "text_10ethr",
              "text_11ewrq",
              "text_12lsqe",
              "text_13xshm",
              "text_14frj",
              "text_15mpvm",
              "text_38mliz",
              "text_20hlwq",
              "text_36zwcw",
              "text_37zabz",
            ].includes(fieldName)
          ) {
            continue;
          }

          try {
            const textField = form.getTextField(fieldName);
            textField.setText(formData.additionalComments);
            console.log(`✓ Filled comments in ${fieldName}`);
            commentsFilled = true;
            break;
          } catch (e) {
            // Try next field
          }
        }

        if (!commentsFilled) {
          console.log("⚠ Could not find a field for additional comments");
        }
      }

      // Save the PDF with editable fields
      const pdfBytes = await pdfDoc.save();

      // Convert to base64 for sending to API
      const base64 = btoa(
        Array.from(pdfBytes)
          .map((b) => String.fromCharCode(b))
          .join("")
      );

      console.log("✓ PDF generated successfully with filled data!");
      return base64;
    } catch (error) {
      console.error("Error filling PDF:", error);
      alert(
        "Could not generate PDF. The form will still be submitted via email."
      );
      return null;
    }
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-white border-b">
          <div className="container mx-auto text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-gray mb-4">
              Physician <span className="text-primary-teal">Referral Form</span>
            </h1>
            <p className="text-lg text-secondary-gray-light mb-6">
              Submit referrals online securely or download the PDF version.
            </p>
            <a
              href="/referal form Canadian heart care.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-teal border-2 border-primary-teal px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-green-light transition-all"
            >
              <Download className="w-5 h-5" />
              Download PDF Form
            </a>
          </div>
        </section>

        {/* Referral Form */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Patient Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="bg-secondary-gray text-white px-6 py-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    <h2 className="text-xl font-bold uppercase tracking-wide">
                      Patient Information
                    </h2>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Patient First Name
                      </label>
                      <input
                        type="text"
                        name="patientFirstName"
                        value={formData.patientFirstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Patient Last Name
                      </label>
                      <input
                        type="text"
                        name="patientLastName"
                        value={formData.patientLastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Patient Address
                      </label>
                      <input
                        type="text"
                        name="patientAddress"
                        value={formData.patientAddress}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Patient Phone No
                      </label>
                      <input
                        type="tel"
                        name="patientPhone"
                        value={formData.patientPhone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Health Card No
                      </label>
                      <input
                        type="text"
                        name="patientHealthCard"
                        value={formData.patientHealthCard}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="patientDOB"
                        value={formData.patientDOB}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Doctor Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="bg-secondary-gray text-white px-6 py-4 flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    <h2 className="text-xl font-bold uppercase tracking-wide">
                      Doctor Information
                    </h2>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Doctor Name
                      </label>
                      <input
                        type="text"
                        name="physicianName"
                        value={formData.physicianName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Doctor Address
                      </label>
                      <input
                        type="text"
                        name="physicianAddress"
                        value={formData.physicianAddress}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Billing No
                      </label>
                      <input
                        type="text"
                        name="physicianBillingNo"
                        value={formData.physicianBillingNo}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Doctor Contact No
                      </label>
                      <input
                        type="tel"
                        name="physicianPhone"
                        value={formData.physicianPhone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Doc Fax No
                      </label>
                      <input
                        type="tel"
                        name="physicianFax"
                        value={formData.physicianFax}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="physicianEmail"
                        value={formData.physicianEmail}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Signature
                      </label>
                      <input
                        type="text"
                        name="physicianSignature"
                        value={formData.physicianSignature}
                        onChange={handleChange}
                        placeholder="Type name to sign"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none bg-gray-50 italic"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Cardiology */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-secondary-gray text-white px-6 py-4 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  <h2 className="text-xl font-bold uppercase tracking-wide">
                    Cardiology
                  </h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    {
                      name: "cardiologyConsultation",
                      label: "Cardiology Consultation",
                    },
                    { name: "echocardiography", label: "Echocardiography" },
                    {
                      name: "exerciseStressTest",
                      label: "Exercise Stress Test",
                    },
                    {
                      name: "treadmillStressEcho",
                      label: "Treadmill Stress Echo",
                    },
                    {
                      name: "consultationAbnormal",
                      label: "Consultation, if test is Abnormal",
                    },
                    { name: "restingECG", label: "Resting ECG" },
                    {
                      name: "holterMonitor72",
                      label: "Holter Monitor 24/48/72 hrs",
                    },
                    {
                      name: "ambulatoryBP",
                      label: "Ambulatory Blood Pressure Monitor",
                    },
                    { name: "spirometry", label: "Spirometry" },
                    { name: "annualCheckup", label: "Annual Checkup Required" },
                  ].map((item) => (
                    <label
                      key={item.name}
                      className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                    >
                      <input
                        type="checkbox"
                        name={item.name}
                        checked={
                          formData[
                            item.name as keyof typeof formData
                          ] as boolean
                        }
                        onChange={handleChange}
                        className="w-5 h-5 text-primary-teal rounded focus:ring-primary-teal"
                      />
                      <span className="text-secondary-gray font-medium">
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Nuclear Cardiology */}

              {/* Reasons for Test */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-secondary-gray text-white px-6 py-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  <h2 className="text-xl font-bold uppercase tracking-wide">
                    Reasons for Test
                  </h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    { name: "chestPain", label: "Chest Pain" },
                    { name: "palpitations", label: "Palpitations" },
                    { name: "sob", label: "SOB" },
                    {
                      name: "syncopePresyncope",
                      label: "Syncope / Presyncope",
                    },
                    { name: "abnormalECG", label: "Abnormal ECG" },
                    {
                      name: "dizzinessFatigue",
                      label: "Dizziness, Fatigue of Unknown Origin",
                    },
                    {
                      name: "pedalEdema",
                      label: "Pedal Edema / Generalized Edema",
                    },
                    { name: "hypertension", label: "Hypertension" },
                    { name: "obesity", label: "Obesity (BMI>29)" },
                    { name: "miStroke", label: "Known case of MI, Stroke" },
                    {
                      name: "highRiskFactors",
                      label:
                        "High Cardiac Risk Factors (Age, Ethnicity, Smoking, Dyslipidemia)",
                    },
                    { name: "otherReason", label: "Other" },
                  ].map((item) => (
                    <label
                      key={item.name}
                      className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                    >
                      <input
                        type="checkbox"
                        name={item.name}
                        checked={
                          formData[
                            item.name as keyof typeof formData
                          ] as boolean
                        }
                        onChange={handleChange}
                        className="w-5 h-5 text-primary-teal rounded focus:ring-primary-teal"
                      />
                      <span className="text-secondary-gray font-medium">
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Additional Comments */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-secondary-gray text-white px-6 py-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  <h2 className="text-xl font-bold uppercase tracking-wide">
                    Additional Comments
                  </h2>
                </div>
                <div className="p-6">
                  <textarea
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none resize-none bg-gray-50"
                    placeholder="Enter any additional comments here..."
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <div className="flex flex-col items-center gap-4 pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full max-w-md px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wider transition-all duration-200 shadow-lg flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Referral
                    </>
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md p-4 bg-green-100 text-green-700 rounded-lg flex items-center justify-center gap-2 text-center"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Referral submitted successfully!</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md p-4 bg-red-100 text-red-700 rounded-lg text-center"
                  >
                    Error submitting referral. Please try again or fax to (905)
                    248-3183.
                  </motion.div>
                )}

                <p className="text-sm text-gray-500 text-center mt-4">
                  48 hrs notice is required for any Cancellations or Rebooking
                  <br />
                  <span className="font-bold text-red-600">
                    Fax: (905) 248-3183
                  </span>
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
