import { Container, Stack, Typography } from '@mui/material';
import { BookOpen, Music2, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionCard from '../components/lessons/SectionCard';

const sections = [
  {
    id: 'history',
    title: 'History',
    icon: BookOpen,
    color: '#fff8e1', // amber-100 equivalent
    lessons: [
      { id: 'origins', title: 'Origins of Bachata', progress: 80 },
      { id: 'evolution', title: 'Evolution Through Decades', progress: 30 },
      { id: 'modern', title: 'Modern Bachata', progress: 0 }
    ]
  },
  // ... other sections (music and dance) remain the same
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
        Learn Bachata
      </Typography>
      <Stack spacing={3}>
        {sections.map((section) => (
          <SectionCard
            key={section.id}
            {...section}
            lessonCount={section.lessons.length}
            onClick={() => navigate(`/${section.id}`)}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default HomePage; 