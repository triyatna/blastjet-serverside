const _0x39b82d = _0x1706;
(function (_0x1ae39d, _0x340966) {
  const _0x4e8487 = _0x1706,
    _0x20be50 = _0x1ae39d();
  while (!![]) {
    try {
      const _0x575cd4 =
        -parseInt(_0x4e8487(0x1b8)) / 0x1 +
        (-parseInt(_0x4e8487(0x1a7)) / 0x2) *
          (-parseInt(_0x4e8487(0x193)) / 0x3) +
        -parseInt(_0x4e8487(0x18c)) / 0x4 +
        -parseInt(_0x4e8487(0x191)) / 0x5 +
        (-parseInt(_0x4e8487(0x19f)) / 0x6) *
          (-parseInt(_0x4e8487(0x192)) / 0x7) +
        (-parseInt(_0x4e8487(0x1be)) / 0x8) *
          (-parseInt(_0x4e8487(0x19c)) / 0x9) +
        (-parseInt(_0x4e8487(0x1b3)) / 0xa) *
          (parseInt(_0x4e8487(0x19d)) / 0xb);
      if (_0x575cd4 === _0x340966) break;
      else _0x20be50["push"](_0x20be50["shift"]());
    } catch (_0x47c97c) {
      _0x20be50["push"](_0x20be50["shift"]());
    }
  }
})(_0x2abe, 0x22154);
const crypto = require("crypto"),
  fs = require("fs"),
  path = require(_0x39b82d(0x1ac)),
  url = require("url"),
  { promisify } = require("util"),
  readFile = promisify(fs["readFile"]),
  writeFile = promisify(fs["writeFile"]),
  NodeRSA = require("node-rsa"),
  AES = require(_0x39b82d(0x1a4)),
  SHA256 = require(_0x39b82d(0x1bc));
