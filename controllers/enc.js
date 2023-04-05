const _0x42d0d5 = _0x3f73;
function _0x2d78() {
  const _0x15f426 = [
    "encryptUrl",
    "enc",
    "1ZpDptM",
    "encryptString",
    "toString",
    "2993968VEfOjR",
    "4290BuZMsX",
    "Utf8",
    "2696AWCexE",
    "13396860lKIXPv",
    "2855196vaXuif",
    "decryptString",
    "key",
    "1222290VfeBoa",
    "806742VidTbt",
    "encrypt",
    "1355214RlSsvw",
    "AES",
    "14aoITMJ",
    "decrypt",
  ];
  _0x2d78 = function () {
    return _0x15f426;
  };
  return _0x2d78();
}
(function (_0x3745b8, _0x2ab769) {
  const _0xef54b2 = _0x3f73,
    _0x1906df = _0x3745b8();
  while (!![]) {
    try {
      const _0x4ce395 =
        (-parseInt(_0xef54b2(0xd6)) / 0x1) *
          (-parseInt(_0xef54b2(0xce)) / 0x2) +
        (-parseInt(_0xef54b2(0xda)) / 0x3) *
          (-parseInt(_0xef54b2(0xdc)) / 0x4) +
        -parseInt(_0xef54b2(0xcd)) / 0x5 +
        (parseInt(_0xef54b2(0xd0)) / 0x6) * (parseInt(_0xef54b2(0xd2)) / 0x7) +
        parseInt(_0xef54b2(0xd9)) / 0x8 +
        parseInt(_0xef54b2(0xca)) / 0x9 +
        -parseInt(_0xef54b2(0xc9)) / 0xa;
      if (_0x4ce395 === _0x2ab769) break;
      else _0x1906df["push"](_0x1906df["shift"]());
    } catch (_0x8499bb) {
      _0x1906df["push"](_0x1906df["shift"]());
    }
  }
})(_0x2d78, 0xe2243);
import _0x300d81 from "crypto";
import _0x18c3b4 from "fs";
function _0x3f73(_0x577706, _0x57d1ee) {
  const _0x2d7876 = _0x2d78();
  return (
    (_0x3f73 = function (_0x3f7306, _0x494924) {
      _0x3f7306 = _0x3f7306 - 0xc9;
      let _0x2e0e44 = _0x2d7876[_0x3f7306];
      return _0x2e0e44;
    }),
    _0x3f73(_0x577706, _0x57d1ee)
  );
}
import _0x3581e1 from "crypto-js";
import { v4 as _0x15ffcb } from "uuid";
class FileEncryptor {}
class Enc {
  constructor(_0x3864c0, _0x1fc79a) {
    const _0x43248b = _0x3f73;
    (this[_0x43248b(0xcc)] = _0x3864c0), (this["iv"] = _0x1fc79a);
  }
  [_0x42d0d5(0xd7)](_0x4b9fa0) {
    const _0x5d8c66 = _0x42d0d5,
      _0x4b7b3b = _0x3581e1[_0x5d8c66(0xd1)]["encrypt"](
        _0x4b9fa0,
        this[_0x5d8c66(0xcc)],
        { iv: this["iv"] }
      );
    return _0x4b7b3b["toString"]();
  }
  [_0x42d0d5(0xcb)](_0x20c1f0) {
    const _0xe5d205 = _0x42d0d5,
      _0x2528f1 = _0x3581e1[_0xe5d205(0xd1)][_0xe5d205(0xd3)](
        _0x20c1f0,
        this["key"],
        { iv: this["iv"] }
      );
    return _0x2528f1["toString"](_0x3581e1[_0xe5d205(0xd5)][_0xe5d205(0xdb)]);
  }
  [_0x42d0d5(0xd4)](_0x312b11) {
    const _0x1e9800 = _0x42d0d5,
      _0x38a2b6 = _0x3581e1[_0x1e9800(0xd1)][_0x1e9800(0xcf)](
        _0x312b11,
        this["key"],
        { iv: this["iv"] }
      );
    return encodeURIComponent(_0x38a2b6["toString"]());
  }
  ["decryptUrl"](_0x57e63f) {
    const _0x408272 = _0x42d0d5,
      _0x1635c8 = _0x3581e1["AES"]["decrypt"](
        decodeURIComponent(_0x57e63f),
        this[_0x408272(0xcc)],
        { iv: this["iv"] }
      );
    return _0x1635c8[_0x408272(0xd8)](_0x3581e1["enc"][_0x408272(0xdb)]);
  }
}
export { Enc, FileEncryptor };
