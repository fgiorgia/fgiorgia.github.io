// components/projects/BiProject.tsx
import React from 'react';
import Card from '../../../common/components/Card';
import Box from '@swiftpost/elysium/ui/base/Box';
import Text from '@swiftpost/elysium/ui/base/Text';
import Stack from '@swiftpost/elysium/ui/base/Stack';
import { ProjectContentProps } from '@/features/common/types';
import { colors } from '@/features/common/styles/colors';
import { unit, fontWeights } from '@/features/common/styles/staticTheme';
import SectionContainer from '../SectionCard';

// BI uses green color scheme
const colorScheme = {
  primary: colors.green[800],
  secondary: colors.green[700],
  bg: colors.green[50],
  basicBorder: colors.gray[800],
  accentBorder: colors.green[200],
  accent: colors.green[100],
  bullet: colors.green[600],
};

const dataProcessSteps = [
  {
    title: 'Requirements Gathering',
    detail: 'Understanding KPIs and business questions',
  },
  {
    title: 'Data Modeling',
    detail: 'Designing the data architecture',
  },
  {
    title: 'Measure Development',
    detail: 'Creating calculated metrics and KPIs',
  },
  {
    title: 'Visualization Design',
    detail: 'Creating intuitive and informative visuals',
  },
  {
    title: 'Deployment & User Training',
    detail: 'Publishing and onboarding stakeholders',
  },
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Text
      component="h2"
      sx={{
        fontSize: unit(3), // text-2xl
        fontWeight: fontWeights.bold, // font-bold
        color: colorScheme.primary, // text-[colorScheme.primary]
        marginBottom: unit(2.5), // mb-6
      }}
    >
      {children}
    </Text>
  );
};

const SubSectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Text
      component="h3"
      sx={{
        fontSize: unit(2.5), // text-xl
        fontWeight: 600, // font-semibold
        color: colorScheme.primary, // text-[colorScheme.primary]
        marginBottom: unit(2), // mb-4
      }}
    >
      {children}
    </Text>
  );
};

