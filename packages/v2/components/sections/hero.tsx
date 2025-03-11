import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Button from "../ui/button";
import { colors } from "@/styles/colors";

const Hero: React.FC = () => {
  return (
    //<div className="bg-gradient-to-r from-indigo-700 to-indigo-800 text-white">
    <div
      className="bg-gradient-to-r from-indigo-700 to-indigo-800 text-white"
      // className="text-white"
      // style={{
      //   background: `linear-gradient(90deg, ${colors.teal[400]}, ${colors.teal[500]})`,
      // }}
    >
      <div className="container-wide py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-indigo-100">
              Turning Complex Data Into Actionable Insights
            </h1>
            <p className="mt-4 text-base sm:text-lg text-indigo-100 max-w-lg">
              Data Analyst specializing in Excel, Python, SQL, and Business
              Intelligence solutions
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
              <Button
                href="#projects"
                variant="outline"
                className="w-full sm:w-auto text-center"
              >
                View My Work
              </Button>
              <Button
                href="#contact"
                variant="outline"
                className="mt-4 sm:mt-0 w-full sm:w-auto text-center"
              >
                Contact Me
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div
              className="bg-indigo-600 backdrop-blur-sm rounded-lg p-6 shadow-lg max-w-sm"
            >
              <div className="flex justify-center mb-4">
                <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden bg-white relative">
                  <Image
                    src="/images/giorgia_faedda.png"
                    alt="Giorgia Faedda - Profile Photo"
                    fill
                    sizes="(max-width: 640px) 96px, 128px"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-xl text-indigo-50 font-bold">
                  Giorgia Faedda
                </h2>
                <p className="text-indigo-200">
                  Data Analyst | Statistics | Business Intelligence Developer |
                  Azure AI Certified
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a
                    href="https://github.com/yourusername"
                    className="text-indigo-200 hover:text-white transition-colors"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    className="text-indigo-200 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-indigo-200 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
