const _0x5b2f46 = _0x25ba;
function _0x2ffe() {
  const _0x32d415 = [
    "notEmpty",
    "5250966BUsjtq",
    "checkJid",
    "/checkJid",
    "2070019hmALzC",
    "jid",
    "/sendVcard",
    "264888KOPmmZ",
    "post",
    "2449634TDKhiI",
    "getList",
    "18GffSlb",
    "get",
    "130WrLbyt",
    "25642JmFFfd",
    "/send-bulk",
    "sendButton",
    "92LrGYYI",
    "receiver",
    "42dReoQy",
    "sendVCard",
    "/sendMessageMedia",
    "219945HzljXS",
    "sendBulk",
    "message",
    "sendText",
    "/sendMessage",
    "sendButtonTemp",
    "233685EMunaX",
    "/sendMessageButtonSpecial",
  ];
  _0x2ffe = function () {
    return _0x32d415;
  };
  return _0x2ffe();
}
function _0x25ba(_0x4f7b13, _0x43d251) {
  const _0x2ffeaa = _0x2ffe();
  return (
    (_0x25ba = function (_0x25ba72, _0x29b2fa) {
      _0x25ba72 = _0x25ba72 - 0x1cd;
      let _0x2d6bb4 = _0x2ffeaa[_0x25ba72];
      return _0x2d6bb4;
    }),
    _0x25ba(_0x4f7b13, _0x43d251)
  );
}
(function (_0x34dd73, _0x3e9233) {
  const _0x4b648a = _0x25ba,
    _0x2563ca = _0x34dd73();
  while (!![]) {
    try {
      const _0x72098f =
        (parseInt(_0x4b648a(0x1dd)) / 0x1) *
          (-parseInt(_0x4b648a(0x1e2)) / 0x2) +
        -parseInt(_0x4b648a(0x1e5)) / 0x3 +
        (parseInt(_0x4b648a(0x1e0)) / 0x4) *
          (-parseInt(_0x4b648a(0x1cd)) / 0x5) +
        -parseInt(_0x4b648a(0x1d0)) / 0x6 +
        parseInt(_0x4b648a(0x1d3)) / 0x7 +
        (parseInt(_0x4b648a(0x1d6)) / 0x8) *
          (parseInt(_0x4b648a(0x1da)) / 0x9) +
        (-parseInt(_0x4b648a(0x1dc)) / 0xa) *
          (-parseInt(_0x4b648a(0x1d8)) / 0xb);
      if (_0x72098f === _0x3e9233) break;
      else _0x2563ca["push"](_0x2563ca["shift"]());
    } catch (_0x318031) {
      _0x2563ca["push"](_0x2563ca["shift"]());
    }
  }
})(_0x2ffe, 0xa9b0c);
import { Router } from "express";
import { body, query } from "express-validator";
import _0x437aa7 from "./../middlewares/requestValidator.js";
import _0x4c13c6 from "./../middlewares/sessionValidator.js";
import * as _0x3e0fe5 from "./../controllers/chatsController.js";
import _0x37056b from "./../controllers/getMessages.js";
const router = Router();
router["get"](
  "/",
  query("id")[_0x5b2f46(0x1cf)](),
  _0x437aa7,
  _0x4c13c6,
  _0x3e0fe5[_0x5b2f46(0x1d9)]
),
  router[_0x5b2f46(0x1db)](
    _0x5b2f46(0x1d2),
    query("id")["notEmpty"](),
    query(_0x5b2f46(0x1d4))[_0x5b2f46(0x1cf)](),
    _0x437aa7,
    _0x4c13c6,
    _0x3e0fe5[_0x5b2f46(0x1d1)]
  ),
  router[_0x5b2f46(0x1db)](
    "/:jid",
    query("id")[_0x5b2f46(0x1cf)](),
    _0x437aa7,
    _0x4c13c6,
    _0x37056b
  ),
  router[_0x5b2f46(0x1d7)](
    _0x5b2f46(0x1e9),
    query("id")[_0x5b2f46(0x1cf)](),
    body("receiver")["notEmpty"](),
    body("message")["notEmpty"](),
    _0x437aa7,
    _0x4c13c6,
    _0x3e0fe5[_0x5b2f46(0x1e8)]
  ),
  router[_0x5b2f46(0x1d7)](
    _0x5b2f46(0x1d5),
    query("id")["notEmpty"](),
    body(_0x5b2f46(0x1e1))[_0x5b2f46(0x1cf)](),
    body(_0x5b2f46(0x1e7))[_0x5b2f46(0x1cf)](),
    _0x437aa7,
    _0x4c13c6,
    _0x3e0fe5[_0x5b2f46(0x1e3)]
  ),
  router["post"](
    "/sendMessageButton",
    query("id")["notEmpty"](),
    body(_0x5b2f46(0x1e1))[_0x5b2f46(0x1cf)](),
    body(_0x5b2f46(0x1e7))[_0x5b2f46(0x1cf)](),
    _0x437aa7,
    _0x4c13c6,
    _0x3e0fe5[_0x5b2f46(0x1df)]
  ),
  router[_0x5b2f46(0x1d7)](
    _0x5b2f46(0x1ce),
    query("id")[_0x5b2f46(0x1cf)](),
    body(_0x5b2f46(0x1e1))["notEmpty"](),
    body("message")[_0x5b2f46(0x1cf)](),
    _0x437aa7,
    _0x4c13c6,
    _0x3e0fe5[_0x5b2f46(0x1ea)]
  ),
  router["post"](
    _0x5b2f46(0x1e4),
    query("id")["notEmpty"](),
    body(_0x5b2f46(0x1e1))["notEmpty"](),
    body("message")[_0x5b2f46(0x1cf)](),
    _0x437aa7,
    _0x4c13c6,
    _0x3e0fe5["sendMessageMedia"]
  ),
  router[_0x5b2f46(0x1d7)](
    _0x5b2f46(0x1de),
    query("id")["notEmpty"](),
    _0x437aa7,
    _0x4c13c6,
    _0x3e0fe5[_0x5b2f46(0x1e6)]
  );
export default router;
