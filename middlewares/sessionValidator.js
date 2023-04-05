import { isSessionExists } from "./../models/whatsapp.js";
import response from "./../models/response.js";
import whitelistIP from "../models/whitelistIP.js";
const validate = (req, res, next) => {
  const sessionId = req.query.id ?? req.params.id;
  if (!whitelistIP(req.ip)) {
    return response(res, 403, false, `IP ${req.ip} not allowed.`);
  }
  if (!isSessionExists(sessionId)) {
    return response(res, 404, false, "Session not found.");
  }

  res.locals.sessionId = sessionId;
  next();
};

export default validate;
