const _0x3e866c = _0x5a40;
(function (_0x5b24f9, _0x337ff1) {
  const _0x22528d = _0x5a40,
    _0x5beb08 = _0x5b24f9();
  while (!![]) {
    try {
      const _0x39da2b =
        -parseInt(_0x22528d(0x88)) / 0x1 +
        -parseInt(_0x22528d(0x92)) / 0x2 +
        (-parseInt(_0x22528d(0x94)) / 0x3) * (parseInt(_0x22528d(0x85)) / 0x4) +
        -parseInt(_0x22528d(0x99)) / 0x5 +
        parseInt(_0x22528d(0x8a)) / 0x6 +
        (-parseInt(_0x22528d(0x82)) / 0x7) * (parseInt(_0x22528d(0x8c)) / 0x8) +
        (parseInt(_0x22528d(0x86)) / 0x9) * (parseInt(_0x22528d(0x93)) / 0xa);
      if (_0x39da2b === _0x337ff1) break;
      else _0x5beb08["push"](_0x5beb08["shift"]());
    } catch (_0xd9646e) {
      _0x5beb08["push"](_0x5beb08["shift"]());
    }
  }
})(_0x3054, 0x1f8b2);
function _0x3054() {
  const _0x4011e1 = [
    "sendButtonTemp",
    "notEmpty",
    "72dLxhaK",
    "495WcaYxO",
    "/meta/:jid",
    "119898KmLqlf",
    "/:jid",
    "1051302HRUQff",
    "getList",
    "9992REbult",
    "get",
    "/sendMessage",
    "/sendMessageMedia",
    "receiver",
    "sendMessages",
    "423416fSbUQA",
    "105730bDYcMp",
    "11157hoZVwb",
    "message",
    "sendButton",
    "sendMessageMedia",
    "getGroupMetaData",
    "208160MumWQI",
    "post",
    "1050aIqOeL",
  ];
  _0x3054 = function () {
    return _0x4011e1;
  };
  return _0x3054();
}
import { Router } from "express";
import { body, query } from "express-validator";
function _0x5a40(_0x409610, _0x1fc58a) {
  const _0x3054f8 = _0x3054();
  return (
    (_0x5a40 = function (_0x5a407b, _0x884b63) {
      _0x5a407b = _0x5a407b - 0x81;
      let _0x510d17 = _0x3054f8[_0x5a407b];
      return _0x510d17;
    }),
    _0x5a40(_0x409610, _0x1fc58a)
  );
}
import _0x14d823 from "./../middlewares/requestValidator.js";
import _0x6e37a from "./../middlewares/sessionValidator.js";
import * as _0x395908 from "./../controllers/groupsController.js";
import _0x572fcf from "./../controllers/getMessages.js";
const router = Router();
router[_0x3e866c(0x8d)](
  "/",
  query("id")["notEmpty"](),
  _0x14d823,
  _0x6e37a,
  _0x395908[_0x3e866c(0x8b)]
),
  router["get"](
    _0x3e866c(0x89),
    query("id")[_0x3e866c(0x84)](),
    _0x14d823,
    _0x6e37a,
    _0x572fcf
  ),
  router[_0x3e866c(0x8d)](
    _0x3e866c(0x87),
    query("id")[_0x3e866c(0x84)](),
    _0x14d823,
    _0x6e37a,
    _0x395908[_0x3e866c(0x98)]
  ),
  router["post"](
    _0x3e866c(0x8e),
    query("id")["notEmpty"](),
    body("receiver")[_0x3e866c(0x84)](),
    body(_0x3e866c(0x95))["notEmpty"](),
    _0x14d823,
    _0x6e37a,
    _0x395908[_0x3e866c(0x91)]
  ),
  router[_0x3e866c(0x81)](
    _0x3e866c(0x8f),
    query("id")["notEmpty"](),
    body(_0x3e866c(0x90))["notEmpty"](),
    body("message")[_0x3e866c(0x84)](),
    _0x14d823,
    _0x6e37a,
    _0x395908[_0x3e866c(0x97)]
  ),
  router[_0x3e866c(0x81)](
    "/sendMessageButton",
    query("id")[_0x3e866c(0x84)](),
    body(_0x3e866c(0x90))[_0x3e866c(0x84)](),
    body(_0x3e866c(0x95))[_0x3e866c(0x84)](),
    _0x14d823,
    _0x6e37a,
    _0x395908[_0x3e866c(0x96)]
  ),
  router[_0x3e866c(0x81)](
    "/sendMessageButtonSpecial",
    query("id")[_0x3e866c(0x84)](),
    body(_0x3e866c(0x90))["notEmpty"](),
    body(_0x3e866c(0x95))["notEmpty"](),
    _0x14d823,
    _0x6e37a,
    _0x395908[_0x3e866c(0x83)]
  );
export default router;
