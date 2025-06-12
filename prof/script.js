const sectionIds = ['home', 'about']; // Extend as needed
let currentIndex = 0;

function showSection(sectionId) {
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('fade-enter');
    setTimeout(() => {
      target.classList.add('fade-enter-active');
    }, 10);
    setTimeout(() => {
      target.classList.remove('fade-enter');
      target.classList.remove('fade-enter-active');
    }, 400);
  }
}

function nextSection() {
  currentIndex = (currentIndex + 1) % sectionIds.length;
  showSection(sectionIds[currentIndex]);
}

function prevSection() {
  currentIndex = (currentIndex - 1 + sectionIds.length) % sectionIds.length;
  showSection(sectionIds[currentIndex]);
}

showSection(sectionIds[currentIndex]);
