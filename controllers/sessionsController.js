(function (_0x563d87, _0x25621a) {
  const _0x59fe44 = _0x17d8,
    _0x5669ae = _0x563d87();
  while (!![]) {
    try {
      const _0x1e7192 =
        (-parseInt(_0x59fe44(0xa1)) / 0x1) * (parseInt(_0x59fe44(0x8d)) / 0x2) +
        -parseInt(_0x59fe44(0xa6)) / 0x3 +
        -parseInt(_0x59fe44(0x9d)) / 0x4 +
        (parseInt(_0x59fe44(0xa3)) / 0x5) * (parseInt(_0x59fe44(0x9b)) / 0x6) +
        (parseInt(_0x59fe44(0xa9)) / 0x7) * (parseInt(_0x59fe44(0x93)) / 0x8) +
        -parseInt(_0x59fe44(0x9e)) / 0x9 +
        (-parseInt(_0x59fe44(0xa7)) / 0xa) * (-parseInt(_0x59fe44(0xa8)) / 0xb);
      if (_0x1e7192 === _0x25621a) break;
      else _0x5669ae["push"](_0x5669ae["shift"]());
    } catch (_0x50d04) {
      _0x5669ae["push"](_0x5669ae["shift"]());
    }
  }
})(_0xa09d, 0x35a01);
function _0x17d8(_0x3edad2, _0x457891) {
  const _0xa09de9 = _0xa09d();
  return (
    (_0x17d8 = function (_0x17d8c7, _0x2c2ff3) {
      _0x17d8c7 = _0x17d8c7 - 0x8c;
      let _0xe155be = _0xa09de9[_0x17d8c7];
      return _0xe155be;
    }),
    _0x17d8(_0x3edad2, _0x457891)
  );
}
import {
  isSessionExists,
  createSession,
  getSession,
  deleteSession,
} from "./../models/whatsapp.js";
function _0xa09d() {
  const _0x1b8d47 = [
    "connected",
    "disconnecting",
    "image",
    "1608952fpMmlq",
    "body",
    "isLegacy",
    "readyState",
    "Session\x20already\x20exists,\x20please\x20use\x20another\x20id.",
    "The\x20session\x20has\x20been\x20successfully\x20deleted.",
    "undefined",
    "profilePictureUrl",
    "6978rldUfD",
    "user",
    "1029320FxIAuR",
    "3832443MDvHLO",
    "true",
    "sessionId",
    "6963BxAuak",
    "legacy",
    "740WSXErU",
    "state",
    "params",
    "688524cvupPB",
    "1058480upmjFF",
    "110zDkWkg",
    "7IGCQCp",
    "Session\x20found.",
    "logout",
    "connecting",
    "86SFIhAz",
    "locals",
    "disconnected",
  ];
  _0xa09d = function () {
    return _0x1b8d47;
  };
  return _0xa09d();
}
import _0x1f72f6 from "./../models/response.js";
const find = (_0x6abc9f, _0x37ffd2) => {
    const _0x4ce51c = _0x17d8;
    _0x1f72f6(_0x37ffd2, 0xc8, !![], _0x4ce51c(0xaa));
  },
  status = async (_0x4cdc78, _0x309998) => {
    const _0x4f3f5f = _0x17d8,
      _0x5ae566 = [
        _0x4f3f5f(0x8c),
        "connected",
        _0x4f3f5f(0x91),
        _0x4f3f5f(0x8f),
      ],
      _0x5490e3 = getSession(_0x309998[_0x4f3f5f(0x8e)][_0x4f3f5f(0xa0)]);
    let _0xf25662 = _0x5ae566[_0x5490e3["ws"][_0x4f3f5f(0x96)]];
    (_0xf25662 =
      _0xf25662 === _0x4f3f5f(0x90) &&
      typeof (_0x5490e3[_0x4f3f5f(0x95)]
        ? _0x5490e3[_0x4f3f5f(0xa4)][_0x4f3f5f(0xa2)][_0x4f3f5f(0x9c)]
        : _0x5490e3[_0x4f3f5f(0x9c)]) !== _0x4f3f5f(0x99)
        ? "authenticated"
        : _0xf25662),
      _0x1f72f6(_0x309998, 0xc8, !![], "", {
        status: _0xf25662,
        session: {
          user: _0x5490e3[_0x4f3f5f(0x9c)],
          picture: await _0x5490e3[_0x4f3f5f(0x9a)](
            _0x5490e3[_0x4f3f5f(0x9c)]["id"],
            _0x4f3f5f(0x92)
          ),
        },
      });
  },
  add = (_0x3784a1, _0x9e243d) => {
    const _0x4bf567 = _0x17d8,
      { id: _0x41f238, isLegacy: _0x3fb598 } = _0x3784a1[_0x4bf567(0x94)],
      _0x5ad8e7 = getSession(_0x41f238);
    if (isSessionExists(_0x41f238))
      return _0x1f72f6(_0x9e243d, 0x199, ![], _0x4bf567(0x97));
    createSession(_0x41f238, _0x3fb598 === _0x4bf567(0x9f), _0x9e243d);
  },
  del = async (_0x5be83f, _0xda0d88) => {
    const _0x52b1c8 = _0x17d8,
      { id: _0x58af67 } = _0x5be83f[_0x52b1c8(0xa5)],
      _0x3b5550 = getSession(_0x58af67);
    try {
      await _0x3b5550[_0x52b1c8(0xab)]();
    } catch {
    } finally {
      deleteSession(_0x58af67, _0x3b5550[_0x52b1c8(0x95)]);
    }
    _0x1f72f6(_0xda0d88, 0xc8, !![], _0x52b1c8(0x98));
  };
export { find, status, add, del };
