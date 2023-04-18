export default class TokenType {
    name: string;
    regex: string;


    constructor(name: string, regex: string) {
        this.name = name;
        this.regex = regex;
    }
}

export const tokenTypesList = {
    'NUMBER': new TokenType('NUMBER', '[0-9]*'),
    'VARIABLE': new TokenType('VARIABLE', '[а-я]*'),
    'SEMICOLON': new TokenType('SEMICOLON', ';'),
    'SPACE': new TokenType('SPACE', '[ \\n\\t\\r]'),
    'ASSIGN': new TokenType('ASSIGN', 'ТЭННЭЬЭР'),
    'LOG': new TokenType('LOG', 'СУРУЙ'),
    'PLUS': new TokenType('PLUS', 'ЭБИИ'),
    'MINUS': new TokenType('MINUS', 'КО5УРЭТИИ'),
    'LPAR': new TokenType('LPAR', '\\('),
    'RPAR': new TokenType('RPAR', '\\)'),

    'IF': new TokenType('IF', 'БАГАРДАР'),
    'ELSE': new TokenType('ELSE', 'ОЧЧОГО'),
    'WHILE': new TokenType('WHILE', 'ТУХАРЫ'),
    'TRUE': new TokenType('TRUE', 'КЫРДЬЫК'),
    'FALSE': new TokenType('FALSE', 'АЛБЫН'),
    'MULTIPLY': new TokenType('MULTIPLY', 'ТОГУЛЛУ'),
    'DIVISION': new TokenType('DIVISION', 'ТУНЭТИИ')
}