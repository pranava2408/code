const express = require('express');
const router = express.router();
const { addProblem } = require('./controllers/problemController');
router.post('/', addProblem);

module.export = router;