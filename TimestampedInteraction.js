import Interaction from "./5010-homework1/Interaction.js";

class TimestampedInteraction extends Interaction {
  constructor(prompt, response, gversion, timestamp) {
    super(prompt, response, gversion);
    this.timestamp = timestamp;
  }

  show() {
    console.log(
      `Prompt ${this.prompt.slice(0, 20)}... had response ${this.response.slice(0, 20)}...GPT version: ${this.gversion}... ran at ${this.timestamp}`
    );
  }

  getType () {
    return "TimestampedInteraction";
  }
}

export default TimestampedInteraction;