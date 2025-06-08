// Show Chatbot
document.getElementById('chatbotButton').addEventListener('click', function() {
    document.getElementById('chatbotContainer').style.display = 'flex';
    document.getElementById('chatbotButton').style.display = 'none';
  });
  
  // Hide Chatbot
  document.getElementById('closeChatbot').addEventListener('click', function() {
    document.getElementById('chatbotContainer').style.display = 'none';
    document.getElementById('chatbotButton').style.display = 'block';
  });
  
  // Course data
  const courses = {
    "web development": "Web Development: Learn HTML, CSS, JavaScript, React.js, Node.js.",
    "data science": "Data Science: Learn Python, Data Analysis, Machine Learning.",
    "graphic design": "Graphic Design: Learn Photoshop, Illustrator, UI/UX design.",
    "cyber security": "Cyber Security: Learn Ethical Hacking, Network Security, Cryptography.",
    "ai": "Artificial Intelligence: Learn Machine Learning, Deep Learning, NLP."
  };
  
  // Send Message Functionality
  function sendMessage() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const chatBody = document.getElementById('chatBody');
  
    if (userInput.trim() === "") return;
  
    // Create User Message
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerHTML = `<p>${userInput}</p>`;
    chatBody.appendChild(userMessage);
  
    // Check for course-related keywords and respond
    setTimeout(() => {
      let botResponse = '';
  
      if (courses[userInput]) {
        botResponse = `<p>We offer the following course: <br><strong>${courses[userInput]}</strong></p>`;
      } else {
        botResponse = `<p>Sorry, I didn't understand that. You can ask about courses like "Web Development", "Data Science", "Graphic Design", "Cyber Security", or "AI".</p>`;
      }
  
      const botMessage = document.createElement('div');
      botMessage.classList.add('bot-message');
      botMessage.innerHTML = botResponse;
      chatBody.appendChild(botMessage);
  
      // Scroll to the bottom
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
  
    document.getElementById('userInput').value = ''; // Clear input field
  }
  