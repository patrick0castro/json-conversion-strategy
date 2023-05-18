export default class XmlUtilsStrategy {
  parse(jsonData) {
    let xml = ""

    for (let key in jsonData) {
      if (jsonData.hasOwnProperty(key)) {
        if (typeof jsonData[key] === "object") {
          xml += `<${key}>${this.parse(jsonData[key])}</${key}>`
        } else {
          xml += `<${key}>${jsonData[key]}</${key}>`
        }
      }
    }

    return xml
  }
}
