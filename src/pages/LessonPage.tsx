import { Container, Typography, List, ListItem, ListItemButton, ListItemText, ListItemIcon, LinearProgress, Box } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { BookOpen, Music2, Users } from 'lucide-react';
import { useMemo } from 'react';

// This could be moved to a separate data file
const sectionsData = {
  history: {
    title: 'History of Bachata',
    icon: BookOpen,
    lessons: [
      { id: 'origins', title: 'Origins of Bachata', progress: 80 },
      { id: 'evolution', title: 'Evolution Through Decades', progress: 30 },
      { id: 'modern', title: 'Modern Bachata', progress: 0 }
    ]
  },
  music: {
    title: 'Music Theory',
    icon: Music2,
    lessons: [
      { id: 'rhythm', title: 'Basic Rhythm', progress: 60 },
      { id: 'instruments', title: 'Key Instruments', progress: 40 },
      { id: 'styles', title: 'Musical Styles', progress: 0 }
    ]
  },
  dance: {
    title: 'Dance Steps',
    icon: Users,
    lessons: [
      { id: 'basic', title: 'Basic Steps', progress: 100 },
      { id: 'turns', title: 'Basic Turns', progress: 50 },
      { id: 'combinations', title: 'Step Combinations', progress: 0 }
    ]
  }
};

const LessonPage = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();

  const section = useMemo(() => {
    if (!sectionId || !sectionsData[sectionId as keyof typeof sectionsData]) {
      return null;
    }
    return sectionsData[sectionId as keyof typeof sectionsData];
  }, [sectionId]);

  if (!section) {
    return (
      <Container>
        <Typography>Section not found</Typography>
      </Container>
    );
  }

  const Icon = section.icon;

  return (
    <Container maxWidth="md">
      <Box display="flex" alignItems="center" gap={2} mb={4}>
        <Icon size={32} />
        <Typography variant="h4" component="h1">
          {section.title}
        </Typography>
      </Box>

      <List>
        {section.lessons.map((lesson) => (
          <ListItem key={lesson.id} disablePadding>
            <ListItemButton onClick={() => navigate(`/${sectionId}/${lesson.id}`)}>
              <ListItemText
                primary={lesson.title}
                secondary={
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={lesson.progress} />
                  </Box>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default LessonPage; 