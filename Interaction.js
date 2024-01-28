export class Interaction{
  prompt = "";
  response = "";
  gversion = ""; //record answer questions chatgpt version
  constructor(prompt, response, gversion) {
    // check that all the attributes required are properly passed
    if (typeof prompt !== "string" || prompt.trim() === "") {
      throw new Error("Invalid input: prompt must be a non-empty string");
    }
    if (typeof response !== "string" || response.trim() === "") {
      throw new Error("Invalid input: response must be a non-empty string");
    }
    if (typeof gversion !== "string" || gversion.trim() === "") {
      throw new Error("Invalid input: version must be a non-empty string");
    }
    this.prompt = prompt;
    this.response = response;
    this.gversion = gversion;
  }

  show() {
    console.log(
      `Prompt ${this.prompt.slice(0, 20)}... had response ${this.response.slice(0, 20)}...GPT version: ${this.gversion}`
    );
  }
}

export default Interaction;