function _0x1706(_0x19c046, _0x5771bb) {
  const _0x2abe77 = _0x2abe();
  return (
    (_0x1706 = function (_0x1706d2, _0x2ea6a8) {
      _0x1706d2 = _0x1706d2 - 0x188;
      let _0x32057c = _0x2abe77[_0x1706d2];
      return _0x32057c;
    }),
    _0x1706(_0x19c046, _0x5771bb)
  );
}
class Encryption {
  constructor(_0x4ac0b0) {
    const _0x50e391 = _0x39b82d;
    (this["key"] = _0x4ac0b0),
      (this[_0x50e391(0x1a6)] = null),
      (this[_0x50e391(0x196)] = null);
  }
  async [_0x39b82d(0x18f)]() {
    const _0x47e7de = _0x39b82d;
    (this[_0x47e7de(0x196)] = new NodeRSA({ b: 0x800 })),
      await writeFile(
        _0x47e7de(0x1ba),
        this["rsa"][_0x47e7de(0x19a)]("pkcs8-private-pem")
      ),
      await writeFile(
        _0x47e7de(0x198),
        this[_0x47e7de(0x196)][_0x47e7de(0x19a)](_0x47e7de(0x18a))
      );
  }
  async ["getPublicKey"]() {
    const _0x3674f0 = _0x39b82d;
    let _0x4ba1b4 = null;
    try {
      _0x4ba1b4 = await readFile(_0x3674f0(0x198));
    } catch (_0x1168ef) {
      console[_0x3674f0(0x1b1)](_0x3674f0(0x189)),
        await this[_0x3674f0(0x18f)](),
        (_0x4ba1b4 = await readFile(_0x3674f0(0x198)));
    }
    return _0x4ba1b4;
  }
  async [_0x39b82d(0x19b)](_0xe77b8c) {
    const _0x411d57 = _0x39b82d;
    !this["rsa"] && (await this[_0x411d57(0x18f)]());
    const _0x406184 = await this[_0x411d57(0x197)](),
      _0x35ea12 = crypto[_0x411d57(0x18d)](
        _0x406184,
        Buffer[_0x411d57(0x1b7)](_0xe77b8c)
      );
    return _0x35ea12[_0x411d57(0x18b)](_0x411d57(0x1a2));
  }
  async [_0x39b82d(0x1b4)](_0x1d342f) {
    const _0x58998d = _0x39b82d,
      _0x3816ea = await readFile(_0x58998d(0x1ba)),
      _0x3ee991 = crypto[_0x58998d(0x194)](
        _0x3816ea,
        Buffer[_0x58998d(0x1b7)](_0x1d342f, _0x58998d(0x1a2))
      );
    return _0x3ee991[_0x58998d(0x18b)]();
  }
  async ["encryptString"](_0x5b594e) {
    const _0x42025b = _0x39b82d;
    !this["aesKey"] &&
      (this[_0x42025b(0x1a6)] =
        crypto["randomBytes"](0x20)[_0x42025b(0x18b)]("hex"));
    const _0x490b5a = AES["encrypt"](_0x5b594e, this[_0x42025b(0x1a6)])[
        "toString"
      ](),
      _0x4edbef = SHA256(this["aesKey"])[_0x42025b(0x18b)](),
      _0x217ad7 = await this["encryptWithRSA"](_0x4edbef);
    return _0x217ad7 + ":" + _0x490b5a;
  }
  async [_0x39b82d(0x1ae)](_0x5a1840) {
    const _0x1612e1 = _0x39b82d,
      [_0xfd9038, _0x4a1a15] = _0x5a1840["split"](":"),
      _0x194fa2 = await this[_0x1612e1(0x1b4)](_0xfd9038),
      _0x1b985f = _0x194fa2[_0x1612e1(0x190)](0x0, 0x20),
      _0x20d76a = AES["decrypt"](_0x4a1a15, _0x1b985f)[_0x1612e1(0x18b)](
        crypto["enc"][_0x1612e1(0x1aa)]
      );
    return _0x20d76a;
  }
  async [_0x39b82d(0x1ab)](_0xfbb991) {
    const _0x530f85 = _0x39b82d,
      _0x420229 = await readFile(_0xfbb991),
      _0x38c558 = await this[_0x530f85(0x1b6)](_0x420229["toString"]()),
      _0x50d37d = SHA256(path[_0x530f85(0x188)](_0xfbb991))[_0x530f85(0x18b)](),
      _0x130eb7 = path[_0x530f85(0x1b9)](
        path[_0x530f85(0x1bb)](_0xfbb991),
        _0x50d37d
      );
    return (
      await writeFile(_0x130eb7, _0x38c558),
      await fs[_0x530f85(0x1a1)][_0x530f85(0x1a5)](_0xfbb991),
      _0x130eb7
    );
  }
  async [_0x39b82d(0x1b0)](_0x495544) {
    const _0x11b3e6 = _0x39b82d,
      _0x1d5b5f = await readFile(_0x495544),
      _0x216d85 = await this[_0x11b3e6(0x18e)](_0x1d5b5f["toString"]()),
      _0x358e4b = path[_0x11b3e6(0x1b9)](
        path[_0x11b3e6(0x1bb)](_0x495544),
        path[_0x11b3e6(0x188)](_0x495544, path[_0x11b3e6(0x1a0)](_0x495544))
      );
    return (
      await writeFile(_0x358e4b, _0x216d85),
      await fs["promises"][_0x11b3e6(0x1a5)](_0x495544),
      _0x358e4b
    );
  }
  async [_0x39b82d(0x1b2)](_0x234eb7) {
    const _0x511d8c = _0x39b82d,
      _0x2dc764 = url[_0x511d8c(0x19e)](_0x234eb7),
      _0x41ff80 = await this[_0x511d8c(0x1b6)](_0x2dc764[_0x511d8c(0x1af)]);
    return (
      (_0x2dc764[_0x511d8c(0x1b5)] =
        "?encrypted=" + encodeURIComponent(_0x41ff80)),
      url["format"](_0x2dc764)
    );
  }
  async [_0x39b82d(0x1bd)](_0x564d42) {
    const _0x290113 = _0x39b82d,
      _0x1c3ab7 = url[_0x290113(0x19e)](_0x564d42, !![]),
      _0x2109d6 = _0x1c3ab7[_0x290113(0x1a3)]["encrypted"];
    if (!_0x2109d6) throw new Error(_0x290113(0x195));
    const _0x540c46 = await this[_0x290113(0x18e)](_0x2109d6),
      _0x3ffbc7 = url["parse"](_0x540c46);
    return (
      (_0x1c3ab7["protocol"] = _0x3ffbc7["protocol"]),
      (_0x1c3ab7["hostname"] = _0x3ffbc7["hostname"]),
      (_0x1c3ab7[_0x290113(0x1a9)] = _0x3ffbc7[_0x290113(0x1a9)]),
      (_0x1c3ab7[_0x290113(0x199)] = _0x3ffbc7[_0x290113(0x199)]),
      (_0x1c3ab7[_0x290113(0x1b5)] = _0x3ffbc7[_0x290113(0x1b5)]),
      (_0x1c3ab7[_0x290113(0x1a8)] = _0x3ffbc7[_0x290113(0x1a8)]),
      url[_0x290113(0x1ad)](_0x1c3ab7)
    );
  }
}
export default Encryption;
function _0x2abe() {
  const _0x34cc68 = [
    "aesKey",
    "110382xqhfVf",
    "hash",
    "port",
    "Utf8",
    "encryptFile",
    "path",
    "format",
    "decryptString",
    "href",
    "decryptFile",
    "error",
    "encryptUrl",
    "75050nETcrp",
    "decryptWithRSA",
    "search",
    "encrypt",
    "from",
    "59877pFMcnG",
    "join",
    "private.pem",
    "dirname",
    "crypto-js/sha256",
    "decryptUrl",
    "40nPpqEQ",
    "basename",
    "Public\x20key\x20not\x20found.\x20Generating\x20new\x20RSA\x20key\x20pair...",
    "pkcs8-public-pem",
    "toString",
    "609728rgCIlp",
    "publicEncrypt",
    "decrypt",
    "generateRSAKey",
    "substr",
    "282495USAqmd",
    "963515eCGKqd",
    "6GCatlW",
    "privateDecrypt",
    "No\x20encrypted\x20URL\x20found.",
    "rsa",
    "getPublicKey",
    "public.pem",
    "pathname",
    "exportKey",
    "encryptWithRSA",
    "491328BviGoS",
    "165clDKWg",
    "parse",
    "6vwSmWW",
    "extname",
    "promises",
    "base64",
    "query",
    "crypto-js/aes",
    "unlink",
  ];
  _0x2abe = function () {
    return _0x34cc68;
  };
  return _0x2abe();
}
