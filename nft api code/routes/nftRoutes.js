const express = require('express');
const nftController = require('../controllers/nftController');
const authController = require('../controllers/authController');

const router = express.Router();

/// router.param('id', nftController.checkID);

router
  .route('/top-5-cheap')
  .get(nftController.aliasTopNfts, nftController.getAllNfts);

router.route('/nft-stats').get(nftController.getNftStats);
router.route('/monthly-plan/:year').get(nftController.getMonthlyPlan);

router
  .route('/')
  .get(authController.protect, nftController.getAllNfts)
  .post(nftController.createNft);

router
  .route('/:id')
  .get(nftController.getNft)
  .patch(nftController.updateNft)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    nftController.deleteNft
  );

module.exports = router;
