import React, { useState } from "react";
import "./styles/General.css";
import General from "./General";
import Education from "./Education";
import Practical from "./Practical";
import Display from "./Display";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phno: "",
    degree: "",
    school: "",
    city: "",
    gpa: "",
    experiences: [], // Ensure this is initialized as an array
  });

  const downloadPdf = () => {
    const input = document.getElementById("display");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("download.pdf");
    });
  };

  return (
    <div className="container">
      <div className="input-section">
        <General form={form} setForm={setForm} />
        <Education form={form} setForm={setForm} />
        <Practical form={form} setForm={setForm} />
        <button onClick={downloadPdf}>Download as PDF</button>
      </div>
      <div id="display" className="Display">
        <Display form={form} />
      </div>
    </div>
  );
}

export default App;
