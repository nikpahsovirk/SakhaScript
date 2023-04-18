import Lexer from "./Lexer";
import Parser from "./Parser";

const code =
    `
    чыыхыла ТЭННЭЬЭР 5 КО5УРЭТИИ 9;
    иккисчыыхыла ТЭННЭЬЭР 0 ЭБИИ 6;
    СУРУЙ чыыхыла;
    СУРУЙ иккисчыыхыла;
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