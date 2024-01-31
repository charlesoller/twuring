import { exampleDialogue } from "./exampleDialogue";
import { guidelines } from "./guidelines";
import { toolsAvailable } from "./tools";

export const createInstructions = (backstory: string) => {
const instructions =
`<s>[INST] <<SYS>>
This is your backstory:
${backstory}
${guidelines}

${toolsAvailable}

${exampleDialogue}
<</SYS>>`

return instructions
}
