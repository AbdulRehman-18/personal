import React from 'react';
import { Heart, Music, Camera, Plane, Book, Coffee, Smile, HeartHandshake, Moon, Utensils } from 'lucide-react';

export function About() {
  return (
    <section className="romantic-bg section-padding" id="about">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heart className="w-10 h-10 text-primary mx-auto mb-6 heart-beat" />
          <h2 className="text-3xl md:text-4xl font-bold romantic-heading mb-6 float-up">
            Getting to Know Me
          </h2>
          <p className="text-lg text-gray-700 float-up" style={{ animationDelay: '0.1s' }}>
          A hopeless romantic at heart, I cherish creating deep, meaningful connections filled with love and understanding. I’m devoted to supporting and caring for those I hold dear, always striving to make them feel truly special.          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Personality Card */}
          <div className="romantic-card float-up" style={{ animationDelay: '0.2s' }}>
            <Heart className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">My Heart</h3>
            <p className="text-gray-700 mb-4">
              I'll take you on a journey of love and understanding, where we'll explore the depths of our hearts and create lasting memories together.
            </p>
            <div className="flex items-center gap-2">
              <Smile className="w-5 h-5 text-primary" />
              <span className="text-gray-600">Hopeless Romantic</span>
            </div>
          </div>

          {/* Interests Card */}
          <div className="romantic-card float-up" style={{ animationDelay: '0.3s' }}>
            <HeartHandshake className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Passions</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-gray-600">Deep Lover</span>
              </div>
              <div className="flex items-center gap-2">
                <Moon className="w-5 h-5 text-primary" />
                <span className="text-gray-600">Professional Sleeper</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-primary" />
                <span className="text-gray-600">Enthusiastic Eater</span>
              </div>
            </div>
          </div>

          {/* Looking For Card */}
          <div className="romantic-card float-up" style={{ animationDelay: '0.4s' }}>
            <Coffee className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Ideal Date</h3>
            <p className="text-gray-700 mb-4">
              A cozy coffee shop, engaging conversation, and getting lost in each 
              other's stories. Simple moments that create lasting memories.
            </p>
            <div className="flex items-center gap-2">
              <Plane className="w-5 h-5 text-primary" />
              <span className="text-gray-600">Adventure Seeker</span>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform rotate-6"></div>
              <div className="absolute inset-0 bg-secondary/10 rounded-[2rem] transform -rotate-3"></div>
              <img
                src="/images/dedy.jpeg"
                alt="Profile"
                className="profile-image relative z-10"
              />
              <Heart className="absolute top-4 right-4 w-6 h-6 text-primary soft-float" />
              <Heart className="absolute bottom-4 left-4 w-6 h-6 text-primary soft-float" 
                     style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold romantic-heading float-up">
              Looking for a Lovely Life Partner x4
            </h3>
            <p className="text-gray-700 float-up" style={{ animationDelay: '0.1s' }}>
              I believe the best relationships start with friendship and grow into something 
              beautiful. Someone who values honest communication, shares laughter, and dreams 
              of building a meaningful life together.
            </p>
            <div className="flex flex-wrap gap-3 float-up" style={{ animationDelay: '0.2s' }}>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                Genuine Connection
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                Shared Values
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                Growth Together
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}