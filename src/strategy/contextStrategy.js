export default class ContextStrategy {
    constructor(strategy) {
        this.strategy = strategy
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    parse(dataJson) {
        return this.strategy.parse(dataJson)
    }
}