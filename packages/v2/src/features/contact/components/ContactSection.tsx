import React from 'react';
import Button from '@/features//common/components/Button';

const ContactSection: React.FC = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-r from-indigo-700 to-indigo-800 text-white py-12 md:py-16"
    >
      <div className="container-wide text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-100">
          Let's Work Together
        </h2>
        <p className="text-lg md:text-xl text-indigo-100 mb-6 md:mb-8 max-w-2xl mx-auto">
          Looking for data analysis expertise? I'm currently available for
          freelance projects and full-time opportunities.
        </p>
        <a href="mailto:giorgia.faedda@gfanalytics.se" className="inline-block">
          <Button
            variant="secondary"
            className="px-8 py-3 text-base md:text-lg"
          >
            Get in Touch
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
