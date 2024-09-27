import MainContent from "@/components/MainContent/MainContent";
import Stack from "@/components/Stack/Stack";
import Text from "@/components/Text/Text";
import React from "react";

const Page: React.FC = () => {
  return (
    <MainContent>
      <Stack className="mt-16">
        <div className="content-with-media">
          <div className="text-content">
            <Text>
              Hi there! I'm from the beautiful island of Sardinia in Italy. I started my journey studying Psychology at the University of Cagliari, where I discovered my love for data analysis. I did a lot of courses on Statistics, and one of my favorite projects was creating and analyzing surveys to understand what motivates people.
            </Text>
          </div>
          <div className="media-content">
            <img src="/assets/img/cagliari-sardinia-italy.jpg" alt="Cagliari, Sardinia" />
          </div>
        </div>
        <Text>
          Despite life's unexpected turns leading me from Italy to Finland and finally Sweden, my commitment to advancing my career remained unwavering. This transition inspired a pivotal shift in my career path toward Data Analysis—a field where my statistical skills and passion for discovery converge. I seized the opportunity to enhance my expertise through several courses, including a comprehensive program from ReDI School, which fortified my foundation in this dynamic field.
        </Text>
        <div className="content-with-media">
          <div className="text-content">
            <Text>
              Today, I bring a multifaceted skill set to the table, combining technical proficiency in Python, SQL, and Power BI with a nuanced understanding of statistical analysis gained from both university studies and hands-on projects. My recent accomplishments include completing the Data Analytics course at ReDI School Malmö with honors and contributing to a challenging project that underscored my ability to deliver impactful insights.
            </Text>
          </div>
          <div className="media-content">
            <video muted autoPlay loop style={{ backgroundColor: 'black' }}>
              {/* <source src="/assets/video/aboutme-soccer-image-detection.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </source> */}
            </video>
          </div>
        </div>
        <Text gutter>
          Currently, I'm applying my skills in an internship at ReFab Lab, Malmö, where I continue to learn and grow as a data analyst.
        </Text>
        <Text gutter>
          I love what I do because it lets me solve puzzles with data, and I'm always excited to learn more and get better at my job. I'm looking forward to using my skills to help understand and solve new challenges.
        </Text>
        <Text gutter>
          Let's see what we can discover together with data!
        </Text>
      </Stack>
    </MainContent>
  )
};

export default Page;