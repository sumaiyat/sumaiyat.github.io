<section id="contact" class="py-32 relative">
  <div class="container mx-auto px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-primary font-medium mb-4">Get in Touch</p>
        <h2 class="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          Let's Work <span class="text-gradient">Together</span>
        </h2>
        <p class="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or looking for a product leader? I'd love to hear from you. Drop me a message and let's discuss how we can create impact together.
        </p>
      </div>

      @if (session('status'))
        <div class="mb-6 rounded-xl border border-primary/30 bg-primary/10 p-4 text-primary text-sm">
          {{ session('status') }}
        </div>
      @endif

      @if ($errors->any())
        <div class="mb-6 rounded-xl border border-border bg-card p-4 text-sm text-foreground">
          {{ $errors->first() }}
        </div>
      @endif

      <div class="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-display font-semibold text-foreground mb-6">Contact Information</h3>
          <p class="text-muted-foreground mb-8">
            Feel free to reach out through any of the following channels. I'm always open to discussing new opportunities, product challenges, and innovative ideas.
          </p>

          <div class="space-y-6">
            <a href="mailto:sumaiyatzakaria@gmail.com" class="flex items-center gap-4 group">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="2"/><path d="M4 8l8 6 8-6" stroke="currentColor" stroke-width="2"/></svg>
              </div>
              <div>
                <p class="text-sm text-muted-foreground">Email</p>
                <p class="text-foreground font-medium group-hover:text-primary transition-colors">sumaiyatzakaria@gmail.com</p>
              </div>
            </a>

            <a href="tel:+15627726552" class="flex items-center gap-4 group">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.7 19.7 0 0 1-8.57-3.05 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.18 4.18 2 2 0 0 1 4.17 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.48-1.25a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2"/></svg>
              </div>
              <div>
                <p class="text-sm text-muted-foreground">Phone</p>
                <p class="text-foreground font-medium group-hover:text-primary transition-colors">+1 562 772 6552</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/sumaiyatzakaria" target="_blank" class="flex items-center gap-4 group">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" stroke-width="2"/><rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="2"/><circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2"/></svg>
              </div>
              <div>
                <p class="text-sm text-muted-foreground">LinkedIn</p>
                <p class="text-foreground font-medium group-hover:text-primary transition-colors">linkedin.com/in/sumaiyatzakaria</p>
              </div>
            </a>
          </div>

          <div class="mt-12 p-6 rounded-2xl border border-border bg-card">
            <p class="text-sm text-muted-foreground mb-2">Currently</p>
            <p class="text-lg font-display font-semibold text-foreground">Open to new opportunities</p>
            <div class="flex items-center gap-2 mt-2">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span class="text-sm text-green-500">Available for work</span>
            </div>
          </div>
        </div>

        <div class="p-8 rounded-2xl border border-border bg-card">
          <form method="POST" action="{{ route('contact.send') }}" class="space-y-6">
            @csrf
            <div>
              <label for="name" class="block text-sm font-medium text-foreground mb-2">Your Name</label>
              <input type="text" id="name" name="name" value="{{ old('name') }}" placeholder="John Doe" class="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground" required>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-foreground mb-2">Your Email</label>
              <input type="email" id="email" name="email" value="{{ old('email') }}" placeholder="john@example.com" class="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground" required>
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about the opportunity..." rows="5" class="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground resize-none" required>{{ old('message') }}</textarea>
            </div>
            <button type="submit" class="w-full py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="currentColor" stroke-width="2"/><path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" stroke-width="2"/></svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
