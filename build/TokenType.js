"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenTypesList = void 0;
var TokenType = /** @class */ (function () {
    function TokenType(name, regex) {
        this.name = name;
        this.regex = regex;
    }
    return TokenType;
}());
exports.default = TokenType;
exports.tokenTypesList = {
    'NUMBER': new TokenType('NUMBER', '[0-9]*'),
    'VARIABLE': new TokenType('VARIABLE', '[а-я]*'),
    'SEMICOLON': new TokenType('SEMICOLON', ';'),
    'SPACE': new TokenType('SPACE', '[ \\n\\t\\r]'),
    'ASSIGN': new TokenType('ASSIGN', 'ТЭННЭЬЭР'),
    'LOG': new TokenType('LOG', 'СУРУЙУУ'),
    'PLUS': new TokenType('PLUS', 'ЭБИИ'),
    'MINUS': new TokenType('MINUS', 'КОhОРУ'),
    'LPAR': new TokenType('LPAR', '\\('),
    'RPAR': new TokenType('RPAR', '\\)'),
};
