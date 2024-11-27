import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MessageCircle, Heart } from 'lucide-react';
import { config } from '../config';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        formRef.current,
        config.emailjs.publicKey
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppChat = () => {
    const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=Hi,%20I%20saw%20your%20profile%20and%20would%20love%20to%20connect!`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 sm:py-24 bg-white" id="contact">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 gradient-text">
          Let's Mingle
        </h2>
        
        <div className="relative px-4 sm:px-0">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-teal-200 rounded-3xl blur-xl opacity-50"></div>
          <div className="glass-effect p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl relative">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/20 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all hover:bg-white/60 text-gray-800"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/20 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all hover:bg-white/60 text-gray-800"
                    placeholder="Enter your lovely email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/20 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all hover:bg-white/60 text-gray-800"
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="romantic-button hover-lift flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Heart className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppChat}
                  className="soft-button hover-lift flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start Chat</span>
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-center mt-4">
                  Message sent successfully! ❤️
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-red-600 text-center mt-4">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}