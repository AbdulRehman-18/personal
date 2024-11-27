import React from 'react';
import { Shield, Users, Target, Heart } from 'lucide-react';

export function Values() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-rose-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 gradient-text">What I Value</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          <div className="glass-effect p-6 sm:p-8 rounded-2xl text-center hover-scale shadow-soft group">
            <Shield className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-rose-500 mb-4 sm:mb-6 animate-float group-hover:rotate-12 transition-transform" />
            <h3 className="font-semibold text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800">Honesty</h3>
            <p className="text-gray-700 sm:text-lg leading-relaxed">Building trust through open and sincere communication</p>
          </div>
          
          <div className="glass-effect p-6 sm:p-8 rounded-2xl text-center hover-scale shadow-soft group">
            <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-rose-500 mb-4 sm:mb-6 animate-float group-hover:rotate-12 transition-transform" style={{ animationDelay: '0.5s' }} />
            <h3 className="font-semibold text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800">Family</h3>
            <p className="text-gray-700 sm:text-lg leading-relaxed">Strong family values and creating lasting bonds</p>
          </div>
          
          <div className="glass-effect p-6 sm:p-8 rounded-2xl text-center hover-scale shadow-soft group">
            <Target className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-rose-500 mb-4 sm:mb-6 animate-float group-hover:rotate-12 transition-transform" style={{ animationDelay: '1s' }} />
            <h3 className="font-semibold text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800">Ambition</h3>
            <p className="text-gray-700 sm:text-lg leading-relaxed">Continuous growth and achieving goals together</p>
          </div>
          
          <div className="glass-effect p-6 sm:p-8 rounded-2xl text-center hover-scale shadow-soft group">
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-rose-500 mb-4 sm:mb-6 animate-float group-hover:rotate-12 transition-transform" style={{ animationDelay: '1.5s' }} />
            <h3 className="font-semibold text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800">Love</h3>
            <p className="text-gray-700 sm:text-lg leading-relaxed">Deep emotional connection and mutual respect</p>
          </div>
        </div>
      </div>
    </section>
  );
}