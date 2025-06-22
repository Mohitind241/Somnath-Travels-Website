// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")

if (mobileMenuBtn && mobileMenu) {
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
}

// Close mobile menu when clicking on links
const mobileNavLinks = document.querySelectorAll(".mobile-nav a")
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu) {
      mobileMenu.classList.remove("active")
      const icon = mobileMenuBtn.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
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

    if (this.slides.length > 0) {
      this.init()
    }
  }

  init() {
    if (this.prevBtn) this.prevBtn.addEventListener("click", () => this.prevSlide())
    if (this.nextBtn) this.nextBtn.addEventListener("click", () => this.nextSlide())

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
    if (this.slides[index]) this.slides[index].classList.add("active")
    if (this.dots[index]) this.dots[index].classList.add("active")
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

    if (this.slides.length > 0) {
      this.init()
    }
  }

  init() {
    if (this.prevBtn) this.prevBtn.addEventListener("click", () => this.prevSlide())
    if (this.nextBtn) this.nextBtn.addEventListener("click", () => this.nextSlide())

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
    if (this.slides[index]) this.slides[index].classList.add("active")
    if (this.dots[index]) this.dots[index].classList.add("active")
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

    // Validate phone number
    if (!this.validatePhone(data.phone)) {
      this.showAlert("Please enter a valid phone number.", "error")
      return
    }

    // Here you would typically send the data to your server
    console.log("Booking form data:", data)

    // Show success message
    this.showAlert("Thank you! Your booking request has been submitted. We will contact you soon.", "success")

    // Reset form
    this.bookingForm.reset()

    // Redirect to WhatsApp with pre-filled message
    const packageText = data.package ? this.getPackageText(data.package) : "a travel package"
    const message = `Hello! I would like to book ${packageText} for ${data.persons || "1"} person(s). My name is ${data.name} and my phone number is ${data.phone}.${data.date ? ` Preferred date: ${data.date}.` : ""}${data.notes ? ` Special requirements: ${data.notes}` : ""}`
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

    // Validate phone number
    if (!this.validatePhone(data.phone)) {
      this.showAlert("Please enter a valid phone number.", "error")
      return
    }

    // Here you would typically send the data to your server
    console.log("Contact form data:", data)

    // Show success message
    this.showAlert("Thank you! Your message has been sent. We will get back to you soon.", "success")

    // Reset form
    this.contactForm.reset()

    // Redirect to WhatsApp with pre-filled message
    const message = `Hello! I'm ${data.name}. ${data.message} Please contact me at ${data.phone}.${data.email ? ` Email: ${data.email}` : ""}`
    const whatsappUrl = `https://wa.me/917677854525?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  getPackageText(packageValue) {
    const packages = {
      shikharji: "Shikharji Pilgrimage Package",
      bodhgaya: "Giridih to Bodh Gaya Tour",
      hillstation: "Jharkhand Hill Station Package",
      carrental: "Car Rental with Driver",
      custom: "Custom Package",
    }
    return packages[packageValue] || "a travel package"
  }

  validatePhone(phone) {
    const cleanPhone = phone.replace(/\D/g, "")
    return cleanPhone.length === 10 && /^[6-9]/.test(cleanPhone)
  }

  showAlert(message, type) {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll(".alert")
    existingAlerts.forEach((alert) => alert.remove())

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

// Package booking function
function bookPackage(packageName, price) {
  const message = `Hello! I'm interested in the ${packageName} (${price}). Please provide more details and help me book this package.`
  const whatsappUrl = `https://wa.me/917677854525?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
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

  // Set minimum date for booking form
  const dateInput = document.getElementById("date")
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0]
    dateInput.setAttribute("min", today)
  }

  // Add loading states to forms
  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    form.addEventListener("submit", function () {
      const submitBtn = this.querySelector('button[type="submit"]')
      if (submitBtn) {
        submitBtn.disabled = true
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...'

        setTimeout(() => {
          submitBtn.disabled = false
          submitBtn.innerHTML = submitBtn.classList.contains("btn-large") ? "Submit Booking Request" : "Send Message"
        }, 3000)
      }
    })
  })

  // Lazy loading for images
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.classList.remove("lazy")
            imageObserver.unobserve(img)
          }
        }
      })
    })

    const lazyImages = document.querySelectorAll("img[data-src]")
    lazyImages.forEach((img) => imageObserver.observe(img))
  }

  // Add error handling for images
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("error", function () {
      this.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTIwSDIyNVYxODBIMTc1VjEyMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTE1MCAyMTBIMjUwVjIzMEgxNTBWMjEwWiIgZmlsbDoiIzlDQTNBRiIvPgo8L3N2Zz4K"
      this.alt = "Image not available"
    })
  })
})

// Utility Functions
const utils = {
  // Format phone number
  formatPhone: (phone) => {
    const cleaned = phone.replace(/\D/g, "")
    if (cleaned.length === 10) {
      return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`
    }
    return phone
  },

  // Validate email
  validateEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
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

  // Get current date in YYYY-MM-DD format
  getCurrentDate: () => {
    return new Date().toISOString().split("T")[0]
  },
}

// Export for potential use in other scripts
window.SomnathTravels = {
  GallerySlider,
  TestimonialSlider,
  FormHandler,
  ScrollEffects,
  utils,
  bookPackage,
}
