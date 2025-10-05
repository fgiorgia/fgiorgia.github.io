import React from 'react';
import { FileSpreadsheet, Code, Database, BarChart2 } from 'lucide-react';
import { Skill, SkillsProps } from '@/core/common/types';

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const defaultSkills: Skill[] = [
    {
      id: 'excel',
      title: 'Excel & Google Sheets',
      description:
        'Data automation & modeling, advanced formulas, ETL, dynamic dashboards',
      icon: <FileSpreadsheet size={32} className="text-indigo-600" />,
      level: 85,
      tools: [
        'Pivot Tables',
        'Power Query',
        'Macros & VBA',
        'Conditional Formatting',
        'Array Formulas',
        'VLOOKUP',
        'XLOOKUP',
        'INDEX',
        'MATCH',
      ],
    },
    {
      id: 'python',
      title: 'Python',
      description:
        'Data wrangling, cleaning, & visualization, exploratory data analysis, statistical modeling, reporting & automation',
      icon: <Code size={32} className="text-indigo-600" />,
      level: 75,
      tools: [
        'pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
        'scikit-learn',
        'Statsmodels',
      ],
    },
    {
      id: 'sql',
      title: 'SQL',
      description:
        'Query optimization, database design, complex SQL expressions, data extraction & transformation',
      icon: <Database size={32} className="text-indigo-600" />,
      level: 65,
      tools: [
        'MySQL',
        'PostgreSQL',
        'Joins',
        'Database Design',
        'Window Functions',
      ],
    },
    {
      id: 'bi',
      title: 'BI Tools',
      description:
        'Interactive dashboards, data visualization best practices, report design & storytelling, data extraction & transformation',
      icon: <BarChart2 size={32} className="text-indigo-600" />,
      level: 70,
      tools: [
        'Tableau',
        'Looker',
        'Power BI',
        'Calculated Fields',
        'Data Blending',
      ],
    },
  ];

  const displaySkills = skills || defaultSkills;

  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="container-wide">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          My Technical Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displaySkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-4px]"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-center mb-2 h-13 overflow-hidden">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-center mb-4 h-24 overflow-hidden">
                {skill.description}
              </p>

              {/* Skill level indicator */}
              {/* <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  aria-label={`Skill level: ${skill.level}%`}
                ></div>
              </div>
              <p className="text-xs text-gray-500 text-right">{skill.level}%</p> */}

              {/* Skill tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
