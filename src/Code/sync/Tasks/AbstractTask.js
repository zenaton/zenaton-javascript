const Engine = require("../Engine/Engine");

module.exports = class AbstractTask {
  constructor(name) {
    // class name
    this.name = name;
  }

  // asynchroneous execution within a workflow
  dispatch() {
    return new Engine().dispatch([this])[0];
  }

  // synchroneous execution within a workflow
  execute() {
    return new Engine().execute([this])[0];
  }

  static methods() {
    return ["handle", "maxProcessingTime"];
  }
};
