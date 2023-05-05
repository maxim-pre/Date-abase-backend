const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const userInformation = req.body.user;
    const newUser = await User.create(userInformation);
    res.status(200).json({ user: newUser });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ user: updatedUser });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ user: deletedUser });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getAllUsers, getUserById, createUser, updateUserById, deleteUserById };
