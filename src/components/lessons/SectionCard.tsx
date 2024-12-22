import { Button, Box, Typography } from '@mui/material';
import { ChevronRight } from 'lucide-react';

interface SectionCardProps {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  lessonCount: number;
  onClick: () => void;
}

const SectionCard = ({ id, title, icon: Icon, color, lessonCount, onClick }: SectionCardProps) => (
  <Button
    fullWidth
    onClick={onClick}
    sx={{
      p: 3,
      borderRadius: 2,
      backgroundColor: color,
      '&:hover': { opacity: 0.9 },
      textAlign: 'left'
    }}
  >
    <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
      <Box display="flex" alignItems="center" gap={2}>
        <Icon />
        <Box>
          <Typography variant="h6" color="text.primary">{title}</Typography>
          <Typography variant="body2" color="text.secondary">{lessonCount} lessons</Typography>
        </Box>
      </Box>
      <ChevronRight />
    </Box>
  </Button>
);

export default SectionCard; 