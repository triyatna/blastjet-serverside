const _0x460aaa = _0x68dd;
(function (_0x22372c, _0xc55190) {
  const _0x31459f = _0x68dd,
    _0x256963 = _0x22372c();
  while (!![]) {
    try {
      const _0x54519a =
        (-parseInt(_0x31459f(0xfd)) / 0x1) *
          (parseInt(_0x31459f(0x104)) / 0x2) +
        parseInt(_0x31459f(0xf9)) / 0x3 +
        parseInt(_0x31459f(0xfa)) / 0x4 +
        (parseInt(_0x31459f(0xf7)) / 0x5) * (parseInt(_0x31459f(0xf8)) / 0x6) +
        (parseInt(_0x31459f(0xf6)) / 0x7) *
          (-parseInt(_0x31459f(0x103)) / 0x8) +
        (-parseInt(_0x31459f(0xfc)) / 0x9) * (parseInt(_0x31459f(0xfe)) / 0xa) +
        (parseInt(_0x31459f(0x102)) / 0xb) * (parseInt(_0x31459f(0xff)) / 0xc);
      if (_0x54519a === _0xc55190) break;
      else _0x256963["push"](_0x256963["shift"]());
    } catch (_0x273950) {
      _0x256963["push"](_0x256963["shift"]());
    }
  }
})(_0xdf4d, 0x6b83b);
import { Router } from "express";
import _0x470536 from "../routes/sessionsRoute.js";
import _0x2a5885 from "../routes/chatsRoute.js";
import _0x4c4e80 from "../routes/groupsRoute.js";
function _0x68dd(_0x2fdfe0, _0x365f20) {
  const _0xdf4dd7 = _0xdf4d();
  return (
    (_0x68dd = function (_0x68ddc7, _0x3f969f) {
      _0x68ddc7 = _0x68ddc7 - 0xf6;
      let _0x329ba1 = _0xdf4dd7[_0x68ddc7];
      return _0x329ba1;
    }),
    _0x68dd(_0x2fdfe0, _0x365f20)
  );
}
import _0x2fd97f from "./response.js";
const router = Router();
router[_0x460aaa(0x100)]("/sessions", _0x470536),
  router[_0x460aaa(0x100)](_0x460aaa(0x101), _0x2a5885),
  router["use"]("/groups", _0x4c4e80),
  router[_0x460aaa(0xfb)]("*", (_0x34e421, _0x59b763) => {
    const _0x48b183 = _0x460aaa;
    _0x2fd97f(_0x59b763, 0x194, ![], _0x48b183(0x105));
  });
function _0xdf4d() {
  const _0x1ba20e = [
    "3060491iGDMLA",
    "10qbaehE",
    "2039874eHxmRF",
    "2203521AkDqxN",
    "514396BGkrGh",
    "all",
    "126WKBgec",
    "349nxUEGM",
    "548380WMWpDe",
    "36CYqcVF",
    "use",
    "/chats",
    "2514556cbJKDh",
    "8uhnjwF",
    "3344jeFBuM",
    "The\x20requested\x20url\x20cannot\x20be\x20found.",
  ];
  _0xdf4d = function () {
    return _0x1ba20e;
  };
  return _0xdf4d();
}
export default router;