const BiProjectShowcase: React.FC<ProjectContentProps> = ({ project }) => {
  return (
    <Stack spacing={unit(8)}>
      <Card
        padding={unit(4)} // p-8
        borderWidthPx={1} // border
        borderColor={colorScheme.accentBorder} // border-green-200
      >
        <SectionTitle>Business Intelligence Dashboard</SectionTitle>

        <Box
          sx={{
            display: 'grid', // grid
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, // grid-cols-1 md:grid-cols-2
            gap: unit(4), // gap-8
          }}
        >
          <Box>
            <SubSectionTitle>BI Tools Expertise</SubSectionTitle>
            <Stack
              component="ul"
              spacing={unit(1)}
              sx={{
                listStyleType: 'disc', // list-disc
                paddingLeft: '1.5rem', // pl-6
                color: colors.gray[600], // text-gray-600
              }}
            >
              <Box
                component="li"
                sx={{
                  display: 'flex', // flex
                  alignItems: 'flex-start', // items-start
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: colorScheme.bullet, // text-[colorScheme.bullet]
                    marginRight: '0.5rem', // mr-2
                  }}
                >
                  •
                </Box>
                <Text component="span">
                  <Text
                    component="span"
                    sx={{
                      fontWeight: 600, // font-semibold
                    }}
                  >
                    {' '}
                    Power BI
                  </Text>
                  : DAX formulas, calculated measures, custom visuals
                </Text>
              </Box>

              <Box
                component="li"
                sx={{
                  display: 'flex', // flex
                  alignItems: 'flex-start', // items-start
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: colorScheme.bullet, // text-[colorScheme.bullet]
                    marginRight: '0.5rem', // mr-2
                  }}
                >
                  •
                </Box>
                <Text component="span">
                  <Text component="span" sx={{ fontWeight: 600 }}>
                    {' '}
                    {/* font-semibold */}
                    Tableau
                  </Text>
                  : Interactive dashboards, calculated fields, parameters
                </Text>
              </Box>

              <Box
                component="li"
                sx={{
                  display: 'flex', // flex
                  alignItems: 'flex-start', // items-start
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: colorScheme.bullet, // text-[colorScheme.bullet]
                    marginRight: '0.5rem', // mr-2
                  }}
                >
                  •
                </Box>
                <Text component="span">
                  <Text component="span" sx={{ fontWeight: 600 }}>
                    {' '}
                    {/* font-semibold */}
                    Looker
                  </Text>
                  : LookML modeling, data exploration
                </Text>
              </Box>

              <Box
                component="li"
                sx={{
                  display: 'flex', // flex
                  alignItems: 'flex-start', // items-start
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: colorScheme.bullet, // text-[colorScheme.bullet]
                    marginRight: '0.5rem', // mr-2
                  }}
                >
                  •
                </Box>
                <Text component="span">
                  <Text component="span" sx={{ fontWeight: 600 }}>
                    {' '}
                    {/* font-semibold */}
                    Data Modeling
                  </Text>
                  : Star schema design, relationships
                </Text>
              </Box>

              <Box
                component="li"
                sx={{
                  display: 'flex', // flex
                  alignItems: 'flex-start', // items-start
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: colorScheme.bullet, // text-[colorScheme.bullet]
                    marginRight: '0.5rem', // mr-2
                  }}
                >
                  •
                </Box>
                <Text component="span">
                  <Text
                    component="span"
                    sx={{
                      fontWeight: 600, // font-semibold
                    }}
                  >
                    {' '}
                    ETL Processes
                  </Text>
                  : Data transformation and preparation
                </Text>
              </Box>
            </Stack>
          </Box>

          <Box>
            <SubSectionTitle>Dashboard Development Process</SubSectionTitle>
            <Stack
              spacing={
                unit(3.25) // space-y-6
              }
              sx={{
                position: 'relative', // relative
                paddingLeft: unit(4), // pl-8
                '&::before': {
                  content: '""',
                  position: 'absolute', // before:absolute
                  left: unit(1.5), // before:left-3
                  top: 0, // before:top-0
                  height: '100%', // before:h-full
                  borderLeft: `2px solid ${colorScheme.basicBorder}`, // before:border-l-2 before:[colorScheme.border]
                },
              }}
            >
              {dataProcessSteps.map(({ title, detail }) => (
                <React.Fragment key={title}>
                  <Box
                    sx={{
                      position: 'relative', // relative
                    }}
                  >
                    {' '}
                    <Box
                      sx={{
                        position: 'absolute', // absolute
                        left: '-32px', // left-[-32px]
                        top: 0, // top-0
                        width: unit(3), // w-6
                        height: unit(3), // h-6
                        backgroundColor: colorScheme.bg, // bg-[colorScheme.bg]
                        borderRadius: '100%', // rounded-full
                        display: 'flex', // flex
                        alignItems: 'center', // items-center
                        justifyContent: 'center', // justify-center
                      }}
                    >
                      <Box
                        sx={{
                          width: unit(1.5), // w-3
                          height: unit(1.5), // h-3
                          backgroundColor: colorScheme.accent, // bg-[colorScheme.accent]
                          borderRadius: '100%', // rounded-full
                        }}
                      />
                    </Box>
                    <Text
                      component="h4"
                      sx={{
                        fontSize: unit(2.25), // text-lg
                        fontWeight: fontWeights.medium, // font-medium
                        color: colors.gray[800], // text-gray-800
                        marginBottom: unit(0.25),
                      }}
                    >
                      {title}
                    </Text>
                    <Text
                      component="p"
                      sx={{
                        fontSize: unit(1.75), // text-sm
                        color: colors.gray[600], // text-gray-600
                      }}
                    >
                      {detail}
                    </Text>
                  </Box>
                </React.Fragment>
              ))}
            </Stack>
          </Box>
        </Box>

        <Box sx={{ marginTop: unit(4) }}>
          {' '}
          {/* mt-8 */}
          <SubSectionTitle>BI Project Approach</SubSectionTitle>
          <Box
            sx={{
              backgroundColor: colorScheme.accent, // bg-[colorScheme.accent]
              borderLeft: `4px solid ${colorScheme.accentBorder}`, // border-l-4 border-[colorScheme.border]
              padding: unit(2), // p-4
            }}
          >
            <Text
              sx={{
                fontSize: unit(2), // text-sm
                color: colors.gray[600], // text-gray-600
              }}
            >
              This business intelligence project focused on transforming
              disparate data sources into a cohesive, interactive dashboard that
              provides executives with real-time insights into key performance
              indicators. The solution prioritizes intuitive design,
              performance, and actionable insights.
            </Text>
          </Box>
        </Box>
      </Card>

      <Card className="p-8">
        <Text
          component="h2"
          sx={{
            fontSize: unit(3), // text-2xl
            fontWeight: fontWeights.bold, // font-bold
            color: colorScheme.primary, // text-[colorScheme.primary]
            marginBottom: unit(3), // mb-6
          }}
        >
          Dashboard Showcase
        </Text>

        <Box
          sx={{
            display: 'grid', // grid
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, // grid-cols-1 md:grid-cols-2
            gap: unit(2.5), // gap-6
            marginBottom: unit(4), // mb-8
          }}
        >
          <SectionContainer
            height={32}
            backgroundColor={colorScheme.bg}
            borderColor={colorScheme.accentBorder}
          >
            <Text
              component="p"
              sx={{
                color: colors.gray[500], // text-gray-500
                fontStyle: 'italic', // italic
              }}
            >
              KPI Summary would be displayed here
            </Text>
          </SectionContainer>

          <SectionContainer
            height={32}
            backgroundColor={colorScheme.bg}
            borderColor={colorScheme.accentBorder}
          >
            <Text
              component="p"
              sx={{
                color: colors.gray[500], // text-gray-500
                fontStyle: 'italic', // italic
              }}
            >
              Sales Analysis would be displayed here
            </Text>
          </SectionContainer>
        </Box>

        <Box>
          <Text
            component="h3"
            sx={{
              fontSize: unit(2.5), // text-xl
              fontWeight: fontWeights.semiBold, // font-semibold
              color: colorScheme.primary, // text-[colorScheme.primary]
              marginBottom: unit(2), // mb-4
            }}
          >
            DAX Formula Examples
          </Text>

          <SectionContainer
            // height={32}
            backgroundColor={colorScheme.bg}
            // backgroundColor={colorScheme.bg}
            borderColor={colorScheme.accentBorder}
          >
            <Box sx={{ width: '100%', padding: unit(2) }}>
              <Text
                component="pre"
                sx={{
                  color: colors.gray[800], // text-gray-800
                  fontFamily: 'monospace', // font-mono
                }}
              >
                {project.codeSnippets?.[0]?.code ?? 'Code to be filled'}
              </Text>
            </Box>
          </SectionContainer>
        </Box>
      </Card>
    </Stack>
  );
};

export default BiProjectShowcase;
