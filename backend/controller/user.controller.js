import User from '../models/user.model.js';

export const getUserDetails = async (req, res) => {
  res.send("getUserDetails")
};

export const updateUserDetails = async (req, res) => {
    res.send("updateUserDetails")
};

export const deleteUser = async (req, res) => {
    res.send("deleteUser")
};
