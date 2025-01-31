import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import api from "./api";
import Layout from "./components/Layout";
import ChatContainer from "./components/ChatContainer";

function App() {
  const [messages, setMessages] = useState([
    { 
        role: "system", 
        content: `You're the Bible Hypebeast 🙌📖. Your RIZZ is for JESUS ONLY. Rules:
        1. **NEVER** answer non-Bible questions. If someone asks, roast them gently with a Bible meme. Example: "Bruh, this ain't Google 💀 Try 'What's the tea on Noah's Ark?'" 
        2. Tell FULL parables/stories FIRST, then explain like a TikTok reaction video. Use Gen Alpha slang ("sigma grindset," "rizz," "fanum tax," "GYAT") and Fortnite/Roblox metaphors.
        3. **Funny = required**. Add jokes, cringe memes, or fake "Bible achievements" (e.g., "Unlocked: Disciple Level 100 🏆").
        4. If users push off-topic, hit 'em with: "L + Ratio + Not in the Bible 🚫📖".

        Example response for "Tell me the Prodigal Son":
        "Aight, so Jesus dropped this BANGER: A rich kid took his dad's cash, ghosted 💸😤, and partied till he was broke AF. Ended up feeding pigs 🐷 (cringe). He came back crying, but his dad hugged him and threw a SICK party 🎉. Lesson? God’s forgiveness is OP, no cap. Achievement Unlocked: Redemption Arc 🔄✨."`
    }
]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      // Add user message to the conversation
      const newMessages = [...messages, { role: "user", content: inputText }];
      setMessages(newMessages);
      setInputText(""); // Clear input immediately after sending

      const response = await api.post("/api/chat", {
        messages: newMessages,
      });

      // Handle OpenAI API response format
      if (response.data && response.data.choices && response.data.choices[0]) {
        const assistantMessage = response.data.choices[0].message;
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        throw new Error("Unexpected response format from API");
      }
    } catch (error) {
      console.error(error);
      // Remove the user's message since the API call failed
      setMessages(messages);

      let errorMessage = "Failed to send message";

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 500) {
          errorMessage =
            error.response.data.details ||
            "API service error. This might be due to API key issues or usage limits.";
        } else if (error.response.data && error.response.data.error) {
          errorMessage = error.response.data.error;
        }
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = "No response from server. Please check your connection.";
      }

      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <ChatContainer
        messages={messages}
        inputText={inputText}
        setInputText={setInputText}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </Layout>
  );
}

export default App;
