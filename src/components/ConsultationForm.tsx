import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ConsultationForm({ onClose }: { onClose?: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send confirmation email to user
      await emailjs.send(
        'service_fr6sl5l',
        'template_4seks3t',
        {
          to_name: formData.name,
          to_email: formData.email,
          from_name: 'Marketing Mavericks',
          message: 'Thank you for your interest in our services. We will review your request and get back to you shortly with more information.',
          reply_to: 'avitrama@gmail.com'
        },
        '8G1dQAZZYU1frySEh'
      );

      // Send notification to admin
      await emailjs.send(
        'service_fr6sl5l',
        'template_4seks3t',
        {
          to_name: 'Admin',
          to_email: 'avitrama@gmail.com',
          from_name: formData.name,
          message: `New consultation request from ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}`,
          reply_to: formData.email
        },
        '8G1dQAZZYU1frySEh'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '' });
      setTimeout(() => onClose?.(), 2000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077b5] focus:border-[#0077b5]"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077b5] focus:border-[#0077b5]"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077b5] focus:border-[#0077b5]"
          placeholder="+1 (555) 000-0000"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-[#0077b5] text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-all ${
          isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#005885]'
        }`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
        <ArrowRight className="w-5 h-5" />
      </button>
      {submitStatus === 'success' && (
        <p className="text-green-600 text-center">Thank you! We'll contact you shortly.</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}