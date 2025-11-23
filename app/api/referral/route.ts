import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      // Locations
      locationBramptonSouth,
      locationBramptonNorth,
      locationMississauga,
      locationMilton,
      locationWaterloo,
      locationBowmanville,
      locationNorthYork,
      locationBurlington,
      locationOakville,

      // Patient Information
      patientFirstName,
      patientLastName,
      patientAddress,
      patientPhone,
      patientHealthCard,
      patientDOB,

      // Doctor Information
      physicianName,
      physicianAddress,
      physicianBillingNo,
      physicianPhone,
      physicianFax,
      physicianEmail,
      physicianSignature,

      // Cardiology
      cardiologyConsultation,
      echocardiography,
      exerciseStressTest,
      treadmillStressEcho,
      consultationAbnormal,
      restingECG,
      holterMonitor72,
      ambulatoryBP,
      spirometry,
      annualCheckup,

      // Nuclear Cardiology
      myocardialPerfusionExercise,
      myocardialPerfusionPersantine,
      myocardialPerfusionRest,
      viabilityStudy,
      ventricularFunctionRest,

      // Reasons for Test
      chestPain,
      palpitations,
      sob,
      syncopePresyncope,
      abnormalECG,
      dizzinessFatigue,
      pedalEdema,
      hypertension,
      obesity,
      miStroke,
      highRiskFactors,
      otherReason,

      // Additional Comments
      additionalComments,
    } = body;

    // Validate required fields
    if (
      !physicianName ||
      !physicianEmail ||
      !patientFirstName ||
      !patientLastName ||
      !patientHealthCard ||
      !patientPhone
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Helper to build list of selected items
    const buildList = (items: { [key: string]: boolean | undefined }, labels: { [key: string]: string }) => {
      return Object.keys(items)
        .filter((key) => items[key])
        .map((key) => labels[key]);
    };

    const locations = buildList(
      {
        locationBramptonSouth,
        locationBramptonNorth,
        locationMississauga,
        locationMilton,
        locationWaterloo,
        locationBowmanville,
        locationNorthYork,
        locationBurlington,
        locationOakville,
      },
      {
        locationBramptonSouth: "Brampton South",
        locationBramptonNorth: "Brampton North",
        locationMississauga: "Mississauga",
        locationMilton: "Milton",
        locationWaterloo: "Waterloo",
        locationBowmanville: "Bowmanville",
        locationNorthYork: "North York",
        locationBurlington: "Burlington",
        locationOakville: "Oakville",
      }
    );

    const cardiologyServices = buildList(
      {
        cardiologyConsultation,
        echocardiography,
        exerciseStressTest,
        treadmillStressEcho,
        consultationAbnormal,
        restingECG,
        holterMonitor72,
        ambulatoryBP,
        spirometry,
        annualCheckup,
      },
      {
        cardiologyConsultation: "Cardiology Consultation",
        echocardiography: "Echocardiography",
        exerciseStressTest: "Exercise Stress Test",
        treadmillStressEcho: "Treadmill Stress Echo",
        consultationAbnormal: "Consultation if test is Abnormal",
        restingECG: "Resting ECG",
        holterMonitor72: "Holter Monitor 72 hours",
        ambulatoryBP: "Ambulatory Blood Pressure Monitor",
        spirometry: "Spirometry",
        annualCheckup: "Annual Checkup Required",
      }
    );

    const nuclearServices = buildList(
      {
        myocardialPerfusionExercise,
        myocardialPerfusionPersantine,
        myocardialPerfusionRest,
        viabilityStudy,
        ventricularFunctionRest,
      },
      {
        myocardialPerfusionExercise: "Myocardial Perfusion (Thallium) - Exercise",
        myocardialPerfusionPersantine: "Myocardial Perfusion (Thallium) - Persantine",
        myocardialPerfusionRest: "Myocardial Perfusion (Thallium) - Rest",
        viabilityStudy: "Viability Study (Thallium)",
        ventricularFunctionRest: "Ventricular Function (MUGA) - Rest",
      }
    );

    const reasons = buildList(
      {
        chestPain,
        palpitations,
        sob,
        syncopePresyncope,
        abnormalECG,
        dizzinessFatigue,
        pedalEdema,
        hypertension,
        obesity,
        miStroke,
        highRiskFactors,
        otherReason,
      },
      {
        chestPain: "Chest Pain",
        palpitations: "Palpitations",
        sob: "SOB",
        syncopePresyncope: "Syncope / Presyncope",
        abnormalECG: "Abnormal ECG",
        dizzinessFatigue: "Dizziness, Fatigue of Unknown Origin",
        pedalEdema: "Pedal Edema / Generalized Edema",
        hypertension: "Hypertension",
        obesity: "Obesity (BMI>29)",
        miStroke: "Known case of MI, Stroke",
        highRiskFactors: "High Cardiac Risk Factors",
        otherReason: "Other",
      }
    );

    // Email to clinic
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "shadowtitan2007@gmail.com",
      replyTo: physicianEmail,
      subject: `New Referral - ${patientLastName}, ${patientFirstName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.5; color: #333; }
              .container { max-width: 800px; margin: 0 auto; border: 1px solid #ddd; }
              .header { background: #DC2626; color: white; padding: 20px; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; }
              .section { padding: 15px; border-bottom: 1px solid #eee; }
              .section-title { font-weight: bold; background: #000; color: white; padding: 5px 10px; margin-bottom: 10px; display: inline-block; }
              .row { display: flex; flex-wrap: wrap; margin-bottom: 5px; }
              .col { flex: 1; min-width: 200px; padding-right: 10px; }
              .label { font-weight: bold; color: #555; }
              .value { color: #000; }
              .list-item { background: #f0f0f0; padding: 5px 10px; margin: 2px 0; border-left: 3px solid #DC2626; }
              .footer { background: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #666; }
              .signature { margin-top: 10px; font-style: italic; border-bottom: 1px solid #333; display: inline-block; min-width: 200px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>CANADIAN HEART CARE - REFERRAL</h1>
                <p>Fax: (905) 248-3183</p>
              </div>

              <div class="section">
                <div class="section-title">LOCATIONS</div>
                ${locations.length > 0 ? locations.map(l => `<div class="list-item">${l}</div>`).join('') : '<em>None selected</em>'}
              </div>

              <div class="section">
                <div class="section-title">PATIENT INFORMATION</div>
                <div class="row"><div class="col"><span class="label">Name:</span> <span class="value">${patientFirstName} ${patientLastName}</span></div></div>
                <div class="row"><div class="col"><span class="label">Address:</span> <span class="value">${patientAddress}</span></div></div>
                <div class="row">
                  <div class="col"><span class="label">Phone:</span> <span class="value">${patientPhone}</span></div>
                  <div class="col"><span class="label">DOB:</span> <span class="value">${patientDOB}</span></div>
                </div>
                <div class="row"><div class="col"><span class="label">Health Card:</span> <span class="value">${patientHealthCard}</span></div></div>
              </div>

              <div class="section">
                <div class="section-title">DOCTOR INFORMATION</div>
                <div class="row"><div class="col"><span class="label">Name:</span> <span class="value">${physicianName}</span></div></div>
                <div class="row"><div class="col"><span class="label">Address:</span> <span class="value">${physicianAddress}</span></div></div>
                <div class="row">
                  <div class="col"><span class="label">Billing No:</span> <span class="value">${physicianBillingNo || 'N/A'}</span></div>
                  <div class="col"><span class="label">Phone:</span> <span class="value">${physicianPhone}</span></div>
                </div>
                <div class="row">
                  <div class="col"><span class="label">Fax:</span> <span class="value">${physicianFax || 'N/A'}</span></div>
                  <div class="col"><span class="label">Email:</span> <span class="value">${physicianEmail}</span></div>
                </div>
                <div class="row" style="margin-top: 15px;">
                  <div class="col"><span class="label">Signature:</span> <span class="value" style="font-family: 'Courier New', monospace; font-style: italic;">${physicianSignature || '(Not signed)'}</span></div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">CARDIOLOGY</div>
                ${cardiologyServices.length > 0 ? cardiologyServices.map(s => `<div class="list-item">${s}</div>`).join('') : '<em>None selected</em>'}
              </div>

              <div class="section">
                <div class="section-title">NUCLEAR CARDIOLOGY (WATERLOO)</div>
                ${nuclearServices.length > 0 ? nuclearServices.map(s => `<div class="list-item">${s}</div>`).join('') : '<em>None selected</em>'}
              </div>

              <div class="section">
                <div class="section-title">REASONS FOR TEST</div>
                ${reasons.length > 0 ? reasons.map(r => `<div class="list-item">${r}</div>`).join('') : '<em>None selected</em>'}
              </div>

              <div class="section">
                <div class="section-title">ADDITIONAL COMMENTS</div>
                <p>${additionalComments ? additionalComments.replace(/\n/g, '<br>') : '<em>None</em>'}</p>
              </div>

              <div class="footer">
                <p>This referral was submitted online via Canadian Heart Care website.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Referral submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting referral:", error);
    return NextResponse.json(
      { error: "Failed to submit referral" },
      { status: 500 }
    );
  }
}
