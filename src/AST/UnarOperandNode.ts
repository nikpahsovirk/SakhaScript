import Token from "../Token";
import ExpressionNode from "./ExpressionNode";

export default class UnarOperandNode {
    operator: Token;
    operand: ExpressionNode;

    constructor(operator: Token, operand:ExpressionNode) {
        this.operand = operand
        this.operator = operator
    }
}