"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Lexer_1 = __importDefault(require("./Lexer"));
var Parser_1 = __importDefault(require("./Parser"));
var code = "\n    \u0447\u044B\u044B\u0445\u044B\u043B\u0430\u0421\u0443\u0443\u043C\u0430\u0442\u0430 \u0422\u042D\u041D\u041D\u042D\u042C\u042D\u0420 5 \u041A\u041Eh\u041E\u0420\u0423 9;\n    \u0438\u043A\u043A\u0438\u0441\u0447\u044B\u044B\u0445\u044B\u043B\u0430\u0441\u0443\u0443\u043C\u0430\u0442\u0430 \u0422\u042D\u041D\u041D\u042D\u042C\u042D\u0420 0 \u042D\u0411\u0418\u0418 6;\n    \u0421\u0423\u0420\u0423\u0419\u0423\u0423 \u0447\u044B\u044B\u0445\u044B\u043B\u0430\u0421\u0443\u0443\u043C\u0430\u0442\u0430;\n    \u0421\u0423\u0420\u0423\u0419\u0423\u0423 \u0438\u043A\u043A\u0438\u0441\u0447\u044B\u044B\u0445\u044B\u043B\u0430\u0441\u0443\u0443\u043C\u0430\u0442\u0430;\n    ";
// чыыхылаСуумата ТЭННЭЬЭР 5 КОhОРУ 9;
// иккисЧыыхылаСуумата ТЭННЭЬЭР 0 ЭБИИ 6;
// СУРУЙ чыыхылаСуумата;
// СУРУЙ иккисЧыыхылаСуумата;
var lexer = new Lexer_1.default(code);
lexer.lexAnalysis();
var parser = new Parser_1.default(lexer.tokenList);
var rootNode = parser.parseCode();
parser.run(rootNode);
