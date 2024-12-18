import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // For better table rendering

function App() {
  // State for input fields
  const [companyName, setCompanyName] = useState("BEEKEY");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("2024-78");
  const [invoiceDate, setInvoiceDate] = useState("16.12.2024");
  const [services, setServices] = useState([
    { description: "Service 1", price: 100, quantity: 1 },
  ]);
  const [previewData, setPreviewData] = useState(null);

  // Add new service row
  const addService = () => {
    setServices([...services, { description: "", price: 0, quantity: 1 }]);
  };

  // Remove a service row
  const removeService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  // Update service field (description, price, quantity)
  const updateService = (index, field, value) => {
    const updatedServices = [...services];
    updatedServices[index][field] = value;
    setServices(updatedServices);
  };

  // Calculate total
  const calculateTotal = () =>
    services.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ).toFixed(2);

  // Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Logo
    const logo = "data:image/png;base64,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"; // Replace with the path to your logo image
    doc.addImage(logo, "JPEG", 150, 10, 50, 20);
  
    // Header
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text("BEEKEY Bayram und Kadir Karahan GbR | 34466 Wolfhagen", 20, 20);
  
    // Invoice Title and Details
    doc.setFontSize(16);
    doc.setTextColor(0);
    doc.setFont("helvetica", "bold");
    doc.text("Rechnungsnummer 2024-78", 20, 40);
  
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Invoice Number: ${invoiceNumber}`, 20, 50);
    doc.text(`Date: ${invoiceDate}`, 20, 58);
  
    // Client Details
    doc.setFontSize(12);
    doc.text(`Client Name: ${clientName}`, 20, 70);
    doc.text(`Address: ${clientAddress}`, 20, 78);
    doc.text(`City: ${clientCity}`, 20, 86);
  
    // Table Headers
    const headers = [["Pos.", "Description", "Price", "Quantity", "Total"]];
  
    // Table Rows
    const tableData = services.map((service, index) => [
      index + 1,
      service.description,
      `${service.price.toFixed(2)} €`,
      service.quantity,
      `${(service.price * service.quantity).toFixed(2)} €`,
    ]);
  
    // Table Styling
    doc.autoTable({
      startY: 100,
      head: headers,
      body: tableData,
      headStyles: { fillColor: [40, 140, 200], textColor: 255, fontStyle: "bold" },
      alternateRowStyles: { fillColor: [240, 240, 240] },
      margin: { top: 20, bottom: 20 },
      styles: { fontSize: 10, cellPadding: 2 },
    });
  
    // Totals Section
    const total = calculateTotal();
    const netTotal = parseFloat(total).toFixed(2);
    const vat = (total * 0.19).toFixed(2);
    const grandTotal = (total * 1.19).toFixed(2);
  
    const yPos = doc.lastAutoTable.finalY + 10;
  
    doc.setFont("helvetica", "bold");
    doc.text(`Nettobetrag: ${netTotal} €`, 140, yPos);
    doc.text(`+ 19% USt.: ${vat} €`, 140, yPos + 8);
    doc.text(`Rechnungsbetrag: ${grandTotal} €`, 140, yPos + 16);
  
    // Footer (Company Information)
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const footerY = yPos + 40;
  
    doc.text("Firma: BEEKEY Bayram und Kadir Karahan GbR", 20, footerY);
    doc.text("Address: Offenbachstraße 7, 34466 Wolfhagen, Deutschland", 20, footerY + 8);
    doc.text("Bank: Raiffeisenbank | IBAN: DE89 5263 5550 0000 9835 86", 20, footerY + 16);
    doc.text("BIC: GENODEF1WOH | USt. ID: DE348436340", 20, footerY + 24);
    doc.text("Tel: +49 (0) 152 06482315 | E-Mail: info@beekey.de", 20, footerY + 32);
  
    // Show Preview
    setPreviewData(doc.output("datauristring"));
  };
  

  const handleDownload = () => {
    const doc = new jsPDF();

    // Same generation logic
    doc.setFontSize(14);
    doc.text(`Invoice Number: ${invoiceNumber}`, 20, 20);
    doc.text(`Date: ${invoiceDate}`, 20, 30);

    doc.text(`Company: ${companyName}`, 20, 50);
    doc.text(`Client Name: ${clientName}`, 20, 60);
    doc.text(`Address: ${clientAddress}`, 20, 70);
    doc.text(`City: ${clientCity}`, 20, 80);

    const tableData = services.map((service, index) => [
      index + 1,
      service.description,
      `${service.price.toFixed(2)}€`,
      service.quantity,
      `${(service.price * service.quantity).toFixed(2)}€`,
    ]);

    doc.autoTable({
      head: [["Pos.", "Description", "Price", "Quantity", "Total"]],
      body: tableData,
      startY: 90,
      styles: { fontSize: 10, cellPadding: 4 },
    });

    const total = calculateTotal();
    doc.text(`Net Amount: ${total}€`, 20, doc.lastAutoTable.finalY + 10);
    doc.text(`+19% VAT: ${(total * 0.19).toFixed(2)}€`, 20, doc.lastAutoTable.finalY + 20);
    doc.text(
      `Invoice Amount: ${(total * 1.19).toFixed(2)}€`,
      20,
      doc.lastAutoTable.finalY + 30
    );

    // Save PDF
    doc.save(`invoice-${invoiceNumber}.pdf`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-6">
      <div className="w-full max-w-4xl p-10 bg-white shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Invoice Generator</h1>

        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Client Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Client Address</label>
            <input
              type="text"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Client City</label>
            <input
              type="text"
              value={clientCity}
              onChange={(e) => setClientCity(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
        </div>

        {/* Services Table */}
        <h2 className="text-lg font-semibold mb-4">Services</h2>
        <table className="w-full text-sm mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-3 text-left">Description</th>
              <th className="py-2 px-3 text-right">Price</th>
              <th className="py-2 px-3 text-right">Quantity</th>
              <th className="py-2 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-3">
                  <input
                    type="text"
                    value={service.description}
                    onChange={(e) =>
                      updateService(index, "description", e.target.value)
                    }
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="py-2 px-3 text-right">
                  <input
                    type="number"
                    value={service.price}
                    onChange={(e) =>
                      updateService(index, "price", parseFloat(e.target.value))
                    }
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="py-2 px-3 text-right">
                  <input
                    type="number"
                    value={service.quantity}
                    onChange={(e) =>
                      updateService(index, "quantity", parseInt(e.target.value))
                    }
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="py-2 px-3 text-right">
                  <button
                    onClick={() => removeService(index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={addService}
          className="mb-6 mx-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Service
        </button>

        {/* Generate and Preview PDF */}
        <button
          onClick={generatePDF}
          className="mr-4 px-6 py-2 bg-blue-500 text-white rounded"
        >
          Preview PDF
        </button>

        {/* Download PDF */}
        <button
          onClick={handleDownload}
          className="px-6 py-2 bg-green-500 text-white rounded"
        >
          Download PDF
        </button>

        {/* Preview Modal */}
        {previewData && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Preview</h3>
              <iframe
                src={previewData}
                width="600"
                height="400"
                frameBorder="0"
                title="PDF Preview"
              />
              <button
                onClick={() => setPreviewData(null)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              >
                Close Preview
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
