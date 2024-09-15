const mongoose = require("mongoose");

// update schema according to usage
const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: 20,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    thumbnails: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['IN_PROGRESS', 'COMPLETED'],
      default: 'COMPLETED'
    },
    isHidden: {
      type: Boolean,
      default: false
    },
    photos: {
      type: [String],
    },
    liveLink: {
      type: String
    },
    githubLink: {
      type: String
    },
  },
  {
    timestamps: true
  }
);

ProjectSchema.index({ createdAt: -1 });
ProjectSchema.index({ updatedAt: -1 });

module.exports = mongoose.model('project', ProjectSchema);