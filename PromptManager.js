import Interaction from "./5010-homework1/Interaction.js";
import TimestampedInteration from "./TimestampedInteraction.js";
import DalleInteraction from "./5010-homework1/DalleInteraction.js";

export class PromptsManager{
  interactions = [];

  showAllInteractions(){
    for (let inter of this.interactions) {
      inter.show();
    }
  }

  recordPrompt(prompt, response, gversion) {
    const p = new Interaction(prompt, response, gversion);
    this.interactions.push(p);
  }

  recordTimestampedPrompt(prompt, response, gversion, timestamp = Date.now()) {
    const p = new TimestampedInteration(prompt, response, gversion, timestamp);
    this.interactions.push(p);
  }

  addDalleInteraction(prompt, response, gversion, pimageUrl, rimageUrl) {
    const dalleInteraction = new DalleInteraction(prompt, response, gversion, pimageUrl, rimageUrl);
    this.interactions.push(dalleInteraction);
  }

  removeInteraction(index) {
    if (index >= 0 && index < this.interactions.length) {
      this.interactions.splice(index, 1);
      return true; 
    } 
    return false; 
  }
}
  
export default PromptsManager;

