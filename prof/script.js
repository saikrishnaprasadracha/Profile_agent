// Define the list of section IDs in the order of appearance
const sections = ['home', 'about', 'education', 'projects', 'certifications', 'contact'];

// Keep track of the current section index
let currentSectionIndex = 0;

// Show the specified section and hide all others
function showSection(sectionId) {
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      section.classList.add('hidden');
    }
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
    currentSectionIndex = sections.indexOf(sectionId);
  }
}

// Navigate to the next section in the list
function nextSection() {
  currentSectionIndex = (currentSectionIndex + 1) % sections.length;
  showSection(sections[currentSectionIndex]);
}

// Navigate to the previous section in the list
function prevSection() {
  currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
  showSection(sections[currentSectionIndex]);
}

// Send message in "Ask about me" bar
function sendMessage() {
  const input = document.getElementById("chatInput");
  const output = document.getElementById("chatOutput");

  const userMessage = input.value.trim();
  if (!userMessage) return;

  // Simulated chatbot response
  const botReply = `You said: ${userMessage}`;

  output.innerHTML = `
    <div class="mb-2"><strong class="text-green-400">You:</strong> ${userMessage}</div>
    <div><strong class="text-green-300">Bot:</strong> ${botReply}</div>
  `;

  input.value = "";
}

// Initialize the first visible section on page load
window.onload = () => {
  showSection('home');
};
