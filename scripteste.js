// efeito slide"
const slideInElements = document.querySelectorAll('.rolagem');

function checkScroll() {
    slideInElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementPosition < screenHeight) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkScroll);

// efeito de digitação
function typeText(element, text, speed) {
    let i = 0; 
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }
  
  const element = document.getElementById("digitação");
  const text = "Our diverse membership base creates a friendly and supportive atmosphere, where you can make friends and stay motivated."; // Texto que será digitado
  const speed = 60;
  typeText(element, text, speed);

  // Função para rolar até o topo da página
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  // efeito botão topo
  window.onscroll = function() {
    const btnTop = document.getElementById("btnTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
  };
  
  
