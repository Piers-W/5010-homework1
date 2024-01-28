import Interaction from "./Interaction.js";

class DalleInteraction extends Interaction {
  constructor(prompt, response, gversion, pimageUrl, rimageUrl) {
    super(prompt, response, gversion);
    //check that all the attributes required are properly passed
    if (typeof pimageUrl !== "string" ) {
      throw new Error("Invalid input: prompt imageUrl must be string");
    }
    if (typeof rimageUrl !== "string" ) {
      throw new Error("Invalid input: response imageUrl must be string");
    }

    this.pimageUrl = pimageUrl;
    this.rimageUrl = rimageUrl;
    this.isDalle = true;
  }
  
  show() {
    console.log(
      `Prompt: ${this.prompt.slice(0, 20)}... had response ${this.response.slice(0, 20)}...GPT version: ${this.gversion}... prompt Image URL: ${this.pimageUrl}... response Image URL: ${this.rimageUrl}... Is Dalle Interaction: ${this.isDalle}`);
  }
  
  getType() {
    return "DalleInteraction";
  }
}
 
export default DalleInteraction;
