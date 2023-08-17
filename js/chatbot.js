        const chatbotButton = document.getElementById("chatbotButton");
        const chatbotPopup = document.getElementById("chatbotPopup");
        const chatLogElement = document.getElementById("chatlog");
        const userInputElement = document.getElementById("userInput");

        const responses = {
            "hi": "Hello.How may I help you?",
	        "ok": "If you have anyother doubt you can ask.",
            "how are you": "I'm great and what about you?",
            "bye": "Goodbye! Have a nice day!",
            "yes": "Thank you.Our team will reply within 24 hours."
        };

        function appendMessage(userMsg, botMsg) {
            const userMessageDiv = document.createElement("div");
            userMessageDiv.classList.add("message", "user-message");
            userMessageDiv.innerHTML = `<strong>You:</strong> ${userMsg}`;
            chatLogElement.appendChild(userMessageDiv);

            const botMessageDiv = document.createElement("div");
            botMessageDiv.classList.add("message", "bot-message");
            botMessageDiv.innerHTML = `<strong>Bot:</strong> ${botMsg}`;
            chatLogElement.appendChild(botMessageDiv);

            // Scroll to the bottom of the chatlog
            chatLogElement.scrollTop = chatLogElement.scrollHeight;
        }

        function getBotResponse(userInput) {
            userInput = userInput.toLowerCase();
            for (const question in responses) {
                if (userInput.includes(question)) {
                    return responses[question];
                }
            }
            return "I'm sorry, I have no permission to answer this.Can I forward this to my team?";
        }

        function sendMessage() {
            const userMessage = userInputElement.value;
            userInputElement.value = "";

            if (userMessage.trim() === "") {
                return;
            }

            appendMessage(userMessage, "...");
            setTimeout(() => {
                const botResponse = getBotResponse(userMessage);
                appendMessage(userMessage, botResponse);
            }, 1000);
        }

        function toggleChatbotPopup() {
            if (chatbotPopup.style.display === "block") {
                chatbotPopup.style.display = "none";
            } else {
                chatbotPopup.style.display = "block";
            }
        }

        userInputElement.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                sendMessage();
            }
        });