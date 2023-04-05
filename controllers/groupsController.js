function _0x27fe() {
  const _0x115f33 = [
    "4WbUvBR",
    "footer",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "pdf",
    "locals",
    "65198pEJhEV",
    "url",
    "error",
    "2yUByyZ",
    "1453605hiVqWm",
    "body",
    "819464YlEBPD",
    "filename",
    "doc",
    "application/pdf",
    "mimetype",
    "10748265XIkrEp",
    "image",
    "data",
    "document",
    "type",
    "application/excel",
    "1047558nKLFQp",
    "9LekCwf",
    "params",
    "5809660jgeikJ",
    "xlsx",
    "21iEUSOI",
    "Failed\x20to\x20get\x20group\x20metadata.",
    "Failed\x20to\x20send\x20the\x20message.",
    "zip",
    "application/zip",
    "true",
    "groupMetadata",
    "The\x20message\x20has\x20been\x20successfully\x20sent.",
    "The\x20group\x20is\x20not\x20exists.",
    "length",
    "text",
    "receiver",
    "1045164EpZmad",
    "sessionId",
    "media",
  ];
  _0x27fe = function () {
    return _0x115f33;
  };
  return _0x27fe();
}
(function (_0x3ae37d, _0x26442d) {
  const _0x3b2f0d = _0xa49a,
    _0x175813 = _0x3ae37d();
  while (!![]) {
    try {
      const _0x47e959 =
        (-parseInt(_0x3b2f0d(0x18d)) / 0x1) *
          (-parseInt(_0x3b2f0d(0x18a)) / 0x2) +
        parseInt(_0x3b2f0d(0x1ac)) / 0x3 +
        (-parseInt(_0x3b2f0d(0x1af)) / 0x4) *
          (parseInt(_0x3b2f0d(0x18e)) / 0x5) +
        (-parseInt(_0x3b2f0d(0x19b)) / 0x6) *
          (-parseInt(_0x3b2f0d(0x1a0)) / 0x7) +
        (parseInt(_0x3b2f0d(0x190)) / 0x8) *
          (parseInt(_0x3b2f0d(0x19c)) / 0x9) +
        parseInt(_0x3b2f0d(0x19e)) / 0xa +
        -parseInt(_0x3b2f0d(0x195)) / 0xb;
      if (_0x47e959 === _0x26442d) break;
      else _0x175813["push"](_0x175813["shift"]());
    } catch (_0x5a3c39) {
      _0x175813["push"](_0x175813["shift"]());
    }
  }
})(_0x27fe, 0x562a0);
function _0xa49a(_0x47e441, _0x3a2828) {
  const _0x27fe59 = _0x27fe();
  return (
    (_0xa49a = function (_0xa49ab3, _0x47e8f2) {
      _0xa49ab3 = _0xa49ab3 - 0x186;
      let _0x1e05d6 = _0x27fe59[_0xa49ab3];
      return _0x1e05d6;
    }),
    _0xa49a(_0x47e441, _0x3a2828)
  );
}
import {
  getSession,
  getChatList,
  isExists,
  sendMessage,
  formatGroup,
} from "./../models/whatsapp.js";
import _0x26a543 from "./../models/response.js";
const getList = (_0x321a2a, _0x212561) => {
    const _0x1fa1e3 = _0xa49a;
    return _0x26a543(
      _0x212561,
      0xc8,
      !![],
      "",
      getChatList(_0x212561[_0x1fa1e3(0x189)][_0x1fa1e3(0x1ad)], !![])
    );
  },
  getGroupMetaData = async (_0x177017, _0x1ca339) => {
    const _0x196968 = _0xa49a,
      _0x1186b4 = getSession(_0x1ca339[_0x196968(0x189)][_0x196968(0x1ad)]),
      { jid: _0x4c9e78 } = _0x177017[_0x196968(0x19d)];
    try {
      const _0x47114d = await _0x1186b4[_0x196968(0x1a6)](_0x4c9e78);
      if (!_0x47114d["id"])
        return _0x26a543(_0x1ca339, 0x190, ![], _0x196968(0x1a8));
      _0x26a543(_0x1ca339, 0xc8, !![], "", _0x47114d);
    } catch {
      _0x26a543(_0x1ca339, 0x1f4, ![], _0x196968(0x1a1));
    }
  },
  sendMessages = async (_0x37f02d, _0x10db2b) => {
    const _0x4d948f = _0xa49a,
      _0x3c253a = getSession(_0x10db2b[_0x4d948f(0x189)][_0x4d948f(0x1ad)]),
      _0x2aef99 = formatGroup(_0x37f02d["body"]["receiver"]),
      { message: _0x2057e4 } = _0x37f02d["body"];
    try {
      const _0x271374 = await isExists(_0x3c253a, _0x2aef99, !![]);
      if (!_0x271374) return _0x26a543(_0x10db2b, 0x190, ![], _0x4d948f(0x1a8));
      await sendMessage(_0x3c253a, _0x2aef99, _0x2057e4),
        _0x26a543(_0x10db2b, 0xc8, !![], _0x4d948f(0x1a7));
    } catch {
      _0x26a543(
        _0x10db2b,
        0x1f4,
        ![],
        "Failed\x20to\x20send\x20the\x20message."
      );
    }
  },
  sendMessageMedia = async (_0x6db189, _0x13cbea) => {
    const _0x3061b9 = _0xa49a,
      _0xfdbd48 = getSession(_0x13cbea["locals"][_0x3061b9(0x1ad)]),
      _0x3da773 = formatGroup(_0x6db189["body"][_0x3061b9(0x1ab)]),
      { message: _0x4a5d72 } = _0x6db189[_0x3061b9(0x18f)];
    try {
      const _0x237b51 = await isExists(_0xfdbd48, _0x3da773, !![]);
      if (!_0x237b51)
        return _0x26a543(
          _0x13cbea,
          0x190,
          ![],
          "The\x20group\x20is\x20not\x20exists."
        );
      if (_0x4a5d72["type"] === _0x3061b9(0x196))
        await sendMessage(_0xfdbd48, _0x3da773, {
          image: { url: _0x4a5d72[_0x3061b9(0x18b)] },
          caption: _0x4a5d72[_0x3061b9(0x1aa)],
        });
      else {
        if (_0x4a5d72[_0x3061b9(0x199)] === _0x3061b9(0x198)) {
          let _0x88b85f;
          switch (_0x4a5d72[_0x3061b9(0x194)]) {
            case _0x3061b9(0x188):
              _0x88b85f = _0x3061b9(0x193);
              break;
            case "xls":
              _0x88b85f = _0x3061b9(0x19a);
              break;
            case _0x3061b9(0x19f):
              _0x88b85f =
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
              break;
            case "docx":
              _0x88b85f = _0x3061b9(0x187);
              break;
            case _0x3061b9(0x1a3):
              _0x88b85f = _0x3061b9(0x1a4);
              break;
            case _0x3061b9(0x192):
              _0x88b85f = "application/msword";
              break;
            default:
              _0x88b85f = _0x3061b9(0x193);
          }
          await sendMessage(_0xfdbd48, _0x3da773, {
            document: { url: _0x4a5d72[_0x3061b9(0x18b)] },
            fileName:
              _0x4a5d72[_0x3061b9(0x191)] + "." + _0x4a5d72[_0x3061b9(0x194)],
            mimetype: _0x88b85f,
            caption: _0x4a5d72[_0x3061b9(0x1aa)],
          });
        } else
          _0x4a5d72["type"] === "audio"
            ? await sendMessage(_0xfdbd48, _0x3da773, {
                audio: { url: _0x4a5d72[_0x3061b9(0x18b)] },
                mimetype: "audio/mp4",
                caption: _0x4a5d72[_0x3061b9(0x1aa)],
              })
            : await sendMessage(_0xfdbd48, _0x3da773, {
                text: _0x4a5d72["text"],
              });
      }
      _0x26a543(_0x13cbea, 0xc8, !![], _0x3061b9(0x1a7));
    } catch {
      _0x26a543(_0x13cbea, 0x1f4, ![], _0x3061b9(0x1a2));
    }
  },
  sendButton = async (_0xbd7b26, _0x2588cd) => {
    const _0x5eaa12 = _0xa49a,
      _0x8277f1 = getSession(_0x2588cd["locals"]["sessionId"]),
      _0x2ba73f = formatGroup(_0xbd7b26[_0x5eaa12(0x18f)][_0x5eaa12(0x1ab)]),
      { message: _0x44a457 } = _0xbd7b26[_0x5eaa12(0x18f)],
      { button: _0x65802d } = _0xbd7b26[_0x5eaa12(0x18f)];
    try {
      const _0x3f1908 = await isExists(_0x8277f1, _0x2ba73f, !![]);
      if (!_0x3f1908) return _0x26a543(_0x2588cd, 0x190, ![], _0x5eaa12(0x1a8));
      let _0x363b0f;
      switch (_0x65802d[_0x5eaa12(0x1a9)]) {
        case 0x1:
          _0x363b0f = [
            {
              buttonId: _0x65802d[0x0]["data"],
              buttonText: { displayText: _0x65802d[0x0]["text"] },
              type: 0x1,
            },
          ];
          break;
        case 0x2:
          _0x363b0f = [
            {
              buttonId: _0x65802d[0x0][_0x5eaa12(0x197)],
              buttonText: { displayText: _0x65802d[0x0][_0x5eaa12(0x1aa)] },
              type: 0x1,
            },
            {
              buttonId: _0x65802d[0x1][_0x5eaa12(0x197)],
              buttonText: { displayText: _0x65802d[0x1][_0x5eaa12(0x1aa)] },
              type: 0x1,
            },
          ];
          break;
        case 0x3:
          _0x363b0f = [
            {
              buttonId: _0x65802d[0x0][_0x5eaa12(0x197)],
              buttonText: { displayText: _0x65802d[0x0][_0x5eaa12(0x1aa)] },
              type: 0x1,
            },
            {
              buttonId: _0x65802d[0x1][_0x5eaa12(0x197)],
              buttonText: { displayText: _0x65802d[0x1]["text"] },
              type: 0x1,
            },
            {
              buttonId: _0x65802d[0x2]["data"],
              buttonText: { displayText: _0x65802d[0x2][_0x5eaa12(0x1aa)] },
              type: 0x1,
            },
          ];
          break;
        default:
          _0x363b0f = [
            {
              buttonId: _0x5eaa12(0x18c),
              buttonText: { displayText: _0x5eaa12(0x18c) },
              type: 0x1,
            },
          ];
      }
      if (_0x44a457[_0x5eaa12(0x1ae)] === _0x5eaa12(0x1a5)) {
        if (_0x44a457["url"] === "")
          _0x26a543(_0x2588cd, 0x1f4, ![], _0x5eaa12(0x1a2));
        else {
          const _0x51d679 = {
            image: { url: _0x44a457[_0x5eaa12(0x18b)] },
            caption: _0x44a457[_0x5eaa12(0x1aa)],
            footer: _0x44a457[_0x5eaa12(0x186)],
            buttons: _0x363b0f,
            headerType: 0x4,
          };
          await sendMessage(_0x8277f1, _0x2ba73f, _0x51d679),
            _0x26a543(
              _0x2588cd,
              0xc8,
              !![],
              "The\x20message\x20has\x20been\x20successfully\x20sent."
            );
        }
      } else {
        const _0x27170e = {
          text: _0x44a457["text"],
          footer: _0x44a457[_0x5eaa12(0x186)],
          buttons: _0x363b0f,
          headerType: 0x1,
        };
        await sendMessage(_0x8277f1, _0x2ba73f, _0x27170e),
          _0x26a543(_0x2588cd, 0xc8, !![], _0x5eaa12(0x1a7));
      }
    } catch {
      _0x26a543(
        _0x2588cd,
        0x1f4,
        ![],
        "Failed\x20to\x20send\x20the\x20message."
      );
    }
  },
  sendButtonTemp = async (_0x717865, _0x4f51c1) => {
    const _0x323c57 = _0xa49a,
      _0x327001 = getSession(_0x4f51c1[_0x323c57(0x189)][_0x323c57(0x1ad)]),
      _0x33ca74 = formatGroup(_0x717865["body"]["receiver"]),
      { message: _0x48fa02 } = _0x717865["body"],
      { button: _0x231f6c } = _0x717865[_0x323c57(0x18f)];
    try {
      const _0x344ab3 = await isExists(_0x327001, _0x33ca74, !![]);
      if (!_0x344ab3) return _0x26a543(_0x4f51c1, 0x190, ![], _0x323c57(0x1a8));
      let _0xc4c43a = [];
      if (_0x231f6c[0x0]) {
        if (_0x231f6c[0x0][_0x323c57(0x199)] == 0x1)
          _0xc4c43a = [
            ..._0xc4c43a,
            {
              index: 0x1,
              urlButton: {
                displayText: _0x231f6c[0x0]["text"],
                url: _0x231f6c[0x0][_0x323c57(0x197)],
              },
            },
          ];
        else {
          if (_0x231f6c[0x0][_0x323c57(0x199)] == 0x2)
            _0xc4c43a = [
              ..._0xc4c43a,
              {
                index: 0x1,
                callButton: {
                  displayText: _0x231f6c[0x0][_0x323c57(0x1aa)],
                  phoneNumber: _0x231f6c[0x0][_0x323c57(0x197)],
                },
              },
            ];
          else
            _0x231f6c[0x0][_0x323c57(0x199)] == 0x0 &&
              (_0xc4c43a = [
                ..._0xc4c43a,
                {
                  index: 0x1,
                  quickReplyButton: {
                    displayText: _0x231f6c[0x0][_0x323c57(0x1aa)],
                    id: _0x231f6c[0x0]["data"],
                  },
                },
              ]);
        }
      }
      if (_0x231f6c[0x1]) {
        if (_0x231f6c[0x1][_0x323c57(0x199)] == 0x1)
          _0xc4c43a = [
            ..._0xc4c43a,
            {
              index: 0x2,
              urlButton: {
                displayText: _0x231f6c[0x1]["text"],
                url: _0x231f6c[0x1][_0x323c57(0x197)],
              },
            },
          ];
        else {
          if (_0x231f6c[0x1][_0x323c57(0x199)] == 0x2)
            _0xc4c43a = [
              ..._0xc4c43a,
              {
                index: 0x2,
                callButton: {
                  displayText: _0x231f6c[0x1][_0x323c57(0x1aa)],
                  phoneNumber: _0x231f6c[0x1]["data"],
                },
              },
            ];
          else
            _0x231f6c[0x1][_0x323c57(0x199)] == 0x0 &&
              (_0xc4c43a = [
                ..._0xc4c43a,
                {
                  index: 0x2,
                  quickReplyButton: {
                    displayText: _0x231f6c[0x1][_0x323c57(0x1aa)],
                    id: _0x231f6c[0x1][_0x323c57(0x197)],
                  },
                },
              ]);
        }
      }
      if (_0x231f6c[0x2]) {
        if (_0x231f6c[0x2][_0x323c57(0x199)] == 0x1)
          _0xc4c43a = [
            ..._0xc4c43a,
            {
              index: 0x3,
              urlButton: {
                displayText: _0x231f6c[0x2]["text"],
                url: _0x231f6c[0x2]["data"],
              },
            },
          ];
        else {
          if (_0x231f6c[0x2][_0x323c57(0x199)] == 0x2)
            _0xc4c43a = [
              ..._0xc4c43a,
              {
                index: 0x3,
                callButton: {
                  displayText: _0x231f6c[0x2][_0x323c57(0x1aa)],
                  phoneNumber: _0x231f6c[0x2][_0x323c57(0x197)],
                },
              },
            ];
          else
            _0x231f6c[0x2]["type"] == 0x0 &&
              (_0xc4c43a = [
                ..._0xc4c43a,
                {
                  index: 0x3,
                  quickReplyButton: {
                    displayText: _0x231f6c[0x2][_0x323c57(0x1aa)],
                    id: _0x231f6c[0x2]["data"],
                  },
                },
              ]);
        }
      }
      if (_0x48fa02[_0x323c57(0x1ae)] === "true") {
        if (_0x48fa02["url"] === "")
          _0x26a543(_0x4f51c1, 0x1f4, ![], _0x323c57(0x1a2));
        else {
          const _0x1c78d0 = {
            image: { url: _0x48fa02[_0x323c57(0x18b)] },
            caption: _0x48fa02[_0x323c57(0x1aa)],
            footer: _0x48fa02["footer"],
            templateButtons: _0xc4c43a,
            viewOnce: !![],
          };
          await sendMessage(_0x327001, _0x33ca74, _0x1c78d0, 0x0),
            _0x26a543(_0x4f51c1, 0xc8, !![], _0x323c57(0x1a7));
        }
      } else {
        const _0x36ec23 = {
          text: _0x48fa02["text"],
          footer: _0x48fa02[_0x323c57(0x186)],
          templateButtons: _0xc4c43a,
          viewOnce: !![],
        };
        await sendMessage(_0x327001, _0x33ca74, _0x36ec23, 0x0),
          _0x26a543(_0x4f51c1, 0xc8, !![], _0x323c57(0x1a7));
      }
    } catch {
      _0x26a543(
        _0x4f51c1,
        0x1f4,
        ![],
        "Failed\x20to\x20send\x20the\x20message."
      );
    }
  };
export {
  getList,
  getGroupMetaData,
  sendMessages,
  sendMessageMedia,
  sendButton,
  sendButtonTemp,
};
