const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'api ok',
  });
});

router.get('/api/user', (req, res, next) => {
  res.status(200).json({
    status: 'success api',
    message: 'api ok',
    metadata: [
      {
        name: 'doan',
        age: 27,
      },
      {
        name: 'dep',
        age: 26,
      },
      {
        name: 'trai',
        age: 250,
      },
    ],
  });
});
const pdfPath = '/home/ubuntu/pdfs';

router.get('/pdf', (req, res, next) => {
  try {
    const fileName = 'CV-flutter_Lanh-Cong-Doan.pdf';
    const filePath = path.join(pdfPath, fileName);

    res.sendFile(filePath, (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(err.status).end();
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: `${error}`,
    });
  }
});
module.exports = router;
