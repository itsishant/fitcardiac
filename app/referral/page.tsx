"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download, Send, CheckCircle, MapPin, Heart, Activity, AlertCircle } from "lucide-react";

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
      const response = await fetch("/api/referral", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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

              {/* Locations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-secondary-gray text-white px-6 py-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <h2 className="text-xl font-bold uppercase tracking-wide">Locations</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: "locationBramptonSouth", label: "BRAMPTON SOUTH", address: "Unit # 300, 2 County Court Blvd" },
                    { name: "locationBramptonNorth", label: "BRAMPTON NORTH", address: "Unit # 4, 18 Corporation Dr" },
                    { name: "locationMississauga", label: "MISSISSAUGA", address: "Unit # 402, 2255 Dundas St W" },
                    { name: "locationMilton", label: "MILTON", address: "Unit # 109, 311 Commercial St" },
                    { name: "locationWaterloo", label: "WATERLOO", address: "Unit # 202C, 725 Bridge St" },
                    { name: "locationBowmanville", label: "BOWMANVILLE", address: "196 King St E" },
                    { name: "locationNorthYork", label: "NORTH YORK", address: "450 Wilson Ave" },
                    { name: "locationBurlington", label: "BURLINGTON", address: "3061 Walkers Line" },
                    { name: "locationOakville", label: "OAKVILLE", address: "Unit # 6, Iroquois Shore Rd" },
                  ].map((loc) => (
                    <label key={loc.name} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-200 transition-all">
                      <input
                        type="checkbox"
                        name={loc.name}
                        checked={formData[loc.name as keyof typeof formData] as boolean}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 text-primary-teal rounded focus:ring-primary-teal"
                      />
                      <div>
                        <div className="font-bold text-secondary-gray text-sm">{loc.label}</div>
                        <div className="text-xs text-gray-500">{loc.address}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </motion.div>

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
                    <h2 className="text-xl font-bold uppercase tracking-wide">Patient Information</h2>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Patient First Name</label>
                      <input type="text" name="patientFirstName" value={formData.patientFirstName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Patient Last Name</label>
                      <input type="text" name="patientLastName" value={formData.patientLastName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Patient Address</label>
                      <input type="text" name="patientAddress" value={formData.patientAddress} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Patient Phone #</label>
                      <input type="tel" name="patientPhone" value={formData.patientPhone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Health Card #</label>
                      <input type="text" name="patientHealthCard" value={formData.patientHealthCard} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth</label>
                      <input type="date" name="patientDOB" value={formData.patientDOB} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none" required />
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
                    <h2 className="text-xl font-bold uppercase tracking-wide">Doctor Information</h2>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Doctor Name</label>
                      <input type="text" name="physicianName" value={formData.physicianName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Doctor Address</label>
                      <input type="text" name="physicianAddress" value={formData.physicianAddress} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Billing No</label>
                      <input type="text" name="physicianBillingNo" value={formData.physicianBillingNo} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Doctor Tel #</label>
                      <input type="tel" name="physicianPhone" value={formData.physicianPhone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Doc Fax #</label>
                      <input type="tel" name="physicianFax" value={formData.physicianFax} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                      <input type="email" name="physicianEmail" value={formData.physicianEmail} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Signature</label>
                      <input type="text" name="physicianSignature" value={formData.physicianSignature} onChange={handleChange} placeholder="Type name to sign" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-teal focus:border-transparent outline-none bg-gray-50 italic" />
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
                  <h2 className="text-xl font-bold uppercase tracking-wide">Cardiology</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    { name: "cardiologyConsultation", label: "Cardiology Consultation" },
                    { name: "echocardiography", label: "Echocardiography" },
                    { name: "exerciseStressTest", label: "Exercise Stress Test" },
                    { name: "treadmillStressEcho", label: "Treadmill Stress Echo" },
                    { name: "consultationAbnormal", label: "Consultation, if test is Abnormal" },
                    { name: "restingECG", label: "Resting ECG" },
                    { name: "holterMonitor72", label: "Holter Monitor 72 hours" },
                    { name: "ambulatoryBP", label: "Ambulatory Blood Pressure Monitor" },
                    { name: "spirometry", label: "Spirometry" },
                    { name: "annualCheckup", label: "Annual Checkup Required" },
                  ].map((item) => (
                    <label key={item.name} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                      <input
                        type="checkbox"
                        name={item.name}
                        checked={formData[item.name as keyof typeof formData] as boolean}
                        onChange={handleChange}
                        className="w-5 h-5 text-primary-teal rounded focus:ring-primary-teal"
                      />
                      <span className="text-secondary-gray font-medium">{item.label}</span>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Nuclear Cardiology */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-secondary-gray text-white px-6 py-4 flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  <h2 className="text-xl font-bold uppercase tracking-wide">Nuclear Cardiology (Waterloo)</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-red-500 font-bold mb-4 uppercase text-sm tracking-wider">Myocardial Perfusion (Thallium)</h3>
                    <div className="space-y-3">
                      {[
                        { name: "myocardialPerfusionExercise", label: "Exercise" },
                        { name: "myocardialPerfusionPersantine", label: "Persantine" },
                        { name: "myocardialPerfusionRest", label: "Rest" },
                      ].map((item) => (
                        <label key={item.name} className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" name={item.name} checked={formData[item.name as keyof typeof formData] as boolean} onChange={handleChange} className="w-5 h-5 text-primary-teal rounded focus:ring-primary-teal" />
                          <span className="text-secondary-gray font-medium">{item.label}</span>
                        </label>
                      ))}
                      <div className="flex items-center gap-3 ml-8 mt-2">
                        <span className="text-sm text-gray-600">Viability Study (Thallium)</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-red-500 font-bold mb-4 uppercase text-sm tracking-wider">Ventricular Function (MUGA)</h3>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" name="ventricularFunctionRest" checked={formData.ventricularFunctionRest} onChange={handleChange} className="w-5 h-5 text-primary-teal rounded focus:ring-primary-teal" />
                      <span className="text-secondary-gray font-medium">Rest</span>
                    </label>
                  </div>
                </div>
              </motion.div>

              {/* Reasons for Test */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-secondary-gray text-white px-6 py-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  <h2 className="text-xl font-bold uppercase tracking-wide">Reasons for Test</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    { name: "chestPain", label: "Chest Pain" },
                    { name: "palpitations", label: "Palpitations" },
                    { name: "sob", label: "SOB" },
                    { name: "syncopePresyncope", label: "Syncope / Presyncope" },
                    { name: "abnormalECG", label: "Abnormal ECG" },
                    { name: "dizzinessFatigue", label: "Dizziness, Fatigue of Unknown Origin" },
                    { name: "pedalEdema", label: "Pedal Edema / Generalized Edema" },
                    { name: "hypertension", label: "Hypertension" },
                    { name: "obesity", label: "Obesity (BMI>29)" },
                    { name: "miStroke", label: "Known case of MI, Stroke" },
                    { name: "highRiskFactors", label: "High Cardiac Risk Factors (Age, Ethnicity, Smoking, Dyslipidemia)" },
                    { name: "otherReason", label: "Other" },
                  ].map((item) => (
                    <label key={item.name} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                      <input
                        type="checkbox"
                        name={item.name}
                        checked={formData[item.name as keyof typeof formData] as boolean}
                        onChange={handleChange}
                        className="w-5 h-5 text-primary-teal rounded focus:ring-primary-teal"
                      />
                      <span className="text-secondary-gray font-medium">{item.label}</span>
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
                  <h2 className="text-xl font-bold uppercase tracking-wide">Additional Comments</h2>
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
                  className={`w-full max-w-md px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wider transition-all duration-200 shadow-lg flex items-center justify-center gap-2 ${isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
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
                    Error submitting referral. Please try again or fax to (905) 248-3183.
                  </motion.div>
                )}

                <p className="text-sm text-gray-500 text-center mt-4">
                  48 hrs notice is required for any Cancellations or Rebooking
                  <br />
                  <span className="font-bold text-red-600">Fax: (905) 248-3183</span>
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
