import StrategyInterface from "../strategyInterface.js"

export default class CsvUtilsStrategy extends StrategyInterface {
  constructor() {
    super()
  }

  parse(jsonData) {
    const keys = []

    this._extractKeys(jsonData[0], "", keys)

    const csvHeader = keys.join(",")

    const csvRows = jsonData.map((obj) => {
      const values = keys.map((key) => {
        const nestedKeys = key.split(".")
        let value = obj
        for (let nestedKey of nestedKeys) {
          value = value[nestedKey]
        }
        return typeof value === "string" ? `"${value}"` : value
      })
      return values.join(",")
    })

    const csvContent = [csvHeader, ...csvRows].join("\n")

    return csvContent
  }

  _extractKeys(obj, parentKey = "", keys) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const nestedKey = parentKey ? `${parentKey}.${key}` : key
        if (typeof obj[key] === "object" && obj[key] !== null) {
          this._extractKeys(obj[key], nestedKey, keys)
        } else {
          keys.push(nestedKey)
        }
      }
    }
  }
}
