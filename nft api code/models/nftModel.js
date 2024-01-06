const mongoose = require('mongoose');
const slugify = require('slugify');
// const validator = require('validator');

const nftSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A nft must have a name'],
      unique: true,
      trim: true,
      maxlength: [40, 'A nft name must have less or equal then 40 characters'],
      minlength: [10, 'A nft name must have more or equal then 10 characters']
      // validate: [validator.isAlpha, 'nft name must only contain characters']
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A nft must have a duration']
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A nft must have a group size']
    },
    difficulty: {
      type: String,
      required: [true, 'A nft must have a difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty is either: easy, medium, difficult'
      }
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0']
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: [true, 'A nft must have a price']
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function(val) {
          // this only points to current doc on NEW document creation
          return val < this.price;
        },
        message: 'Discount price ({VALUE}) should be below regular price'
      }
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A nft must have a description']
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      required: [true, 'A nft must have a cover image']
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    startDates: [Date],
    secretNft: {
      type: Boolean,
      default: false
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

nftSchema.virtual('durationWeeks').get(function() {
  return this.duration / 7;
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
nftSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// nftSchema.pre('save', function(next) {
//   console.log('Will save document...');
//   next();
// });

// nftSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE
// nftSchema.pre('find', function(next) {
nftSchema.pre(/^find/, function(next) {
  this.find({ secretNft: { $ne: true } });

  this.start = Date.now();
  next();
});

nftSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

// AGGREGATION MIDDLEWARE
nftSchema.pre('aggregate', function(next) {
  this.pipeline().unshift({ $match: { secretNft: { $ne: true } } });

  console.log(this.pipeline());
  next();
});

const NFT = mongoose.model('NFT', nftSchema);

module.exports = NFT;
