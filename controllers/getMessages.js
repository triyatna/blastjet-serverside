(function (_0x358e55, _0x26d256) {
  const _0x49fc1a = _0x49a5,
    _0x2f0533 = _0x358e55();
  while (!![]) {
    try {
      const _0x4c7cb3 =
        (-parseInt(_0x49fc1a(0x10d)) / 0x1) *
          (-parseInt(_0x49fc1a(0xfb)) / 0x2) +
        (-parseInt(_0x49fc1a(0x107)) / 0x3) *
          (parseInt(_0x49fc1a(0xfd)) / 0x4) +
        (-parseInt(_0x49fc1a(0x10b)) / 0x5) *
          (parseInt(_0x49fc1a(0x101)) / 0x6) +
        (parseInt(_0x49fc1a(0x105)) / 0x7) *
          (parseInt(_0x49fc1a(0x100)) / 0x8) +
        -parseInt(_0x49fc1a(0xff)) / 0x9 +
        parseInt(_0x49fc1a(0x109)) / 0xa +
        parseInt(_0x49fc1a(0x106)) / 0xb;
      if (_0x4c7cb3 === _0x26d256) break;
      else _0x2f0533["push"](_0x2f0533["shift"]());
    } catch (_0x1936d9) {
      _0x2f0533["push"](_0x2f0533["shift"]());
    }
  }
})(_0x5c7a, 0x82a90);
import { getSession } from "../models/whatsapp.js";
function _0x49a5(_0x40c4cd, _0x537f79) {
  const _0x5c7aec = _0x5c7a();
  return (
    (_0x49a5 = function (_0x49a510, _0x2c2a8f) {
      _0x49a510 = _0x49a510 - 0xfb;
      let _0x2da772 = _0x5c7aec[_0x49a510];
      return _0x2da772;
    }),
    _0x49a5(_0x40c4cd, _0x537f79)
  );
}
import _0x6882e2 from "./../models/response.js";
const getMessages = async (_0x379325, _0x1ddac3) => {
  const _0x4f734b = _0x49a5,
    _0x165019 = getSession(_0x1ddac3[_0x4f734b(0x102)][_0x4f734b(0xfe)]),
    { jid: _0x30e94f } = _0x379325["params"],
    {
      limit: limit = 0x19,
      cursor_id: cursor_id = null,
      cursor_fromMe: cursor_fromMe = null,
    } = _0x379325[_0x4f734b(0x108)],
    _0x542ec1 = {};
  cursor_id &&
    (_0x542ec1[_0x4f734b(0xfc)] = {
      id: cursor_id,
      fromMe: Boolean(cursor_fromMe && cursor_fromMe === _0x4f734b(0x10a)),
    });
  try {
    let _0x39e646;
    const _0x3baf57 = "before" in _0x542ec1 ? _0x542ec1 : null;
    _0x165019[_0x4f734b(0x103)]
      ? (_0x39e646 = await _0x165019["fetchMessagesFromWA"](
          _0x30e94f,
          limit,
          _0x3baf57
        ))
      : (_0x39e646 = await _0x165019[_0x4f734b(0x10c)][_0x4f734b(0x104)](
          _0x30e94f,
          limit,
          _0x3baf57
        )),
      _0x6882e2(_0x1ddac3, 0xc8, !![], "", _0x39e646);
  } catch {
    _0x6882e2(_0x1ddac3, 0x1f4, ![], _0x4f734b(0x10e));
  }
};
function _0x5c7a() {
  const _0x3fcab8 = [
    "1366064MUaIOt",
    "1110mCkUwL",
    "locals",
    "isLegacy",
    "loadMessages",
    "35rcZoia",
    "1008491dUJyQB",
    "3mcXQqR",
    "query",
    "6229420qkOPtn",
    "true",
    "21550bGaadb",
    "store",
    "969963gqoHGI",
    "Failed\x20to\x20load\x20messages.",
    "2xcEmhb",
    "before",
    "876636iJnPSk",
    "sessionId",
    "8880147etDjTr",
  ];
  _0x5c7a = function () {
    return _0x3fcab8;
  };
  return _0x5c7a();
}
export default getMessages;
