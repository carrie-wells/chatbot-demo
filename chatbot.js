function handleChat(event, chatbotId) {
    event.preventDefault();
    let questionInput = document.getElementById(`${chatbotId}Question`);
    let chatbox = document.getElementById(`${chatbotId}Chatbox`);
    let question = questionInput.value;
    if (question.trim() !== "") {
        // Append user's question to the chatbox
        let userQuestionElement = document.createElement('p');
        userQuestionElement.textContent = `You: ${question}`;
        chatbox.appendChild(userQuestionElement);
        questionInput.value = '';

        // Generating a response using a function
        let response = generateResponse(chatbotId, question);
        let responseElement = document.createElement('p');
        responseElement.textContent = response;
        chatbox.appendChild(responseElement);
        chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
    }
}

function generateResponse(chatbotId, question) {
    const responses = {
        tamara: "Tamara says: I'm not feeling very good today.",
        maria: "Maria says: I'm a bit scared.",
        john: "John says: My tooth is hurting a lot."
    };
    return responses[chatbotId] || "I don't know how to answer that.";
}
