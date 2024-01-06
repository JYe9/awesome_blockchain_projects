const NFT = require('../models/nftModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.aliasTopNfts = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

exports.getAllNfts = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(NFT.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const nfts = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: nfts.length,
    data: {
      nfts
    }
  });
});

exports.getNft = catchAsync(async (req, res, next) => {
  const nft = await NFT.findById(req.params.id);
  // Nft.findOne({ _id: req.params.id })

  if (!nft) {
    return next(new AppError('No nft found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      nft
    }
  });
});

exports.createNft = catchAsync(async (req, res, next) => {
  const newNft = await NFT.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      nft: newNft
    }
  });
});

exports.updateNft = catchAsync(async (req, res, next) => {
  const nft = await NFT.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!nft) {
    return next(new AppError('No nft found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      nft
    }
  });
});

exports.deleteNft = catchAsync(async (req, res, next) => {
  const nft = await NFT.findByIdAndDelete(req.params.id);

  if (!nft) {
    return next(new AppError('No nft found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.getNftStats = catchAsync(async (req, res, next) => {
  const stats = await NFT.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } }
    },
    {
      $group: {
        _id: { $toUpper: '$difficulty' },
        numTours: { $sum: 1 },
        numRatings: { $sum: '$ratingsQuantity' },
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' }
      }
    },
    {
      $sort: { avgPrice: 1 }
    }
    // {
    //   $match: { _id: { $ne: 'EASY' } }
    // }
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      stats
    }
  });
});

exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1; // 2021

  const plan = await NFT.aggregate([
    {
      $unwind: '$startDates'
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`)
        }
      }
    },
    {
      $group: {
        _id: { $month: '$startDates' },
        numTourStarts: { $sum: 1 },
        tours: { $push: '$name' }
      }
    },
    {
      $addFields: { month: '$_id' }
    },
    {
      $project: {
        _id: 0
      }
    },
    {
      $sort: { numTourStarts: -1 }
    },
    {
      $limit: 12
    }
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      plan
    }
  });
});
