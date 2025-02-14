import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env.local') });

const app = express();
app.use(cors());
app.use(express.json());

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Log environment variables (excluding sensitive data)
console.log('Environment check:', {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER?.substring(0, 3) + '***',
  hasPassword: !!process.env.SMTP_PASSWORD
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  debug: true, // Enable debug logging
  logger: true // Enable built-in logger
});

// Verify transporter configuration on startup
transporter.verify(function(error, success) {
  if (error) {
    console.error('Transporter verification failed:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

app.post('/api/feedback', async (req, res) => {
  console.log('Received feedback request');
  try {
    const { message, email } = req.body;
    console.log('Request body:', { message, email });

    if (!message) {
      console.log('Missing message in request');
      return res.status(400).json({ message: 'Message is required' });
    }

    console.log('Attempting to send email with:', {
      from: process.env.SMTP_USER,
      to: 'javiecija96@gmail.com',
      message,
      emailFrom: email
    });

    const result = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'javiecija96@gmail.com',
      subject: 'New App Feedback',
      text: `
        New feedback received:
        
        Message: ${message}
        From: ${email || 'Anonymous'}
      `,
    });

    console.log('Email sent successfully:', result);
    res.json({ message: 'Feedback sent successfully' });
  } catch (error) {
    console.error('Detailed error:', {
      name: error.name,
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      stack: error.stack
    });
    res.status(500).json({ 
      message: 'Failed to send feedback',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 