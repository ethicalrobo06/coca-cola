import React, { useEffect } from 'react'
import AnimationWrapper from './components/AnimationWrapper'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Hero Section Animation with Timeline
    const heroTimeline = gsap.timeline({
      defaults: {
        ease: 'power2.out',
        duration: 2,
      },
    })

    heroTimeline
      .fromTo(
        '.hero-title',
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2.5,
        }
      )
      .fromTo(
        '.hero-description',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
        },
        '-=2' // Start 2 seconds before previous animation ends
      )
      .fromTo(
        '.hero-button',
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
        },
        '-=1.5' // Start 1.5 seconds before previous animation ends
      )

    // Product Features Title Animation
    gsap.fromTo(
      '.features-title',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        scrollTrigger: {
          trigger: '.product-features',
          start: 'top center+=200',
          toggleActions: 'play none none none',
        },
        ease: 'power2.out',
      }
    )

    // Benefits Title Animation
    gsap.fromTo(
      '.benefits-title',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        scrollTrigger: {
          trigger: '.benefits-section',
          start: 'top center+=200',
          toggleActions: 'play none none none',
        },
        ease: 'power2.out',
      }
    )

    // History Title Animation
    gsap.fromTo(
      '.history-title',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        scrollTrigger: {
          trigger: '.history-section',
          start: 'top center+=200',
          toggleActions: 'play none none none',
        },
        ease: 'power2.out',
      }
    )

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const handleExploreClick = () => {
    // Dispatch custom event
    window.dispatchEvent(new Event('moveModel'))

    // Smooth scroll to model section
    document.querySelector('#model-section').scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen bg-[#E51E2A] z-10 flex items-center justify-center">
        <div className="text-center p-10 max-w-2xl">
          <h1 className="hero-title text-6xl font-bold mb-4 text-white">
            <span className="text-highlight bg-gradient-to-r from-white via-red-200 to-white bg-[length:200%_auto]">
              Discover the Magic
            </span>
          </h1>
          <p className="hero-description text-xl mb-8 text-white">
            Experience the iconic flavor that has been enjoyed for generations.
          </p>
          <button
            onClick={handleExploreClick}
            className="hero-button bg-white text-[#E51E2A] py-4 px-8 rounded-full font-bold text-lg hover:bg-red-100 transform hover:scale-105 transition-all duration-300"
          >
            Explore Now
          </button>
        </div>
      </section>

      {/* 3D Model Section */}
      <section className="relative h-screen">
        <AnimationWrapper />
      </section>

      {/* Product Features Section */}
      <section className="relative py-20 bg-white z-20 product-features">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="features-title text-4xl font-semibold mb-12 text-[#E51E2A] text-center">
            Product Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-5 border-2 rounded-lg shadow-md animated-border hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-3">Authentic Taste</h3>
              <p>
                Made with a unique blend of flavors and natural ingredients that
                deliver the unmistakable Coca-Cola experience.
              </p>
            </div>
            <div className="p-5 border-2 rounded-lg shadow-md animated-border hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-3">
                Eco-Friendly Packaging
              </h3>
              <p>
                Committed to reducing waste, Coca-Cola uses recyclable materials
                to ensure a sustainable future for all.
              </p>
            </div>
            <div className="p-5 border-2 rounded-lg shadow-md animated-border hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-3">
                Perfectly Carbonated
              </h3>
              <p>
                With just the right amount of fizz, every bottle of Coca-Cola is
                crafted to deliver a refreshing experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 bg-[#F8F9FA] z-20 benefits-section">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="benefits-title text-4xl font-semibold text-[#E51E2A] text-center mb-12">
            Why Choose Coca-Cola?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-5 border-2 rounded-lg shadow-md bg-white animated-border hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-3">Refreshing Flavor</h3>
              <p>
                Coca-Cola's flavor is known globally, delivering a refreshing
                experience with every sip.
              </p>
            </div>
            <div className="p-5 border-2 rounded-lg shadow-md bg-white animated-border hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-3">Timeless Brand</h3>
              <p>
                Enjoyed by people from all walks of life, Coca-Cola has become a
                symbol of enjoyment worldwide.
              </p>
            </div>
            <div className="p-5 border-2 rounded-lg shadow-md bg-white animated-border hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-3">
                Quality Ingredients
              </h3>
              <p>
                Coca-Cola is crafted with high-quality ingredients, providing
                you with a consistent, delightful experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="relative py-20 bg-[#FCE5E7] z-20 history-section">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="history-title text-4xl font-semibold text-center mb-12 text-[#E51E2A]">
            The Coca-Cola Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-2 animated-border hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-3">1886</h3>
                <p>
                  Dr. John Pemberton created the first Coca-Cola in Atlanta,
                  Georgia.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-2 animated-border hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-3">1893</h3>
                <p>
                  Coca-Cola was registered as a trademark and began its journey
                  to become a global brand.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-2 animated-border hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-3">1915</h3>
                <p>
                  The iconic contour bottle was created to distinguish Coca-Cola
                  from competitors.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-2 animated-border hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-3">Today</h3>
                <p>
                  Coca-Cola is enjoyed in more than 200 countries, making it one
                  of the world's most beloved beverages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 bg-[#E51E2A] text-white text-center z-20">
        <p>
          &copy; {new Date().getFullYear()} Coca-Cola Company. All rights
          reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
