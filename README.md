#Interaction Manager

This a JavaScript implementation of an interaction manager. It is designed to record and manage various types of interactions with ChatGPT, including basic interactions, timestamped interactions, and Dalle interactions (interactions with associated images).


##Features

1.Record different types of interactions (basic, timestamped, and Dalle).
2.Display information about each recorded interaction.
3.Add and remove interactions from the manager.
4.Extra attribute.  Add the 'gversion' attribute in the interaction class to help users to make decisions about the answers.


##Usage

The main classes and their functionalities are:
1.Interaction - Basic interaction, recording prompt, response, gversion.
2.TimestampedInteraction - Interaction recording with a timestamp.
3.DalleInteraction - Interaction recording with associated image URLs.
4.PromptsManager - Manages a collection of interactions.


##Testing

Run main.js for testing. This file:
1.Create instances of Interaction, TimestampedInteraction, and DalleInteraction.
2.Use the methods provided to record and manage these interactions.

You can modify the content as the requirements. The Interaction class should include 'prompt,' 'response,' and 'gversion.' The TimestampedInteraction class should include a 'timestamp,' which defaults to the current time if not provided. The DalleInteraction class should include a 'image_link,' which can be empty。
You can change the 'index' value based on the order of interaction records to delete interactions accordingly。


##License
This project is licensed under the MIT License - see the LICENSE file for details.