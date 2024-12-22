import { Container, Typography, Paper, Box, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ReactPlayer from 'react-player';

// This could be moved to a separate data file
const lessonContent = {
  origins: {
    title: 'Origins of Bachata',
    content: `Bachata originated in the Dominican Republic in the early parts of the 20th century...`,
    videoUrl: 'https://www.youtube.com/watch?v=example',
  },
  evolution: {
    title: 'Evolution Through Decades',
    content: `Throughout the decades, bachata has evolved significantly...`,
    videoUrl: 'https://www.youtube.com/watch?v=example',
  },
  // Add more lesson content here
};

const LessonContent = () => {
  const { sectionId, lessonId } = useParams<{ sectionId: string; lessonId: string }>();
  const navigate = useNavigate();

  const lesson = lessonId ? lessonContent[lessonId as keyof typeof lessonContent] : null;

  if (!lesson) {
    return (
      <Container>
        <Typography>Lesson not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box mb={4}>
        <Button 
          startIcon={<ArrowLeft />}
          onClick={() => navigate(`/${sectionId}`)}
        >
          Back to Lessons
        </Button>
      </Box>

      <Typography variant="h4" component="h1" gutterBottom>
        {lesson.title}
      </Typography>

      {lesson.videoUrl && (
        <Box mb={4}>
          <Paper 
            sx={{ 
              position: 'relative',
              paddingTop: '56.25%', // 16:9 Aspect Ratio
              backgroundColor: 'black'
            }}
          >
            <ReactPlayer
              url={lesson.videoUrl}
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }}
              controls
            />
          </Paper>
        </Box>
      )}

      <Paper sx={{ p: 3 }}>
        <Typography variant="body1" component="div">
          {lesson.content}
        </Typography>
      </Paper>

      <Box display="flex" justifyContent="space-between" mt={4}>
        <Button startIcon={<ArrowLeft />}>
          Previous Lesson
        </Button>
        <Button endIcon={<ArrowRight />}>
          Next Lesson
        </Button>
      </Box>
    </Container>
  );
};

export default LessonContent; 