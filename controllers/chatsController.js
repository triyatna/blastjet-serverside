function _0x1cbb() {
  const _0x20e27c = [
    "organization",
    "BEGIN:VCARD\x0a",
    "2611224cQIlfZ",
    "Success\x20get\x20list\x20contact\x20chat\x20message",
    "sessionId",
    "FN:",
    "doc",
    "237168fjYKbR",
    "zip",
    "data",
    "61898upFIXz",
    "application/zip",
    "media",
    "Failed\x20to\x20send\x20the\x20message.",
    "The\x20receiver\x20number\x20is\x20not\x20exists.",
    "type",
    "All\x20messages\x20has\x20been\x20successfully\x20sent.",
    "mimetype",
    "image",
    "fullname",
    "1608792ZXulCS",
    "locals",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "24KgkDHN",
    "The\x20message\x20has\x20been\x20successfully\x20sent.",
    "\x0aORG:",
    "text",
    "pdf",
    "89262BccENN",
    "footer",
    "xls",
    "document",
    "Failed\x20to\x20send\x20all\x20messages.",
    "filename",
    "100unLCSQ",
    "true",
    "application/excel",
    "body",
    "application/pdf",
    "xlsx",
    "entries",
    "phone",
    "audio",
    "push",
    "receiver",
    "1151036pXMumg",
    "length",
    "audio/mp4",
    "155713REhIKt",
    "url",
    ";\x0aTEL;type=CELL;type=VOICE;waid=",
    "The\x20receiver\x20number\x20is\x20valid",
    "query",
    "END:VCARD",
    "40Zaoyaj",
  ];
  _0x1cbb = function () {
    return _0x20e27c;
  };
  return _0x1cbb();
}
(function (_0x2b8843, _0x5f7f82) {
  const _0x152945 = _0x29d5,
    _0x4d774e = _0x2b8843();
  while (!![]) {
    try {
      const _0x19ffe6 =
        parseInt(_0x152945(0x1a3)) / 0x1 +
        (-parseInt(_0x152945(0x17d)) / 0x2) *
          (parseInt(_0x152945(0x18a)) / 0x3) +
        parseInt(_0x152945(0x1a0)) / 0x4 +
        (parseInt(_0x152945(0x195)) / 0x5) *
          (parseInt(_0x152945(0x18f)) / 0x6) +
        -parseInt(_0x152945(0x1ac)) / 0x7 +
        parseInt(_0x152945(0x187)) / 0x8 +
        (-parseInt(_0x152945(0x17a)) / 0x9) *
          (parseInt(_0x152945(0x1a9)) / 0xa);
      if (_0x19ffe6 === _0x5f7f82) break;
      else _0x4d774e["push"](_0x4d774e["shift"]());
    } catch (_0x3a9a0d) {
      _0x4d774e["push"](_0x4d774e["shift"]());
    }
  }
})(_0x1cbb, 0x34c0f);
import {
  getSession,
  getChatList,
  isExists,
  sendMessage,
  formatPhone,
} from "./../models/whatsapp.js";
import _0xd6f33d from "./../models/response.js";
const getList = (_0x5f1129, _0x5ea68e) => {
    const _0x2be2d9 = _0x29d5;
    return _0xd6f33d(
      _0x5ea68e,
      0xc8,
      !![],
      _0x2be2d9(0x1ad),
      getChatList(_0x5ea68e[_0x2be2d9(0x188)][_0x2be2d9(0x1ae)])
    );
  },
  checkJid = async (_0x133f07, _0x2fe269) => {
    const _0x3f1a64 = _0x29d5,
      _0x11c401 = getSession(_0x2fe269["locals"][_0x3f1a64(0x1ae)]),
      _0x4e1b1d = _0x133f07[_0x3f1a64(0x1a7)]["jid"],
      _0x17a7f1 = await isExists(_0x11c401, _0x4e1b1d);
    if (!_0x17a7f1)
      return _0xd6f33d(
        _0x2fe269,
        0x190,
        ![],
        "The\x20receiver\x20number\x20is\x20not\x20exists."
      );
    return _0xd6f33d(_0x2fe269, 0xc8, !![], _0x3f1a64(0x1a6));
  },
  sendText = async (_0x2bf84e, _0x23f536) => {
    const _0x505f04 = _0x29d5,
      _0x48fd4d = getSession(_0x23f536[_0x505f04(0x188)][_0x505f04(0x1ae)]),
      _0x4e3116 = formatPhone(_0x2bf84e[_0x505f04(0x198)][_0x505f04(0x19f)]),
      { message: _0x89a6f5 } = _0x2bf84e[_0x505f04(0x198)];
    try {
      const _0x15440e = await isExists(_0x48fd4d, _0x4e3116);
      if (!_0x15440e) return _0xd6f33d(_0x23f536, 0x190, ![], _0x505f04(0x181));
      await sendMessage(_0x48fd4d, _0x4e3116, _0x89a6f5, 0x0),
        _0xd6f33d(
          _0x23f536,
          0xc8,
          !![],
          "The\x20message\x20has\x20been\x20successfully\x20sent."
        );
    } catch {
      _0xd6f33d(_0x23f536, 0x1f4, ![], _0x505f04(0x180));
    }
  },
  sendVCard = async (_0xc3a300, _0xab86ea) => {
    const _0x4c84be = _0x29d5,
      _0x3f16d8 = getSession(_0xab86ea["locals"][_0x4c84be(0x1ae)]),
      _0xa4f79b = formatPhone(_0xc3a300["body"][_0x4c84be(0x19f)]),
      { message: _0x57398a } = _0xc3a300[_0x4c84be(0x198)];
    try {
      const _0x363081 = await isExists(_0x3f16d8, _0xa4f79b);
      if (!_0x363081) return _0xd6f33d(_0xab86ea, 0x190, ![], _0x4c84be(0x181));
      const _0x92ea5d =
        _0x4c84be(0x1ab) +
        "VERSION:3.0\x0a" +
        _0x4c84be(0x178) +
        _0x57398a[_0x4c84be(0x186)] +
        _0x4c84be(0x18c) +
        _0x57398a[_0x4c84be(0x1aa)] +
        _0x4c84be(0x1a5) +
        _0x57398a["phone"] +
        ":+" +
        _0x57398a[_0x4c84be(0x19c)] +
        "\x0a" +
        _0x4c84be(0x1a8);
      await sendMessage(
        _0x3f16d8,
        _0xa4f79b,
        {
          contacts: {
            displayName: _0x57398a[_0x4c84be(0x186)],
            contacts: [{ vcard: _0x92ea5d }],
          },
        },
        0x0
      ),
        _0xd6f33d(_0xab86ea, 0xc8, !![], _0x4c84be(0x18b));
    } catch {
      _0xd6f33d(_0xab86ea, 0x1f4, ![], _0x4c84be(0x180));
    }
  },
  sendButton = async (_0x5a9d96, _0x259904) => {
    const _0x50e599 = _0x29d5,
      _0x343588 = getSession(_0x259904[_0x50e599(0x188)][_0x50e599(0x1ae)]),
      _0x4995d6 = formatPhone(_0x5a9d96[_0x50e599(0x198)]["receiver"]),
      { message: _0x432528 } = _0x5a9d96[_0x50e599(0x198)],
      { button: _0x23b3b1 } = _0x5a9d96[_0x50e599(0x198)];
    try {
      const _0x211171 = await isExists(_0x343588, _0x4995d6);
      if (!_0x211171) return _0xd6f33d(_0x259904, 0x190, ![], _0x50e599(0x181));
      let _0x419b2b;
      switch (_0x23b3b1[_0x50e599(0x1a1)]) {
        case 0x1:
          _0x419b2b = [
            {
              buttonId: _0x23b3b1[0x0][_0x50e599(0x17c)],
              buttonText: { displayText: _0x23b3b1[0x0][_0x50e599(0x18d)] },
              type: 0x1,
            },
          ];
          break;
        case 0x2:
          _0x419b2b = [
            {
              buttonId: _0x23b3b1[0x0]["data"],
              buttonText: { displayText: _0x23b3b1[0x0][_0x50e599(0x18d)] },
              type: 0x1,
            },
            {
              buttonId: _0x23b3b1[0x1]["data"],
              buttonText: { displayText: _0x23b3b1[0x1][_0x50e599(0x18d)] },
              type: 0x1,
            },
          ];
          break;
        case 0x3:
          _0x419b2b = [
            {
              buttonId: _0x23b3b1[0x0][_0x50e599(0x17c)],
              buttonText: { displayText: _0x23b3b1[0x0][_0x50e599(0x18d)] },
              type: 0x1,
            },
            {
              buttonId: _0x23b3b1[0x1]["data"],
              buttonText: { displayText: _0x23b3b1[0x1][_0x50e599(0x18d)] },
              type: 0x1,
            },
            {
              buttonId: _0x23b3b1[0x2][_0x50e599(0x17c)],
              buttonText: { displayText: _0x23b3b1[0x2]["text"] },
              type: 0x1,
            },
          ];
          break;
        default:
          _0x419b2b = [
            {
              buttonId: "error",
              buttonText: { displayText: "error" },
              type: 0x1,
            },
          ];
      }
      if (_0x432528[_0x50e599(0x17f)] === _0x50e599(0x196)) {
        if (_0x432528[_0x50e599(0x1a4)] === "")
          _0xd6f33d(_0x259904, 0x1f4, ![], _0x50e599(0x180));
        else {
          const _0x530a9e = {
            image: { url: _0x432528[_0x50e599(0x1a4)] },
            caption: _0x432528[_0x50e599(0x18d)],
            footer: _0x432528[_0x50e599(0x190)],
            buttons: _0x419b2b,
            headerType: 0x4,
            viewOnce: !![],
          };
          await sendMessage(_0x343588, _0x4995d6, _0x530a9e, 0x0),
            _0xd6f33d(
              _0x259904,
              0xc8,
              !![],
              "The\x20message\x20has\x20been\x20successfully\x20sent."
            );
        }
      } else {
        const _0x30887 = {
          text: _0x432528[_0x50e599(0x18d)],
          footer: _0x432528[_0x50e599(0x190)],
          buttons: _0x419b2b,
          headerType: 0x1,
          viewOnce: !![],
        };
        await sendMessage(_0x343588, _0x4995d6, _0x30887, 0x0),
          _0xd6f33d(_0x259904, 0xc8, !![], _0x50e599(0x18b));
      }
    } catch {
      _0xd6f33d(_0x259904, 0x1f4, ![], _0x50e599(0x180));
    }
  },
  sendButtonTemp = async (_0x25f97f, _0x428f26) => {
    const _0x5d86b8 = _0x29d5,
      _0x526d68 = getSession(_0x428f26[_0x5d86b8(0x188)][_0x5d86b8(0x1ae)]),
      _0x42c5f0 = formatPhone(_0x25f97f[_0x5d86b8(0x198)][_0x5d86b8(0x19f)]),
      { message: _0x1d3866 } = _0x25f97f[_0x5d86b8(0x198)],
      { button: _0x30ddb3 } = _0x25f97f[_0x5d86b8(0x198)];
    try {
      const _0x4c2adc = await isExists(_0x526d68, _0x42c5f0);
      if (!_0x4c2adc) return _0xd6f33d(_0x428f26, 0x190, ![], _0x5d86b8(0x181));
      let _0x19b993 = [];
      if (_0x30ddb3[0x0]) {
        if (_0x30ddb3[0x0][_0x5d86b8(0x182)] == 0x1)
          _0x19b993 = [
            ..._0x19b993,
            {
              index: 0x1,
              urlButton: {
                displayText: _0x30ddb3[0x0][_0x5d86b8(0x18d)],
                url: _0x30ddb3[0x0][_0x5d86b8(0x17c)],
              },
            },
          ];
        else {
          if (_0x30ddb3[0x0][_0x5d86b8(0x182)] == 0x2)
            _0x19b993 = [
              ..._0x19b993,
              {
                index: 0x1,
                callButton: {
                  displayText: _0x30ddb3[0x0]["text"],
                  phoneNumber: _0x30ddb3[0x0][_0x5d86b8(0x17c)],
                },
              },
            ];
          else
            _0x30ddb3[0x0][_0x5d86b8(0x182)] == 0x0 &&
              (_0x19b993 = [
                ..._0x19b993,
                {
                  index: 0x1,
                  quickReplyButton: {
                    displayText: _0x30ddb3[0x0][_0x5d86b8(0x18d)],
                    id: _0x30ddb3[0x0][_0x5d86b8(0x17c)],
                  },
                },
              ]);
        }
      }
      if (_0x30ddb3[0x1]) {
        if (_0x30ddb3[0x1][_0x5d86b8(0x182)] == 0x1)
          _0x19b993 = [
            ..._0x19b993,
            {
              index: 0x2,
              urlButton: {
                displayText: _0x30ddb3[0x1]["text"],
                url: _0x30ddb3[0x1][_0x5d86b8(0x17c)],
              },
            },
          ];
        else {
          if (_0x30ddb3[0x1][_0x5d86b8(0x182)] == 0x2)
            _0x19b993 = [
              ..._0x19b993,
              {
                index: 0x2,
                callButton: {
                  displayText: _0x30ddb3[0x1][_0x5d86b8(0x18d)],
                  phoneNumber: _0x30ddb3[0x1]["data"],
                },
              },
            ];
          else
            _0x30ddb3[0x1][_0x5d86b8(0x182)] == 0x0 &&
              (_0x19b993 = [
                ..._0x19b993,
                {
                  index: 0x2,
                  quickReplyButton: {
                    displayText: _0x30ddb3[0x1][_0x5d86b8(0x18d)],
                    id: _0x30ddb3[0x1][_0x5d86b8(0x17c)],
                  },
                },
              ]);
        }
      }
      if (_0x30ddb3[0x2]) {
        if (_0x30ddb3[0x2]["type"] == 0x1)
          _0x19b993 = [
            ..._0x19b993,
            {
              index: 0x3,
              urlButton: {
                displayText: _0x30ddb3[0x2]["text"],
                url: _0x30ddb3[0x2][_0x5d86b8(0x17c)],
              },
            },
          ];
        else {
          if (_0x30ddb3[0x2][_0x5d86b8(0x182)] == 0x2)
            _0x19b993 = [
              ..._0x19b993,
              {
                index: 0x3,
                callButton: {
                  displayText: _0x30ddb3[0x2][_0x5d86b8(0x18d)],
                  phoneNumber: _0x30ddb3[0x2][_0x5d86b8(0x17c)],
                },
              },
            ];
          else
            _0x30ddb3[0x2][_0x5d86b8(0x182)] == 0x0 &&
              (_0x19b993 = [
                ..._0x19b993,
                {
                  index: 0x3,
                  quickReplyButton: {
                    displayText: _0x30ddb3[0x2][_0x5d86b8(0x18d)],
                    id: _0x30ddb3[0x2][_0x5d86b8(0x17c)],
                  },
                },
              ]);
        }
      }
      if (_0x1d3866[_0x5d86b8(0x17f)] === _0x5d86b8(0x196)) {
        if (_0x1d3866[_0x5d86b8(0x1a4)] === "")
          _0xd6f33d(_0x428f26, 0x1f4, ![], _0x5d86b8(0x180));
        else {
          const _0x985f75 = {
            image: { url: _0x1d3866["url"] },
            caption: _0x1d3866[_0x5d86b8(0x18d)],
            footer: _0x1d3866[_0x5d86b8(0x190)],
            templateButtons: _0x19b993,
            viewOnce: !![],
          };
          await sendMessage(_0x526d68, _0x42c5f0, _0x985f75, 0x0),
            _0xd6f33d(
              _0x428f26,
              0xc8,
              !![],
              "The\x20message\x20has\x20been\x20successfully\x20sent."
            );
        }
      } else {
        const _0x1b7a82 = {
          text: _0x1d3866["text"],
          footer: _0x1d3866[_0x5d86b8(0x190)],
          templateButtons: _0x19b993,
          viewOnce: !![],
        };
        await sendMessage(_0x526d68, _0x42c5f0, _0x1b7a82, 0x0),
          _0xd6f33d(_0x428f26, 0xc8, !![], _0x5d86b8(0x18b));
      }
    } catch {
      _0xd6f33d(_0x428f26, 0x1f4, ![], _0x5d86b8(0x180));
    }
  },
  sendBulk = async (_0x838128, _0xc819c8) => {
    const _0xd2c336 = _0x29d5,
      _0x502617 = getSession(_0xc819c8["locals"][_0xd2c336(0x1ae)]),
      _0x33679b = [];
    for (const [_0x116c1d, _0x2f3e7f] of _0x838128[_0xd2c336(0x198)][
      _0xd2c336(0x19b)
    ]()) {
      let {
        receiver: _0x1c858b,
        message: _0x269ef8,
        delay: _0x17d8c3,
      } = _0x2f3e7f;
      if (!_0x1c858b || !_0x269ef8) {
        _0x33679b[_0xd2c336(0x19e)](_0x116c1d);
        continue;
      }
      (!_0x17d8c3 || isNaN(_0x17d8c3)) && (_0x17d8c3 = 0x3e8);
      _0x1c858b = formatPhone(_0x1c858b);
      try {
        const _0x470e50 = await isExists(_0x502617, _0x1c858b);
        if (!_0x470e50) {
          _0x33679b[_0xd2c336(0x19e)](_0x116c1d);
          continue;
        }
        await sendMessage(_0x502617, _0x1c858b, _0x269ef8, _0x17d8c3);
      } catch {
        _0x33679b[_0xd2c336(0x19e)](_0x116c1d);
      }
    }
    if (_0x33679b[_0xd2c336(0x1a1)] === 0x0)
      return _0xd6f33d(_0xc819c8, 0xc8, !![], _0xd2c336(0x183));
    const _0x3f8100 =
      _0x33679b[_0xd2c336(0x1a1)] ===
      _0x838128[_0xd2c336(0x198)][_0xd2c336(0x1a1)];
    _0xd6f33d(
      _0xc819c8,
      _0x3f8100 ? 0x1f4 : 0xc8,
      !_0x3f8100,
      _0x3f8100
        ? _0xd2c336(0x193)
        : "Some\x20messages\x20has\x20been\x20successfully\x20sent.",
      { errors: _0x33679b }
    );
  },
  sendMessageMedia = async (_0x25e69e, _0x1abc3a) => {
    const _0x1ddc32 = _0x29d5,
      _0x163d30 = getSession(_0x1abc3a[_0x1ddc32(0x188)]["sessionId"]),
      _0x1f0154 = formatPhone(_0x25e69e[_0x1ddc32(0x198)]["receiver"]),
      { message: _0x152e2b } = _0x25e69e[_0x1ddc32(0x198)];
    try {
      const _0x1ad8ce = await isExists(_0x163d30, _0x1f0154);
      if (!_0x1ad8ce) return _0xd6f33d(_0x1abc3a, 0x190, ![], _0x1ddc32(0x181));
      if (_0x152e2b[_0x1ddc32(0x182)] === _0x1ddc32(0x185))
        await sendMessage(
          _0x163d30,
          _0x1f0154,
          {
            image: { url: _0x152e2b[_0x1ddc32(0x1a4)] },
            caption: _0x152e2b[_0x1ddc32(0x18d)],
          },
          0x0
        );
      else {
        if (_0x152e2b[_0x1ddc32(0x182)] === _0x1ddc32(0x192)) {
          let _0x47b0dc;
          switch (_0x152e2b[_0x1ddc32(0x184)]) {
            case _0x1ddc32(0x18e):
              _0x47b0dc = "application/pdf";
              break;
            case _0x1ddc32(0x191):
              _0x47b0dc = _0x1ddc32(0x197);
              break;
            case _0x1ddc32(0x19a):
              _0x47b0dc = _0x1ddc32(0x189);
              break;
            case "docx":
              _0x47b0dc =
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
              break;
            case _0x1ddc32(0x17b):
              _0x47b0dc = _0x1ddc32(0x17e);
              break;
            case _0x1ddc32(0x179):
              _0x47b0dc = "application/msword";
              break;
            default:
              _0x47b0dc = _0x1ddc32(0x199);
          }
          await sendMessage(
            _0x163d30,
            _0x1f0154,
            {
              document: { url: _0x152e2b[_0x1ddc32(0x1a4)] },
              fileName:
                _0x152e2b[_0x1ddc32(0x194)] + "." + _0x152e2b[_0x1ddc32(0x184)],
              mimetype: _0x47b0dc,
              caption: _0x152e2b[_0x1ddc32(0x18d)],
            },
            0x0
          );
        } else
          _0x152e2b[_0x1ddc32(0x182)] === _0x1ddc32(0x19d)
            ? await sendMessage(
                _0x163d30,
                _0x1f0154,
                {
                  audio: { url: _0x152e2b["url"] },
                  mimetype: _0x1ddc32(0x1a2),
                  caption: _0x152e2b[_0x1ddc32(0x18d)],
                },
                0x0
              )
            : await sendMessage(
                _0x163d30,
                _0x1f0154,
                { text: _0x152e2b[_0x1ddc32(0x18d)] },
                0x0
              );
      }
      _0xd6f33d(_0x1abc3a, 0xc8, !![], _0x1ddc32(0x18b));
    } catch {
      _0xd6f33d(_0x1abc3a, 0x1f4, ![], _0x1ddc32(0x180));
    }
  };
function _0x29d5(_0x28fb80, _0x354f68) {
  const _0x1cbbee = _0x1cbb();
  return (
    (_0x29d5 = function (_0x29d51d, _0x2ea5ac) {
      _0x29d51d = _0x29d51d - 0x178;
      let _0x53bda4 = _0x1cbbee[_0x29d51d];
      return _0x53bda4;
    }),
    _0x29d5(_0x28fb80, _0x354f68)
  );
}
export {
  getList,
  checkJid,
  sendText,
  sendVCard,
  sendButton,
  sendButtonTemp,
  sendBulk,
  sendMessageMedia,
};
