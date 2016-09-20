import express from 'express';
import randomCtrl from '../controllers/random';

const router = express.Router();	// eslint-disable-line new-cap

/** GET request to generate a random number. No token required */
router.route('/randomize')
  .get(randomCtrl.getRandomizedNumber);

export default router;
