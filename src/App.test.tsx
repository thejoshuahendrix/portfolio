import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
const leftClick = { button: 0 }

test('should have Hendrix Software', () => {
  render(<App />);
  const hero = screen.getByText("Hendrix Software");
  expect(hero).toBeInTheDocument();
});

test('should have background', () => {
  render(<App />);
  const background = screen.getByTestId("background");
  expect(background).toBeInTheDocument();
});

test('should have homepage description', () => {
  render(<App />);
  const homepageText = screen.getByText('Welcome to my portfolio website. I am a fullstack developer currently working freelance. I love Typescript and React as my main stack.');
  expect(homepageText).toBeInTheDocument();
});

test('should have about page', () => {
  render(<App />);
  userEvent.click(screen.getByText(/about/i), leftClick);
  const aboutText = screen.getByText('About Me:');
  expect(aboutText).toBeInTheDocument();
});

test('should have contact page', () => {
  render(<App />);
  userEvent.click(screen.getByText(/contact/i), leftClick);
  const contactText = screen.getByText('Contact Me!');
  expect(contactText).toBeInTheDocument();
});

test('should have contact form', () => {
  render(<App />);
  const contactForm = screen.getByTestId('contactForm');
  expect(contactForm).toBeInTheDocument();
});

test('contact form should work with tab', () => {
  render(<App />);
  const nameInput = screen.getByTestId('nameInput');
  expect(nameInput).toBeInTheDocument();
  userEvent.click(nameInput, leftClick);
  expect(nameInput).toHaveFocus();
  userEvent.tab();
  const emailInput = screen.getByTestId('emailInput');
  expect(emailInput).toHaveFocus();
  userEvent.tab();
  const messageInput = screen.getByTestId('messageInput');
  expect(messageInput).toHaveFocus();
});

test('contact button should show email sent text when clicked', () => {
  render(<App />);
  const submitButton = screen.getByTestId('submitButton');
  userEvent.click(submitButton, leftClick);
  const sentText = screen.getByText('Email Sent!');
  expect(sentText).toBeInTheDocument();

});

test('should have portfolio page', () => {
  render(<App />);
  userEvent.click(screen.getByText(/works/i), leftClick);
  const contactText = screen.getByText('My Skills:');
  expect(contactText).toBeInTheDocument();
});

test('should have homepage description on return to homepage', () => {
  render(<App />);
  userEvent.click(screen.getByText(/hs/i), leftClick);
  const homepageText = screen.getByText('Welcome to my portfolio website. I am a fullstack developer currently working freelance. I love Typescript and React as my main stack.');
  expect(homepageText).toBeInTheDocument();
});

test('logo should have white class', () => {
  render(<App />);
  const logo = screen.getByText(/hs/i);
  expect(logo).toHaveClass('white');
});

test('logo should have hover color of red', () => {
  render(<App />);
  const logo = screen.getByText(/hs/i);
  userEvent.hover(logo);
  expect(logo).toHaveClass('red');
});

test('logo should go back to white on unhover', () => {
  render(<App />);
  const logo = screen.getByText(/hs/i);
  userEvent.unhover(logo);
  expect(logo).toHaveClass('white');
});

test('should have double click function on portfolio page', () => {
  render(<App />);
  userEvent.click(screen.getByText(/works/i), leftClick);
  const skilltext = screen.getByText('I work with Javascript and it is my jam.');
  userEvent.dblClick(skilltext, leftClick);
  const doubleclickText = screen.getByText('You double clicked me!')
  expect(doubleclickText).toBeInTheDocument();
});
