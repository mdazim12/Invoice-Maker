import React, { useState } from 'react';
import './App.css';
import { jsPDF } from 'jspdf';
import ImgOne from './assets/Asset 1.png'
import ImgTwo from './assets/Asset 2.png'

function App() {
  // const [companyName, setCompanyName] = useState('');
  // const [clientName, setClientName] = useState('');
  // const [items, setItems] = useState([{ description: '', amount: 0 }]);

  // const handleAddItem = () => {
  //   setItems([...items, { description: '', amount: 0 }]);
  // };

  // const handleRemoveItem = (index) => {
  //   const newItems = items.filter((item, i) => i !== index);
  //   setItems(newItems);
  // };

  // const handleInputChange = (index, event) => {
  //   const { name, value } = event.target;
  //   const updatedItems = [...items];
  //   updatedItems[index][name] = value;
  //   setItems(updatedItems);
  // };

  // const generatePDF = () => {
  //   const doc = new jsPDF();

  //   doc.setFontSize(16);
  //   doc.text('Invoice', 20, 20);
    
  //   doc.setFontSize(12);
  //   doc.text(`Company Name: ${companyName}`, 20, 30);
  //   doc.text(`Client Name: ${clientName}`, 20, 40);

  //   let yPosition = 50;
  //   doc.text('Description', 20, yPosition);
  //   doc.text('Amount', 120, yPosition);
  //   yPosition += 10;

  //   items.forEach((item, index) => {
  //     doc.text(item.description, 20, yPosition);
  //     doc.text(item.amount.toString(), 120, yPosition);
  //     yPosition += 10;
  //   });

  //   const total = items.reduce((sum, item) => sum + parseFloat(item.amount), 0);
  //   doc.text(`Total: $${total}`, 20, yPosition + 10);

  //   doc.save('invoice.pdf');
  // };

  return (
    <div className="min-h-screen  flex justify-center items-center py-12 px-6">
     












      <div className=" p-10  mx-auto text-black font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <div>

        <div className="text-sm font-medium text-left">
        
         
          <p className='text-sm'>BEEKEY Bayram und Kadir Karahan GbR I 34466 Wolfhagen
          </p>
          
          <p className='mt-10'> Company name </p>
          <p>Client name</p>
          <p> Client adress </p>
          <p> Client city   </p>
        </div>
        </div>
        <div className="text-sm font-medium text-left">
          <img src={ImgOne} alt="" />
          <p className='mt-4'>Bestell-Nr.: <strong>2024-78</strong></p>
          <p >Lieferdatum: Dezember 2024</p>
          <p className='my-4'>Ansprechpartner: Izzet Bayram Karahan</p>
          <p>Tel.: +49 (0) 1522 2787516</p>
          <p>E-Mail: info@beekey.de</p>
          <p className='mb-4'>www.beekey.de</p>
          <p>Datum: 16.12.2024</p>
        </div>
      </header>

      {/* Invoice Title */}
      <h2 className="text-2xl font-semibold mb-4 text-left">Rechnungsnummer 2024-78</h2>

      {/* Greeting */}
      <p className="text-md mb-6 text-left font-medium">
        Sehr geehrtes Team,
        <br />
        vielen Dank für Ihr Vertrauen in unsere Dienstleistung. Wie besprochen, erlauben wir uns, Ihnen folgende Leistung verbindlich in Rechnung zu stellen:
      </p>

      {/* Invoice Table */}
      <table className="w-full text-sm font-medium mb-6 border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-2 px-3 text-left">Pos.</th>
            <th className="py-2 px-3 text-left">Beschreibung</th>
            <th className="py-2 px-3 text-right">Preis</th>
            <th className="py-2 px-3 text-right">Menge</th>
            <th className="py-2 px-3 text-right">Gesamt</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 px-3">1</td>
            <td className="py-2 px-3">Service 1</td>
            <td className="py-2 px-3 text-right">100,00€</td>
            <td className="py-2 px-3 text-right">1 Stück</td>
            <td className="py-2 px-3 text-right">100,00€</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-3">2</td>
            <td className="py-2 px-3">Service 2</td>
            <td className="py-2 px-3 text-right">100,00€</td>
            <td className="py-2 px-3 text-right">2 Stück</td>
            <td className="py-2 px-3 text-right">200,00€</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-3">3</td>
            <td className="py-2 px-3">Service 3</td>
            <td className="py-2 px-3 text-right">100,00€</td>
            <td className="py-2 px-3 text-right">3 Stück</td>
            <td className="py-2 px-3 text-right">300,00€</td>
          </tr>
        </tbody>
      </table>

      {/* Totals */}
      <div className="text-right mb-6">
        <p>Netto Betrag: <span className="font-semibold">600,00€</span></p>
        <p>zzgl. 19% USt.: <span className="font-semibold">114,00€</span></p>
        <p className="text-lg font-bold mt-2 bg-black text-white inline-block px-3 py-1">
          Rechnungsbetrag: 714,00€
        </p>
      </div>

      {/* Payment Info */}
      <p className="text-sm mb-4 float-left">
        Bitte überweisen Sie den Rechnungsbetrag innerhalb von 7 Tagen ab dem Rechnungsdatum.
      </p>
      <p className="text-sm flo">Mit freundlichen Grüßen,</p>

      {/* Footer */}

      <div className="my-4">
          <img
            src={ImgTwo}
            alt="Bayram Karahan Signature"
            className="h-10"
          />
          <p className="font-semibold float-left mb-5">Bayram Karahan</p>
        </div>
      <footer className='mt-10'>
       
        
        <div className="border-t pt-4 text-sm text-gray-600">
          <div className="flex justify-between text-left font-medium ">
            <div className='float-left'>
              <p>Firma: BEEKEY</p>
              <p>Bayram und Kadir Karahan GbR</p>
              <p>Ust.IDNr: DE348436340</p>
            </div>
            <div>
              <p>Anschrift:</p>
              <p>Offenbacherstraße 7</p>
              <p>34466 Wolfhagen, Deutschland</p>
            </div>
            <div>
              <p>Bankverbindung:</p>
              <p>IBAN: DE89 526 3550 0000 9835 86</p>
              <p>BIC: GENODEF1WOH</p>
              <p>Bankname: Raiffeisenbank</p>
            </div>
            <div>
              <p>Kontakt:</p>
              <p>Tel.: +49 (0) 1522 0483215</p>
              <p>E-Mail: info@beekey.de</p>
              <p>www.beekey.de</p>
            </div>
          </div>
        </div>
      </footer>
    </div>





    </div>
  );
}

export default App;
