import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

try {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Suggest three names for an animal that is a superhero`
    });
    console.log("OpenAI: ", completion);
} catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
        console.error(error.response.status, error.response.data);
    } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
    }
}

