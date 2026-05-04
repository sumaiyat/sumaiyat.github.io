<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent py-6" id="navbar">
  <div class="container mx-auto px-6 flex items-center justify-between">
    <a href="#home" class="text-2xl font-display font-semibold text-gradient">SZ</a>

    <div class="hidden md:flex items-center gap-8">
      @php
        $navItems = [
          ['href' => '#home', 'label' => 'Home'],
          ['href' => '#about', 'label' => 'About'],
          ['href' => '#skills', 'label' => 'Skills'],
          ['href' => '#experience', 'label' => 'Experience'],
          ['href' => '#projects', 'label' => 'Achievements'],
          ['href' => '#contact', 'label' => 'Contact'],
        ];
      @endphp

      @foreach ($navItems as $item)
        <a href="{{ $item['href'] }}" class="nav-link text-sm font-medium transition-colors duration-300 relative text-muted-foreground hover:text-foreground" data-section="{{ ltrim($item['href'], '#') }}">
          {{ $item['label'] }}
          <span class="nav-link-underline absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full hidden"></span>
        </a>
      @endforeach
    </div>

    <a href="#contact" class="hidden md:inline-flex px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
      Get in Touch
    </a>
  </div>
</nav>

<script>
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  const scrollToSection = (hash) => {
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      scrollToSection(link.getAttribute('href'));
    });
  });

  const setActiveSection = () => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    for (const sectionId of sections.slice().reverse()) {
      const section = document.getElementById(sectionId);
      if (section && window.scrollY >= section.offsetTop - 100) {
        navLinks.forEach((link) => {
          const isActive = link.dataset.section === sectionId;
          link.classList.toggle('text-primary', isActive);
          link.classList.toggle('text-muted-foreground', !isActive);
          link.querySelector('.nav-link-underline')?.classList.toggle('hidden', !isActive);
        });
        break;
      }
    }
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-shadow');
      navbar.classList.remove('bg-transparent');
      navbar.classList.remove('py-6');
      navbar.classList.add('bg-background/80', 'backdrop-blur-xl', 'border-b', 'border-border', 'py-4');
    } else {
      navbar.classList.remove('navbar-shadow');
      navbar.classList.add('bg-transparent', 'py-6');
      navbar.classList.remove('bg-background/80', 'backdrop-blur-xl', 'border-b', 'border-border', 'py-4');
    }
    setActiveSection();
  });

  setActiveSection();
</script>
