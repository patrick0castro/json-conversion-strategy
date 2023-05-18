import jsonData from "./data.js"
import CsvUtilsStrategy from "./strategy/concrete-strategies/csvUtilsStrategy.js"
import XmlUtilsStrategy from "./strategy/concrete-strategies/xmlUtilsStrategy.js"
import ContextStrategy from "./strategy/contextStrategy.js"

const context = new ContextStrategy(new XmlUtilsStrategy())
console.log(context.parse(jsonData))

context.setStrategy(new CsvUtilsStrategy())
console.log(context.parse(jsonData))