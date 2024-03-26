const express = require('express');
const app = express();
const port = 5000; // Choose a suitable port
const cors = require('cors'); // Import the cors middleware

// ... your vendorData ...

app.use(cors()); // Add this line to enable CORS

const vendorData = [
    { 
        vendor_code: 'VC001',
        Supplimentry_Inv_No: 'SINV123',
        S_Inv_DATE: '2023-05-20',
        Ref_Inv_No: 'RIN456',
        INV_DATE: '2023-05-21',
        GRN_NO: 'GRN001',
        GRN_DATE: '2023-05-22',
        MATERIAL_DESCRIPTION: 'Product A',
        QTY: 100,
        Old_Rate: 10.5,
        New_Rate: 12.0,
        Difference: 1.5,
        BASIC_Amt: 1050.0,
        CGST: 5.0,
        SGST: 5.0,
        IGST: 0.0,
        GRAND_TOTAL: 1162.5,
        PO_NO: 'PO001',
        MATERIAL_CODE: 'M001',
        POAM_NO: 'POAM001',
        remarks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },{ 
        vendor_code: 'VC002',
        Supplimentry_Inv_No: 'SINV123',
        S_Inv_DATE: '2023-05-20',
        Ref_Inv_No: 'RIN456',
        INV_DATE: '2023-05-21',
        GRN_NO: 'GRN001',
        GRN_DATE: '2023-05-22',
        MATERIAL_DESCRIPTION: 'Product A',
        QTY: 100,
        Old_Rate: 10.5,
        New_Rate: 12.0,
        Difference: 1.5,
        BASIC_Amt: 1050.0,
        CGST: 5.0,
        SGST: 5.0,
        IGST: 0.0,
        GRAND_TOTAL: 1162.5,
        PO_NO: 'PO001',
        MATERIAL_CODE: 'M001',
        POAM_NO: 'POAM001',
        remarks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },{ 
        vendor_code: 'VC003',
        Supplimentry_Inv_No: 'SINV123',
        S_Inv_DATE: '2023-05-20',
        Ref_Inv_No: 'RIN456',
        INV_DATE: '2023-05-21',
        GRN_NO: 'GRN001',
        GRN_DATE: '2023-05-22',
        MATERIAL_DESCRIPTION: 'Product A',
        QTY: 100,
        Old_Rate: 10.5,
        New_Rate: 12.0,
        Difference: 1.5,
        BASIC_Amt: 1050.0,
        CGST: 5.0,
        SGST: 5.0,
        IGST: 0.0,
        GRAND_TOTAL: 1162.5,
        PO_NO: 'PO001',
        MATERIAL_CODE: 'M001',
        POAM_NO: 'POAM001',
        remarks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },{ 
        vendor_code: 'VC004',
        Supplimentry_Inv_No: 'SINV123',
        S_Inv_DATE: '2023-05-20',
        Ref_Inv_No: 'RIN456',
        INV_DATE: '2023-05-21',
        GRN_NO: 'GRN001',
        GRN_DATE: '2023-05-22',
        MATERIAL_DESCRIPTION: 'Product A',
        QTY: 100,
        Old_Rate: 10.5,
        New_Rate: 12.0,
        Difference: 1.5,
        BASIC_Amt: 1050.0,
        CGST: 5.0,
        SGST: 5.0,
        IGST: 0.0,
        GRAND_TOTAL: 1162.5,
        PO_NO: 'PO001',
        MATERIAL_CODE: 'M001',
        POAM_NO: 'POAM001',
        remarks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },{ 
        vendor_code: 'VC005',
        Supplimentry_Inv_No: 'SINV123',
        S_Inv_DATE: '2023-05-20',
        Ref_Inv_No: 'RIN456',
        INV_DATE: '2023-05-21',
        GRN_NO: 'GRN001',
        GRN_DATE: '2023-05-22',
        MATERIAL_DESCRIPTION: 'Product A',
        QTY: 100,
        Old_Rate: 10.5,
        New_Rate: 12.0,
        Difference: 1.5,
        BASIC_Amt: 1050.0,
        CGST: 5.0,
        SGST: 5.0,
        IGST: 0.0,
        GRAND_TOTAL: 1162.5,
        PO_NO: 'PO001',
        MATERIAL_CODE: 'M001',
        POAM_NO: 'POAM001',
        remarks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
  ];
  

app.get('/api/data', (req, res) => {
    res.json(vendorData); 
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
