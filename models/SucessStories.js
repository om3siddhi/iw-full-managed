const mongoose = require('mongoose');

const successStorySchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true
    },
    serialId: {
       type: Number,
       unique: true,
    },
    coupleName: {
        type: String,
        required: true,
        trim: true
    },
    comment: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now // Automatically sets today's date
    }
});

successStorySchema.pre('save', async function(next) {
    if (this.serialId) return next();

    try {
        const lastStory = await mongoose.model('SuccessStory').findOne().sort({ serialId: -1 }).limit(1);
        this.serialId = lastStory && lastStory.serialId ? lastStory.serialId + 1 : 100;
        next();
    } catch (err) {
        next(err);
    }
});

const SuccessStory = mongoose.model('SuccessStory', successStorySchema);

module.exports = SuccessStory;
