"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Calendar,
  Users,
  Mountain,
  ChevronLeft,
  ChevronRight,
  Menu,
  MessageCircle,
  Clock,
  Shield,
  Award,
  Heart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function SomnathTravelsWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const tourPackages = [
    {
      id: 1,
      title: "Shikharji Pilgrimage Package",
      image: "/images/temple-pilgrimage.jpg",
      price: "₹8,999",
      duration: "3 Days 2 Nights",
      description: "Complete spiritual journey to Shikharji with comfortable accommodation and guided tours.",
    },
    {
      id: 2,
      title: "Giridih to Bodh Gaya Tour",
      image: "/images/bodh-gaya.jpg",
      price: "₹12,999",
      duration: "4 Days 3 Nights",
      description: "Sacred Buddhist pilgrimage from Giridih to Bodh Gaya with all major sites covered.",
    },
    {
      id: 3,
      title: "Jharkhand Hill Station Package",
      image: "/images/hill-station.jpg",
      price: "₹15,999",
      duration: "5 Days 4 Nights",
      description: "Explore the beautiful hill stations of Jharkhand with scenic views and local culture.",
    },
    {
      id: 4,
      title: "Car Rental with Driver",
      image: "/images/car-rental.jpg",
      price: "₹2,500/day",
      duration: "Flexible",
      description: "Comfortable car rental service with experienced drivers for local and outstation trips.",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Dhanbad",
      rating: 5,
      text: "Excellent service! The Shikharji tour was perfectly organized. Somnath Travels made our pilgrimage memorable and hassle-free.",
      image: "/images/customer1.jpg",
    },
    {
      name: "Priya Sharma",
      location: "Ranchi",
      rating: 5,
      text: "Amazing experience with their car rental service. Clean cars, professional drivers, and very reasonable rates.",
      image: "/images/customer2.jpg",
    },
    {
      name: "Amit Jain",
      location: "Giridih",
      rating: 5,
      text: "Local expertise at its best! They know all the hidden gems around Giridih. Highly recommended for family trips.",
      image: "/images/customer3.jpg",
    },
  ]

  const galleryImages = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Mountain className="h-8 w-8 text-orange-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Somnath Travels</h1>
                <p className="text-sm text-gray-600">Giridih, Jharkhand</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
                About
              </Link>
              <Link href="#packages" className="text-gray-700 hover:text-orange-600 transition-colors">
                Packages
              </Link>
              <Link href="#gallery" className="text-gray-700 hover:text-orange-600 transition-colors">
                Gallery
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="tel:+917677854525">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col space-y-6 mt-8">
                  <Link
                    href="#home"
                    className="text-lg text-gray-700 hover:text-orange-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="#about"
                    className="text-lg text-gray-700 hover:text-orange-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="#packages"
                    className="text-lg text-gray-700 hover:text-orange-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Packages
                  </Link>
                  <Link
                    href="#gallery"
                    className="text-lg text-gray-700 hover:text-orange-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link
                    href="#contact"
                    className="text-lg text-gray-700 hover:text-orange-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Button asChild className="bg-orange-600 hover:bg-orange-700 w-full">
                    <Link href="tel:+917677854525">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/shikharji-temple.jpg" alt="Shikharji Temple" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          {/* Floating particles effect */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-block p-4 bg-white/10 rounded-full backdrop-blur-sm mb-4">
              <Mountain className="h-12 w-12 text-orange-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
            Explore Spiritual & Scenic Journeys
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">with Somnath Travels, Giridih</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-lg px-8 py-3 shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="#booking" className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Book Now
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-800 text-lg px-8 py-3 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              <Link href="#packages" className="flex items-center">
                View Packages
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg px-8 py-3 shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="https://wa.me/917677854525" className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Somnath Travels</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established in the heart of Giridih, Jharkhand, we specialize in creating unforgettable spiritual and
              scenic journeys
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/office-team.jpg"
                alt="Somnath Travels Office"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Trusted Travel Partner</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With deep local expertise and years of experience, Somnath Travels has been serving pilgrims and
                travelers from across India. We understand the spiritual significance of places like Shikharji and the
                natural beauty of Jharkhand's landscapes.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">1000+</h4>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">10+</h4>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Trusted & Reliable Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">24/7 Customer Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-red-600" />
                  <span className="text-gray-700">Personalized Travel Experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-sm opacity-90">Happy Travelers</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Destinations</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Tour Packages</h2>
            <p className="text-xl text-gray-600">Discover our carefully crafted travel experiences</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-orange-600">{pkg.price}</span>
                    <span className="text-sm text-gray-600 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {pkg.duration}
                    </span>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Book Your Journey</h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you shortly</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Booking Form</CardTitle>
                <CardDescription>Please provide your details for a customized quote</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Enter your full name" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div>
                    <Label htmlFor="package">Select Package</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="shikharji">Shikharji Pilgrimage Package</SelectItem>
                        <SelectItem value="bodhgaya">Giridih to Bodh Gaya Tour</SelectItem>
                        <SelectItem value="hillstation">Jharkhand Hill Station Package</SelectItem>
                        <SelectItem value="carrental">Car Rental with Driver</SelectItem>
                        <SelectItem value="custom">Custom Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="persons">Number of Persons</Label>
                      <Input id="persons" type="number" placeholder="Enter number of travelers" min="1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Special Requirements</Label>
                    <Textarea id="notes" placeholder="Any special requirements or notes..." rows={4} />
                  </div>

                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3">
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Travel Gallery</h2>
            <p className="text-xl text-gray-600">Memories from our beautiful journeys</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={galleryImages[currentGalleryImage] || "/placeholder.svg"}
                alt={`Gallery image ${currentGalleryImage + 1}`}
                fill
                className="object-cover"
              />
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevGalleryImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextGalleryImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentGalleryImage ? "bg-orange-600" : "bg-gray-300"}`}
                  onClick={() => setCurrentGalleryImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real travelers</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="text-center">
                <Image
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div>
                  <h4 className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
            </Card>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentTestimonial ? "bg-orange-600" : "bg-gray-300"}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch for your next adventure</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        Somnath Travels, Main Road
                        <br />
                        Giridih, Jharkhand - 815301
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">
                        +91 7677854525
                        <br />
                        +91 87654 32109
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">
                        info@somnathtravel.com
                        <br />
                        booking@somnathtravel.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                      <Button asChild variant="outline" className="mt-2">
                        <Link href="https://wa.me/917677854525">Chat with us on WhatsApp</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Name *</Label>
                      <Input id="contact-name" placeholder="Your name" required />
                    </div>
                    <div>
                      <Label htmlFor="contact-phone">Phone *</Label>
                      <Input id="contact-phone" type="tel" placeholder="Your phone number" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="Your email" />
                  </div>

                  <div>
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Input id="contact-subject" placeholder="Message subject" />
                  </div>

                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea id="contact-message" placeholder="Your message..." rows={5} required />
                  </div>

                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <Card className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Find Us on Map</h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58369.89364181205!2d86.26472!3d24.1875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0a7c8f8888889%3A0x1234567890abcdef!2sGiridih%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Mountain className="h-8 w-8 text-orange-400" />
                <div>
                  <h3 className="text-xl font-bold">Somnath Travels</h3>
                  <p className="text-sm text-gray-400">Giridih, Jharkhand</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for spiritual journeys and scenic adventures in Jharkhand and beyond.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#packages" className="text-gray-400 hover:text-white transition-colors">
                    Tour Packages
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Pilgrimage Tours</li>
                <li>Car Rentals</li>
                <li>Group Packages</li>
                <li>Hotel Bookings</li>
                <li>Custom Itineraries</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 7677854525
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@somnathtravel.com
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Giridih, Jharkhand
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Somnath Travels, Giridih. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full w-16 h-16 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <Link href="https://wa.me/917677854525">
            <MessageCircle className="h-8 w-8" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
