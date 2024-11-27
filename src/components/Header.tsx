import React, { useState, useCallback } from 'react';
import { Heart, MessageCircle, Coffee, Sparkles, Cloud } from 'lucide-react';

export function Header() {
  const [loveParticles, setLoveParticles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);
  const [coffeeCups, setCoffeeCups] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  const createLoveExplosion = useCallback(() => {
    const newParticles = [];
    const numParticles = 15;
    
    for (let i = 0; i < numParticles; i++) {
      const angle = (i / numParticles) * Math.PI * 2;
      const distance = Math.random() * 200 + 100;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      
      newParticles.push({
        id: Date.now() + i,
        style: {
          '--tx': `${tx}px`,
          '--ty': `${ty}px`,
          left: '50%',
          top: '50%',
          color: '#FF6B6B',
          fontSize: `${Math.random() * 20 + 20}px`
        } as React.CSSProperties
      });
    }
    
    setLoveParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => {
      setLoveParticles(prev => prev.filter(p => p.id !== newParticles[0].id));
    }, 1500);
  }, []);

  const createCoffeeAnimation = useCallback(() => {
    const id = Date.now();
    setCoffeeCups(prev => [...prev, { id, style: {} }]);
    setTimeout(() => {
      setCoffeeCups(prev => prev.filter(c => c.id !== id));
    }, 2000);
  }, []);

  return (
    <header className="min-h-screen romantic-bg flex items-center justify-center section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Heart className="w-8 h-8 text-primary heart-beat" />
              <Sparkles className="w-6 h-6 text-secondary soft-float" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold romantic-heading float-up">
              Looking for a lovely Life Partner x 4
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 float-up" 
               style={{ animationDelay: '0.1s' }}>
              Seeking someone special who values deep conversations, shared laughter, 
              and building a beautiful future together.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 float-up" 
                 style={{ animationDelay: '0.2s' }}>
              <button 
                className="romantic-button hover-lift flex items-center gap-2 group"
                onClick={createLoveExplosion}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Let's Connect</span>
                <Heart className="w-4 h-4 group-hover:scale-125 transition-transform" />
              </button>
              
              <button 
                className="soft-button hover-lift flex items-center gap-2"
                onClick={createCoffeeAnimation}
              >
                <Coffee className="w-5 h-5" />
                <span>Coffee Date?</span>
              </button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative">
            <div className="aspect-square w-full max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform rotate-6"></div>
              <div className="absolute inset-0 bg-secondary/10 rounded-[2rem] transform -rotate-3"></div>
              
              <img
                src="/images/dedy.jpeg"
                alt="Profile"
                className="profile-image relative z-10"
              />
              
              {/* Floating elements */}
              <Heart className="absolute top-4 right-4 w-6 h-6 text-primary soft-float" 
                     style={{ animationDelay: '0.2s' }} />
              <Heart className="absolute bottom-4 left-4 w-6 h-6 text-primary soft-float" 
                     style={{ animationDelay: '0.4s' }} />
              <Sparkles className="absolute top-1/2 -left-4 w-6 h-6 text-secondary soft-float" 
                       style={{ animationDelay: '0.6s' }} />
            </div>
            
            {/* Stats Cards */}
{/*             <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-4 px-4">
              <div className="glass-card p-4 rounded-xl hover-lift text-center">
                <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm text-gray-600">Looking for Love</div>
              </div>
              <div className="glass-card p-4 rounded-xl hover-lift text-center">
                <Coffee className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm text-gray-600">Coffee Enthusiast</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Love Particles Container */}
      <div className="love-particles-container">
        {loveParticles.map(particle => (
          <Heart 
            key={particle.id}
            className="flying-heart"
            style={particle.style}
          />
        ))}
      </div>

      {/* Coffee Animation Container */}
      <div className="coffee-particles">
        {coffeeCups.map(cup => (
          <div key={cup.id} className="coffee-cup">
            <Coffee className="w-16 h-16 text-primary" />
            <Cloud className="coffee-steam w-4 h-4" />
            <Cloud className="coffee-steam w-3 h-3" />
            <Cloud className="coffee-steam w-4 h-4" />
            <Heart className="coffee-heart w-4 h-4" />
            <Heart className="coffee-heart w-4 h-4" />
          </div>
        ))}
      </div>
    </header>
  );
}
