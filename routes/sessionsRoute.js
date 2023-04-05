function _0x3dc1() {
  const _0x2c297c = [
    "37444exFzAH",
    "80321tZqKUC",
    "get",
    "del",
    "14EohgVw",
    "find",
    "/find/:id",
    "66275EjVQII",
    "3763773GcyJRI",
    "notEmpty",
    "5314370uQwhOg",
    "2730ONiykV",
    "post",
    "/delete/:id",
    "isLegacy",
    "354EPoHDZ",
    "add",
    "16kbodCw",
    "status",
    "3597188XiKYaW",
    "10412028lDduaB",
  ];
  _0x3dc1 = function () {
    return _0x2c297c;
  };
  return _0x3dc1();
}
const _0x2a9b15 = _0x4e84;
(function (_0x56b85c, _0x551375) {
  const _0x296fae = _0x4e84,
    _0xb6d033 = _0x56b85c();
  while (!![]) {
    try {
      const _0x2b8a77 =
        (parseInt(_0x296fae(0x1f3)) / 0x1) *
          (parseInt(_0x296fae(0x1f6)) / 0x2) +
        (parseInt(_0x296fae(0x201)) / 0x3) *
          (-parseInt(_0x296fae(0x207)) / 0x4) +
        parseInt(_0x296fae(0x1fc)) / 0x5 +
        parseInt(_0x296fae(0x206)) / 0x6 +
        -parseInt(_0x296fae(0x205)) / 0x7 +
        (parseInt(_0x296fae(0x203)) / 0x8) *
          (parseInt(_0x296fae(0x1fa)) / 0x9) +
        (parseInt(_0x296fae(0x1fd)) / 0xa) *
          (-parseInt(_0x296fae(0x1f9)) / 0xb);
      if (_0x2b8a77 === _0x551375) break;
      else _0xb6d033["push"](_0xb6d033["shift"]());
    } catch (_0x23013e) {
      _0xb6d033["push"](_0xb6d033["shift"]());
    }
  }
})(_0x3dc1, 0xe3eaa);
function _0x4e84(_0x455f23, _0x127748) {
  const _0x3dc101 = _0x3dc1();
  return (
    (_0x4e84 = function (_0x4e84b4, _0x473e14) {
      _0x4e84b4 = _0x4e84b4 - 0x1f3;
      let _0x1589aa = _0x3dc101[_0x4e84b4];
      return _0x1589aa;
    }),
    _0x4e84(_0x455f23, _0x127748)
  );
}
import { Router } from "express";
import { body } from "express-validator";
import _0x7c62ba from "./../middlewares/requestValidator.js";
import _0x3889d4 from "./../middlewares/sessionValidator.js";
import * as _0x1c824b from "./../controllers/sessionsController.js";
const router = Router();
router[_0x2a9b15(0x1f4)](
  _0x2a9b15(0x1f8),
  _0x3889d4,
  _0x1c824b[_0x2a9b15(0x1f7)]
),
  router[_0x2a9b15(0x1f4)](
    "/status/:id",
    _0x3889d4,
    _0x1c824b[_0x2a9b15(0x204)]
  ),
  router[_0x2a9b15(0x1fe)](
    "/add",
    body("id")[_0x2a9b15(0x1fb)](),
    body(_0x2a9b15(0x200))["notEmpty"](),
    _0x7c62ba,
    _0x1c824b[_0x2a9b15(0x202)]
  ),
  router["delete"](_0x2a9b15(0x1ff), _0x3889d4, _0x1c824b[_0x2a9b15(0x1f5)]);
export default router;
