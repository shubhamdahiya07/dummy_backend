const express = require('express');
const app = express();
const port = 4000; // Choose a suitable port
const cors = require('cors'); // Import the cors middleware

// ... your vendorData ...

app.use(cors()); // Add this line to enable CORS

const vendorData = [
    {
        id:1,
        vendorCode:'VC001',
        poNo:'PO001',
        materialCode:'M001',
        grnNumber:'GRN001',
        Invoice:'IN001',
        No_of_items:'1',
        status:'NEW',
    },{
        id:2,
        vendorCode:'VC002',
        poNo:'PO002',
        materialCode:'M002',
        grnNumber:'GRN002',
        Invoice:'IN002',
        No_of_items:'2',
        status:'NEW',
    },{
        id:3,
        vendorCode:'VC003',
        poNo:'PO003',
        materialCode:'M003',
        grnNumber:'GRN003',
        Invoice:'IN003',
        No_of_items:'3',
        status:'NEW',
    },{
        id:4,
        vendorCode:'VC004',
        poNo:'PO004',
        materialCode:'M004',
        grnNumber:'GRN004',
        Invoice:'IN004',
        No_of_items:'4',
        status:'NEW',
    },{
        id:5,
        vendorCode:'VC005',
        poNo:'PO005',
        materialCode:'M005',
        grnNumber:'GRN005',
        Invoice:'IN005',
        No_of_items:'5',
        status:'NEW',
    },{
        id:6,
        vendorCode:'VC006',
        poNo:'PO006',
        materialCode:'M006',
        grnNumber:'GRN006',
        Invoice:'IN006',
        No_of_items:'6',
        status:'NEW',
    },
];


app.get('/api/tabledata', (req, res) => {
    res.json(vendorData);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
