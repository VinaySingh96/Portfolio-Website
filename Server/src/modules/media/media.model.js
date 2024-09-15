const mongoose = require("mongoose");

// update schema according to usage
const MediaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true
    },
    url: {
      type: String,
      required: true
    },
    sizeInBytes: {
      type: Number,
      required: true
    },
    format: {
      type: String,
      required: true
    },
    storageType: {
      type: String,
      enum: ['LOCAL', 'CLOUD'],
      required: true
    },
    path: {
      type: String
    },
    requestEntity: {
      type: String,
      required: true,
      index: true
    }
  },
  {
    timestamps: true,
  }
);

MediaSchema.index({ createdAt: -1 });
MediaSchema.index({ updatedAt: -1 });

module.exports = mongoose.model("media", MediaSchema);
