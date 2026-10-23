import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { createMemoryRouter } from 'react-router-dom';
import nodemailer from 'nodemailer';
import postcss from 'postcss';

test('application route parameters and back navigation survive router upgrade', async () => {
  const source = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
  const paths = [...source.matchAll(/<Route path="([^"]+)"/g)].map(match => match[1]);
  assert.equal(paths.length, 6);
  const router = createMemoryRouter(paths.map(path => ({ path })), {
    initialEntries: ['/section/basics/lesson/timing'],
  });
  try {
    assert.deepEqual(router.state.matches.at(-1).params, { sectionId: 'basics', lessonId: 'timing' });
    await router.navigate('/section/basics/quiz/rhythm');
    assert.equal(router.state.matches.at(-1).params.quizId, 'rhythm');
    await router.navigate(-1);
    assert.equal(router.state.matches.at(-1).params.lessonId, 'timing');
    await router.navigate('/section/basics/glossary');
    assert.equal(router.state.matches.at(-1).route.path, '/section/:sectionId/glossary');
    await router.navigate('/unknown');
    assert.equal(router.state.matches.at(-1).route.path, '*');
  } finally { router.dispose(); }
});

test('contact email preserves fields with an offline JSON transport', async () => {
  // Importing server/server.js would verify SMTP and listen. Exercise the same
  // Nodemailer createTransport/sendMail API without opening a socket instead.
  const transport = nodemailer.createTransport({ jsonTransport: true });
  const info = await transport.sendMail({
    from: 'sender@example.invalid', to: 'owner@example.invalid',
    replyTo: 'visitor@example.invalid', subject: 'Contact: timing', text: 'Synthetic contact',
  });
  const message = JSON.parse(info.message);
  assert.equal(message.subject, 'Contact: timing');
  assert.equal(message.replyTo[0].address, 'visitor@example.invalid');
  assert.equal(message.text, 'Synthetic contact');
  transport.close();
});

test('PostCSS8 preserves declarations and custom properties', async () => {
  const result = await postcss([]).process(':root { --accent: #123; } .card { color: var(--accent); }', { from: undefined });
  assert.equal(result.root.nodes[1].nodes[0].value, 'var(--accent)');
  assert.equal(result.root.nodes[0].nodes[0].prop, '--accent');
});
