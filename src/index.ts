import Lexer from "./Lexer";
import Parser from "./Parser";

const code =
    `
    чыыхылаСуумата ТЭННЭЬЭР 5 КОhОРУ 9;
    иккисчыыхыласуумата ТЭННЭЬЭР 0 ЭБИИ 6;
    СУРУЙУУ чыыхылаСуумата;
    СУРУЙУУ иккисчыыхыласуумата;
    `

// чыыхылаСуумата ТЭННЭЬЭР 5 КОhОРУ 9;
// иккисЧыыхылаСуумата ТЭННЭЬЭР 0 ЭБИИ 6;
// СУРУЙ чыыхылаСуумата;
// СУРУЙ иккисЧыыхылаСуумата;


const lexer = new Lexer(code);

lexer.lexAnalysis()

const parser = new Parser(lexer.tokenList);

const rootNode = parser.parseCode()

parser.run(rootNode);