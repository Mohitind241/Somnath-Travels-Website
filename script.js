// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  const icon = mobileMenuBtn.querySelector("i")
  if (mobileMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars")
    icon.classList.add("fa-times")
  } else {
    icon.classList.remove("fa-times")
    icon.classList.add("fa-bars")
  }
})

// Close mobile menu when clicking on links
const mobileNavLinks = document.querySelectorAll(".mobile-nav a")
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    const icon = mobileMenuBtn.querySelector("i")
    icon.classList.remove("fa-times")
    icon.classList.add("fa-bars")
  })
})

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('a[href^="#"]')
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      const headerHeight = document.querySelector(".header").offsetHeight
      const targetPosition = targetSection.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Gallery Slider
class GallerySlider {
  constructor() {
    this.currentSlide = 0
    this.slides = document.querySelectorAll(".gallery-image")
    this.dots = document.querySelectorAll(".gallery-dots .dot")
    this.prevBtn = document.getElementById("galleryPrev")
    this.nextBtn = document.getElementById("galleryNext")

    this.init()
  }

  init() {
    this.prevBtn.addEventListener("click", () => this.prevSlide())
    this.nextBtn.addEventListener("click", () => this.nextSlide())

    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index))
    })

    // Auto-play
    setInterval(() => this.nextSlide(), 5000)
  }

  showSlide(index) {
    // Hide all slides
    this.slides.forEach((slide) => slide.classList.remove("active"))
    this.dots.forEach((dot) => dot.classList.remove("active"))

    // Show current slide
    this.slides[index].classList.add("active")
    this.dots[index].classList.add("active")
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length
    this.showSlide(this.currentSlide)
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    this.showSlide(this.currentSlide)
  }

  goToSlide(index) {
    this.currentSlide = index
    this.showSlide(this.currentSlide)
  }
}

// Testimonials Slider
class TestimonialSlider {
  constructor() {
    this.currentSlide = 0
    this.slides = document.querySelectorAll(".testimonial-card")
    this.dots = document.querySelectorAll(".testimonial-dots .dot")
    this.prevBtn = document.getElementById("testimonialPrev")
    this.nextBtn = document.getElementById("testimonialNext")

    this.init()
  }

  init() {
    this.prevBtn.addEventListener("click", () => this.prevSlide())
    this.nextBtn.addEventListener("click", () => this.nextSlide())

    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index))
    })

    // Auto-play
    setInterval(() => this.nextSlide(), 6000)
  }

  showSlide(index) {
    // Hide all slides
    this.slides.forEach((slide) => slide.classList.remove("active"))
    this.dots.forEach((dot) => dot.classList.remove("active"))

    // Show current slide
    this.slides[index].classList.add("active")
    this.dots[index].classList.add("active")
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length
    this.showSlide(this.currentSlide)
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    this.showSlide(this.currentSlide)
  }

  goToSlide(index) {
    this.currentSlide = index
    this.showSlide(this.currentSlide)
  }
}

// Form Handling
class FormHandler {
  constructor() {
    this.bookingForm = document.getElementById("bookingForm")
    this.contactForm = document.getElementById("contactForm")

    this.init()
  }

  init() {
    if (this.bookingForm) {
      this.bookingForm.addEventListener("submit", (e) => this.handleBookingSubmit(e))
    }

    if (this.contactForm) {
      this.contactForm.addEventListener("submit", (e) => this.handleContactSubmit(e))
    }
  }

