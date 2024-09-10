const bcrypt = require('bcrypt');
const User = require("../models/user");
const Likes = require("../models/likes");

exports.signup = async (req, res) =>{
    const { email, password } = req.body;

    try{
        //checks if a user with the same email exist 
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).send("User with email exist");
        }

        const hashedPass = await bcrypt.hash(password, 10);

        //create a new user and their likes 
        const newUser = new User({ email, password: hashedPass })
        const newLikes = new Likes({ user: newUser._id })

        await newLikes.save();

        //set the user's likes id to their user id
        newUser.likes = newLikes._id;
        newUser.save();
        res.status(201).send('User registered');
    }catch(error){
        res.status(500).send(error.message);
    }
}

exports.login = async (req, res) =>{
    const { email, password } = req.body;

    try{
        const user = await User.findOne({ email })
        if(!user){ //check if user with email exist
            return res.status(404).send("User not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){ //checks for matched password
            return res.status(400).send('Invalid credentials');
        }

        // const payload = {
        //     id: user._id,
        //     email: user.email
        // }

        res.status(201).send("User is logged in")
    }catch(error){
        res.status(500).send(error.message);
    }
}