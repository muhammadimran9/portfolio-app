"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const SocialMediaCard = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      if (!db) {
        throw new Error('Firebase not configured');
      }
      
      await addDoc(collection(db, 'contactForms'), {
        ...formData,
        subject: formData.service ? `Quote Request - ${formData.service}` : 'Contact Form Submission',
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString(),
        status: 'unread'
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="max-w-[854px] transition-all duration-300 lg:w-4/5 mx-auto">
      <div className="mt-20 p-8 lg:mt-0" data-aos="fade-up">
        <h1 className="text-2xl font-medium text-white">Contact</h1>
        <p className="mb-6 border-b border-dashed border-neutral-600 pb-6 pt-2 text-neutral-400">
          Let&apos;s get in touch
        </p>
        <div className="flex flex-col space-y-4">
          <h2 className="text-white">Find me on social media</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* GMAIL */}
            <div className="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border-2 border-neutral-700 p-6 md:col-span-2 bg-gradient-to-b from-red-700 to-red-900">
              <div className="text-red-300 z-10 flex flex-col justify-between gap-y-2">
                <h4 className="text-lg font-semibold tracking-wide">Stay in Touch</h4>
                <p className="pb-2 text-xs">Reach out via email for inquiries or collaborations.</p>
                <a href="mailto:malanhans777@gmail.com" target="_blank" rel="noreferrer" className="bg-red-300 rounded-md bg-opacity-85 px-4 py-2 transition duration-300 hover:scale-105 hover:bg-opacity-100 md:w-max flex items-center gap-x-2 text-slate-800">
                  <span className="text-sm font-medium">Go to <span className="capitalize">gmail</span></span>
                </a>
              </div>
            </div>
            {/* INSTAGRAM */}
            <div className="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border-2 border-neutral-700 p-6 bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500">
              <div className="text-purple-200 z-10 flex flex-col justify-between gap-y-2">
                <h4 className="text-lg font-semibold tracking-wide">Follow My Journey</h4>
                <p className="pb-2 text-xs">Follow my creative journey.</p>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="bg-purple-200 rounded-md bg-opacity-85 px-4 py-2 transition duration-300 hover:scale-105 hover:bg-opacity-100 md:w-max flex items-center gap-x-2 text-slate-800">
                  Go to <span className="capitalize">instagram</span>
                </a>
              </div>
            </div>
            {/* LINKEDIN */}
            <div className="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border-2 border-neutral-700 p-6 bg-gradient-to-b from-sky-700 to-sky-900">
              <div className="text-sky-300 z-10 flex flex-col justify-between gap-y-2">
                <h4 className="text-lg font-semibold tracking-wide">Let&apos;s Connect</h4>
                <p className="pb-2 text-xs">Connect with me professionally.</p>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="bg-sky-300 rounded-md bg-opacity-85 px-4 py-2 transition duration-300 hover:scale-105 hover:bg-opacity-100 md:w-max flex items-center gap-x-2 text-slate-800">
                  Go to <span className="capitalize">linkedin</span>
                </a>
              </div>
            </div>
            {/* TIKTOK */}
            <div className="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border-2 border-neutral-700 p-6 bg-gradient-to-b from-neutral-700 to-neutral-900">
              <div className="text-neutral-400 z-10 flex flex-col justify-between gap-y-2">
                <h4 className="text-lg font-semibold tracking-wide">Join the Fun</h4>
                <p className="pb-2 text-xs">Watch engaging and fun content.</p>
                <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="bg-neutral-400 rounded-md bg-opacity-85 px-4 py-2 transition duration-300 hover:scale-105 hover:bg-opacity-100 md:w-max flex items-center gap-x-2 text-slate-800">
                  Go to <span className="capitalize">tiktok</span>
                </a>
              </div>
            </div>
            {/* GITHUB */}
            <div className="relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border-2 border-neutral-700 p-6 bg-gradient-to-b from-slate-900 to-slate-950">
              <div className="text-slate-400 z-10 flex flex-col justify-between gap-y-2">
                <h4 className="text-lg font-semibold tracking-wide">Explore the Code</h4>
                <p className="pb-2 text-xs">Explore my open-source work.</p>
                <a href="https://github.com/muhammadimran9" target="_blank" rel="noreferrer" className="bg-slate-400 rounded-md bg-opacity-85 px-4 py-2 transition duration-300 hover:scale-105 hover:bg-opacity-100 md:w-max flex items-center gap-x-2 text-slate-800">
                  Go to <span className="capitalize">github</span>
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-white">Get Free Quote</h2>
            {submitStatus === 'success' && (
              <div className="bg-green-600 text-white p-4 rounded-lg">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-600 text-white p-4 rounded-lg">
                Sorry, there was an error. Please email directly at malanhans777@gmail.com
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4 transition-all duration-300">
              <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full rounded-lg bg-neutral-900 p-2 outline outline-neutral-700 focus:outline-neutral-400 text-white" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full rounded-lg bg-neutral-900 p-2 outline outline-neutral-700 focus:outline-neutral-400 text-white" />
              </div>
              <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full rounded-lg bg-neutral-900 p-2 outline outline-neutral-700 focus:outline-neutral-400 text-white" />
                <select name="service" value={formData.service} onChange={handleChange} className="w-full rounded-lg bg-neutral-900 p-2 outline outline-neutral-700 focus:outline-neutral-400 text-white">
                  <option value="">Select Service (Optional)</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="E-commerce Solutions">E-commerce Solutions</option>
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="API Development">API Development</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Message" required className="w-full rounded-lg bg-neutral-900 p-2 outline outline-neutral-700 focus:outline-neutral-400 text-white" />
              <button type="submit" disabled={isSubmitting} className="w-full rounded-lg bg-neutral-600 px-4 py-2 text-neutral-50 shadow-md transition-all duration-300 hover:bg-neutral-700 hover:shadow-lg disabled:bg-neutral-800">
                {isSubmitting ? 'Sending...' : 'Send Email'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SocialMediaCard;
