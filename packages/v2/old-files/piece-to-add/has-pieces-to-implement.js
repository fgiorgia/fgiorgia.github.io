import React, { useState } from 'react';
import { Menu, X, FileSpreadsheet, Code, Database, BarChart3, Briefcase, User, Mail, Github, Linkedin, Download, ChevronRight, ExternalLink } from 'lucide-react';

const DataAnalystPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample data for projects - would be replaced with your actual projects
  const projects = {
    excel: [
      {
        title: "Sales Performance Dashboard",
        description: "Interactive dashboard tracking KPIs across regions with dynamic filtering and forecasting.",
        tools: ["Excel", "Power Query", "PivotTables", "DAX"],
        image: "/api/placeholder/600/400",
        link: "#"
      },
      {
        title: "Budget Variance Analysis",
        description: "Automated spreadsheet solution comparing actual vs. budgeted expenses with variance calculations.",
        tools: ["Google Sheets", "Apps Script", "Charts API"],
        image: "/api/placeholder/600/400",
        link: "#"
      }
    ],
    python: [
      {
        title: "Customer Segmentation Analysis",
        description: "K-means clustering algorithm to identify customer segments based on purchasing behavior.",
        tools: ["Python", "scikit-learn", "pandas", "matplotlib"],
        image: "/api/placeholder/600/400",
        link: "#",
        githubLink: "#"
      },
      {
        title: "Time Series Forecasting Model",
        description: "ARIMA and Prophet models to forecast product demand with 92% accuracy.",
        tools: ["Python", "statsmodels", "Prophet", "NumPy"],
        image: "/api/placeholder/600/400",
        link: "#",
        githubLink: "#"
      }
    ],
    sql: [
      {
        title: "E-commerce Database Optimization",
        description: "Database schema design and query optimization reducing report generation time by 65%.",
        tools: ["PostgreSQL", "Indexing", "Query Optimization"],
        image: "/api/placeholder/600/400",
        link: "#"
      },
      {
        title: "Marketing Campaign Analysis",
        description: "Complex SQL queries analyzing customer response rates across marketing channels.",
        tools: ["MySQL", "Stored Procedures", "CTEs"],
        image: "/api/placeholder/600/400",
        link: "#"
      }
    ],
    bi: [
      {
        title: "Executive Sales Dashboard",
        description: "Interactive Power BI dashboard providing real-time sales performance visualization.",
        tools: ["Power BI", "DAX", "Power Query"],
        image: "/api/placeholder/600/400",
        link: "#"
      },
      {
        title: "Supply Chain Analytics",
        description: "End-to-end supply chain visualization identifying bottlenecks and optimization opportunities.",
        tools: ["Tableau", "SQL Integration", "Forecasting"],
        image: "/api/placeholder/600/400",
        link: "#"
      }
    ]
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-indigo-600">DataAnalyst<span className="text-gray-800">Portfolio</span></a>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
              <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center">
                <Download size={16} className="mr-2" />
                Resume
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-indigo-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4 shadow-md">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center w-fit">
                <Download size={16} className="mr-2" />
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-2/3 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Data Analyst with a passion for turning data into insights</h1>
              <p className="text-xl">Specialized in Excel, Python, SQL, and data visualization with 3+ years of experience driving business decisions through data.</p>
              <div className="flex space-x-4">
                <a href="#projects" className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium flex items-center">
                  View Projects
                  <ChevronRight size={20} className="ml-2" />
                </a>
                <a href="#contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium">Contact Me</a>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <img 
                src="/api/placeholder/400/400" 
                alt="Professional headshot" 
                className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="md:flex md:space-x-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Hi, I'm [Your Name]</h3>
              <p className="text-gray-600 mb-4">
                I'm a data analyst with expertise in transforming complex datasets into actionable insights. With a background in [your background, e.g., business analytics, statistics], I specialize in using data to solve business problems and drive strategic decisions.
              </p>
              <p className="text-gray-600 mb-4">
                My analytical journey began [brief career story]. I'm passionate about [specific areas of interest in data analysis] and continuously expanding my data science toolkit.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-indigo-600 hover:text-indigo-800">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800">
                  <Github size={24} />
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">Education</h4>
                  <p className="text-gray-600">[Your Degree]</p>
                  <p className="text-gray-500">[University Name], [Year]</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">Experience</h4>
                  <p className="text-gray-600">[Latest Job Title]</p>
                  <p className="text-gray-500">[Company], [Years]</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">Certifications</h4>
                  <p className="text-gray-600">[Your Certifications]</p>
                  <p className="text-gray-500">e.g., Google Data Analytics</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">Interests</h4>
                  <p className="text-gray-600">[Your Data-Related Interests]</p>
                  <p className="text-gray-500">e.g., Machine Learning, Data Ethics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FileSpreadsheet size={28} className="text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">Spreadsheets</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced Excel formulas & functions</li>
                <li>• PivotTables & PivotCharts</li>
                <li>• Google Sheets & Apps Script</li>
                <li>• Power Query & Data Modeling</li>
                <li>• VBA for automation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Code size={28} className="text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">Python</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Data analysis with pandas</li>
                <li>• Data visualization (matplotlib, seaborn)</li>
                <li>• Statistical analysis</li>
                <li>• Machine learning with sklearn</li>
                <li>• Jupyter notebooks</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Database size={28} className="text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">SQL</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Complex queries & optimization</li>
                <li>• Database design</li>
                <li>• PostgreSQL & MySQL</li>
                <li>• Stored procedures</li>
                <li>• ETL processes</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <BarChart3 size={28} className="text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">BI Tools</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Power BI dashboard creation</li>
                <li>• DAX & M formulas</li>
                <li>• Tableau visualization</li>
                <li>• Google Data Studio</li>
                <li>• ETL & data pipelines</li>
              </ul>
            </div>
          </div>
          
          {/* Additional skills section */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Additional Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Statistical Analysis', 'A/B Testing', 'Data Cleaning', 'ETL Processes', 
                'Data Modeling', 'Forecasting', 'Data Governance', 'Reporting'].map((skill) => (
                <div key={skill} className="bg-white px-4 py-3 rounded-md text-center shadow-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore my portfolio of data analysis projects showcasing Excel/Google Sheets, Python, SQL, and visualization expertise.
            </p>
          </div>
          
          {/* Project Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#excel-projects" className="flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md">
                <FileSpreadsheet size={18} className="mr-2" />
                Excel & Google Sheets
              </a>
              <a href="#python-projects" className="flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md">
                <Code size={18} className="mr-2" />
                Python
              </a>
              <a href="#sql-projects" className="flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md">
                <Database size={18} className="mr-2" />
                SQL
              </a>
              <a href="#bi-projects" className="flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md">
                <BarChart3 size={18} className="mr-2" />
                BI Tools
              </a>
            </div>
          </div>
          
          {/* Excel Projects */}
          <div id="excel-projects" className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <FileSpreadsheet size={24} className="text-indigo-600 mr-2" />
              Excel & Google Sheets Projects
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.excel.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                      View Project
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Python Projects */}
          <div id="python-projects" className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Code size={24} className="text-indigo-600 mr-2" />
              Python Projects
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.python.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a href={project.link} className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                        View Project
                        <ExternalLink size={16} className="ml-1" />
                      </a>
                      <a href={project.githubLink} className="text-gray-600 hover:text-gray-800 font-medium flex items-center">
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* SQL Projects */}
          <div id="sql-projects" className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Database size={24} className="text-indigo-600 mr-2" />
              SQL Projects
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.sql.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                      View Project
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* BI Projects */}
          <div id="bi-projects">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <BarChart3 size={24} className="text-indigo-600 mr-2" />
              Business Intelligence Projects
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.bi.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                      View Project
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Others Say</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-600 italic mb-4">
                  "[Your name]'s analytical skills and attention to detail transformed our data into actionable insights that directly improved our business outcomes."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">[Reference Name]</p>
                    <p className="text-gray-500 text-sm">[Position], [Company]</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Career Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {[1, 2, 3].map((job) => (
              <div key={job} className="border-l-4 border-indigo-600 pl-6 ml-4 relative">
                <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-2 top-1.5"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold">[Job Title]</h3>
                  <div className="flex items-center text-gray-500">
                    <Briefcase size={16} className="mr-2" />
                    [Company Name] | [Start Date] - [End Date]
                  </div>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Led data analysis projects resulting in [specific achievement]</li>
                  <li>• Created [type of report/dashboard] that [specific business impact]</li>
                  <li>• Implemented [process/system] improving efficiency by [quantifiable result]</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="mb-8">
                I'm currently available for full-time positions and freelance projects. Let's discuss how my data analysis skills can help your organization make data-driven decisions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>gfanalyticslab@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Linkedin className="mr-4 mt-1" />
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p>linkedin.com/in/yourprofile</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Github className="mr-4 mt-1" />
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p>github.com/yourusername</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
              <form>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" id="subject" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                </div>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="text-xl font-bold">DataAnalyst<span className="text-indigo-400">Portfolio</span></a>
              <p className="text-gray-400 mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DataAnalystPortfolio;
