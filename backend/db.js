const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://rishabhshukla2924:rish7985@cluster0.bmmtb.mongodb.net/payments-app?retryWrites=true&w=majority")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const AccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', AccountSchema)

module.exports = {
	User,
    Account
};