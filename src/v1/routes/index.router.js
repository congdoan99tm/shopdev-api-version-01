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
        name: 'nacuto',
        age: 26,
      },
      {
        name: 'Dương to Quá',
        age: 250,
      },
    ],
  });
});

module.exports = router;
