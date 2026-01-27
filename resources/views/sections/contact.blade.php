<section id="contact" class="py-32 relative">
  <div class="container mx-auto px-6">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-primary font-medium mb-4">Get in Touch</p>
        <h2 class="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          Let’s <span class="text-gradient">Collaborate</span>
        </h2>
        <p class="text-muted-foreground max-w-2xl mx-auto">
          I’m open to product leadership roles, consulting, and speaking engagements.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-6 rounded-2xl border border-border bg-card">
          <h3 class="text-xl font-display font-semibold text-foreground mb-4">
            Contact Info
          </h3>
          <div class="space-y-2 text-muted-foreground">
            <p><strong class="text-primary">Email:</strong> sumaiyatzakaria@gmail.com</p>
            <p><strong class="text-primary">Phone:</strong> +1 562 772 6552</p>
            <p><strong class="text-primary">LinkedIn:</strong> <a href="https://www.linkedin.com/in/sumaiyatzakaria" class="text-primary hover:underline" target="_blank">linkedin.com/in/sumaiyatzakaria</a></p>
          </div>
        </div>

        <div class="p-6 rounded-2xl border border-border bg-card">
          <h3 class="text-xl font-display font-semibold text-foreground mb-4">
            Message Me
          </h3>
          <form method="POST" action="#">
            @csrf
            <div class="space-y-4">
              <input type="text" name="name" placeholder="Your Name" class="w-full p-4 rounded-xl bg-background border border-border text-foreground" required>
              <input type="email" name="email" placeholder="Your Email" class="w-full p-4 rounded-xl bg-background border border-border text-foreground" required>
              <textarea name="message" placeholder="Your Message" rows="5" class="w-full p-4 rounded-xl bg-background border border-border text-foreground" required></textarea>
              <button type="submit" class="w-full px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
