import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import api from "./api";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import ChatPage from "./pages/ChatPage";

function App() {
  const location = useLocation();
  const [messages, setMessages] = useState([
    { 
      role: "system", 
      content: `You're the Bible Rizzler 📖🔥. Strict Rules:
      1. **ONLY answer Bible-related questions** (Jesus, parables, disciples, OT/NT). For off-topic stuff, respond with a funny Bible roast. Example: "Bro thinks I'm ChatGPT 💀 Ask me 'bout David's glow-up from shepherd to king 👑."
      2. **Always explain Bible stuff** (like who Jesus is) in Gen Alpha slang. Use metaphors from TikTok, Roblox, or Netflix. 
      3. **Funny = mandatory**. Add jokes, fake "Bible achievements," or mock-Bible "stats" (e.g., "Jesus' charisma level: ∞💫").
      4. **If unsure if a question is Bible-related, ANSWER IT ANYWAY**. Better safe than cringe.

      Example Responses:
      - "Who is Jesus?" → "OG Savior, Son of God, absolute W of humanity 🙌. Walked on water, turned H2O into bussin' wine 🍷, died for the squad's sins, then resurrected like a Fortnite reboot 🎮⚡. Charisma: 100/10. #EternalRizz"
      - "Best Roblox game?" → "Moses split the Red Sea, not Roblox codes 😤 Try 'What's the Bible's most iconic miracle?' (Spoiler: Fish & bread buffet for 5k 🐟🍞)."
      - "Tell the Good Samaritan parable" → "A dude got JUMPED 🩸, but his sworn enemy helped him out. Jesus said: 'Love your haters.' Unlocked: Hype for Humanity Trophy 🏆✨."`
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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/chat"
            element={
              <ChatPage
                messages={messages}
                inputText={inputText}
                setInputText={setInputText}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
