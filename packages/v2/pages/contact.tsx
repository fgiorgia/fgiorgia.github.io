// pages/contact.tsx
import { useState } from 'react';
import type { NextPage } from 'next';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/SEO';

const Contact: NextPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });
    
    // Here you would typically send the form data to your backend or a form service
    // This is a simulated submission
    setTimeout(() => {
      // For demo purposes, assume submission was successful
      setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <Layout>
      <SEO 
        title="Contact Me"
        description="Get in touch with me for data analysis services, collaborations, or job opportunities. I'd love to hear from you!"
      />
      
      {/* Page Header */}
      <div className="bg-indigo-700 text-white">
        <div className="container-wide py-16">
          <h1 className="text-3xl md:text-4xl font-bold">Get In Touch</h1>
          <p className="mt-4 text-lg text-indigo-200 max-w-3xl">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
                {formStatus.isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-4">
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">Thank you for contacting me. I'll get back to you as soon as possible.</p>
                  </div>
                ) : formStatus.isError ? (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-4">
                    <p className="font-medium">Something went wrong!</p>
                    <p className="text-sm">Please try again or contact me directly via email.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-colors" 
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-colors" 
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-colors" 
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-colors"
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
                    disabled={formStatus.isSubmitting}
                  >
                    {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-indigo-600 mt-1 mr-3" size={20} />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:your.email@example.com" className="text-indigo-600 hover:text-indigo-800">
                        your.email@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-indigo-600 mt-1 mr-3" size={20} />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a href="tel:+1234567890" className="text-indigo-600 hover:text-indigo-800">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-indigo-600 mt-1 mr-3" size={20} />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-600">Your City, State/Country</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Linkedin className="text-blue-700 mr-2" size={20} />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Github className="text-gray-800 mr-2" size={20} />
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="https://twitter.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Twitter className="text-blue-400 mr-2" size={20} />
                    <span>Twitter</span>
                  </a>
                  
                  <a 
                    href="mailto:your.email@example.com" 
                    className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="text-indigo-600 mr-2" size={20} />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Availability Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
            <h2 className="text-xl font-semibold mb-3 text-indigo-800">Current Availability</h2>
            <p className="text-gray-700 mb-4">
              I'm currently available for freelance projects, contract work, and full-time positions in data analysis and business intelligence.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Freelance Projects
              </div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Contract Work
              </div>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                Full-time Opportunities
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section (Optional) */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What types of projects do you take on?</h3>
              <p className="text-gray-600">
                I specialize in data analysis, visualization, and business intelligence projects. This includes dashboard development, data modeling, automated reporting, and analytical studies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What is your typical process for new projects?</h3>
              <p className="text-gray-600">
                I start with a discovery call to understand your needs, followed by a detailed proposal. Once approved, I'll execute the project with regular check-ins, and provide documentation upon completion.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How do you charge for your services?</h3>
              <p className="text-gray-600">
                Depending on the project, I work on either a fixed-price or hourly basis. For ongoing work, I offer retainer packages with discounted rates.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How quickly can you start on a new project?</h3>
              <p className="text-gray-600">
                My current lead time is approximately 2 weeks, but I can sometimes accommodate rush projects. Please contact me with your timeline and I'll do my best to work with you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;