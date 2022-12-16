/**
 * Invoker
 */
export default class Invoker {
    /**
     * 點餐
     * @param {*} reveiver
     * @param {*} command
     * @returns
     */
    點餐 (reveiver, command) {
        return reveiver[command.指令](command.內容)
    }

    點完了快做 (reveiver) {
        return reveiver.開始做()
    }
}