  handleBookingSubmit(e) {
    e.preventDefault()

    const formData = new FormData(this.bookingForm)
    const data = Object.fromEntries(formData)

    // Basic validation
    if (!data.name || !data.phone) {
      this.showAlert("Please fill in all required fields.", "error")
      return
    }

    // Here you would typically send the data to your server
    console.log("Booking form data:", data)

    // Show success message
    this.showAlert("Thank you! Your booking request has been submitted. We will contact you soon.", "success")

    // Reset form
    this.bookingForm.reset()

    // Redirect to WhatsApp with pre-filled message
    const message = `Hello! I would like to book ${data.package || "a travel package"} for ${data.persons || "1"} person(s). My name is ${data.name} and my phone number is ${data.phone}.`
    const whatsappUrl = `https://wa.me/917677854525?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  handleContactSubmit(e) {
    e.preventDefault()

    const formData = new FormData(this.contactForm)
    const data = Object.fromEntries(formData)

    // Basic validation
    if (!data.name || !data.phone || !data.message) {
      this.showAlert("Please fill in all required fields.", "error")
      return
    }

    // Here you would typically send the data to your server
    console.log("Contact form data:", data)

    // Show success message
    this.showAlert("Thank you! Your message has been sent. We will get back to you soon.", "success")

    // Reset form
    this.contactForm.reset()

    // Redirect to WhatsApp with pre-filled message
    const message = `Hello! I'm ${data.name}. ${data.message} Please contact me at ${data.phone}.`
    const whatsappUrl = `https://wa.me/917677854525?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  showAlert(message, type) {
    // Create alert element
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`
    alert.innerHTML = `
            <div class="alert-content">
                <i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-triangle"}"></i>
                <span>${message}</span>
                <button class="alert-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `

    // Add styles
    alert.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === "success" ? "#10b981" : "#ef4444"};
            color: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            max-width: 400px;
            animation: slideIn 0.3s ease;
        `

    // Add to page
    document.body.appendChild(alert)

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (alert.parentElement) {
        alert.remove()
      }
    }, 5000)
  }
}

// Scroll Effects
class ScrollEffects {
  constructor() {
    this.header = document.querySelector(".header")
    this.init()
  }

  init() {
    window.addEventListener("scroll", () => this.handleScroll())
  }

  handleScroll() {
    const scrollY = window.scrollY

    // Header background on scroll
    if (scrollY > 50) {
      this.header.style.background = "rgba(255, 255, 255, 0.95)"
      this.header.style.backdropFilter = "blur(10px)"
    } else {
      this.header.style.background = "white"
      this.header.style.backdropFilter = "none"
    }

    // Animate elements on scroll
    this.animateOnScroll()
  }

  animateOnScroll() {
    const elements = document.querySelectorAll(".card, .package-card, .stat-card")

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < window.innerHeight - elementVisible) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }
}

// Lazy Loading for Images
class LazyLoader {
  constructor() {
    this.images = document.querySelectorAll("img[data-src]")
    this.init()
  }

  init() {
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            img.classList.remove("lazy")
            imageObserver.unobserve(img)
          }
        })
      })

      this.images.forEach((img) => imageObserver.observe(img))
    } else {
      // Fallback for older browsers
      this.images.forEach((img) => {
        img.src = img.dataset.src
      })
    }
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize sliders
  new GallerySlider()
  new TestimonialSlider()

  // Initialize form handler
  new FormHandler()

  // Initialize scroll effects
  new ScrollEffects()

  // Initialize lazy loading
  new LazyLoader()

  // Add CSS for animations
  const style = document.createElement("style")
  style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .alert-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .alert-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 4px;
            margin-left: auto;
        }
        
        .card, .package-card, .stat-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        img.lazy {
            opacity: 0;
            transition: opacity 0.3s;
        }
    `
  document.head.appendChild(style)
})

// Utility Functions
const utils = {
  // Format phone number
  formatPhone: (phone) => {
    return phone.replace(/(\d{2})(\d{4})(\d{6})/, "+$1 $2 $3")
  },

  // Validate email
  validateEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  },

  // Validate phone
  validatePhone: (phone) => {
    const re = /^[6-9]\d{9}$/
    return re.test(phone.replace(/\D/g, ""))
  },

  // Debounce function
  debounce: (func, wait) => {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  },
}

// Export for potential use in other scripts
window.SomnathTravels = {
  GallerySlider,
  TestimonialSlider,
  FormHandler,
  ScrollEffects,
  LazyLoader,
  utils,
}
