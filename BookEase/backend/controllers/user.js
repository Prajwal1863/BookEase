import User from "../models/User.js";


export const updateUser = async(req, res, next) => {
    try {
        const updatedUser = awaitUser.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err);
    }
};
export const deleteUser = async(req, res, next) => {
    try {
        awaitUser.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted")
    } catch (err) {
        next(err);
    }
};
export const getUser = async(req, res, next) => {
    try {
        const user = awaitUser.findById(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        next(err);
    }
};
export const getUsers = async(req, res, next) => {
    try {
        const users = await Hotel.find();
        res.status(200).json(users)
    } catch (err) {
        next(err);
    }
};