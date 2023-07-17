import { logger } from "../../utils/logger.js";

const register = async (req, res) => {
  logger.info("touch here");
  res.send("Hello world");
};
const login = async (req, res) => {};
const getUser = async (req, res) => {};
const listUser = async (req, res) => {};
const logout = async (req, res) => {};
const forgotPassword = (req, res) => {};
const changePassword = (req, res) => {};
const disableUser = (req, res) => {};

export { register, login, getUser, listUser, logout, forgotPassword, changePassword, disableUser };
