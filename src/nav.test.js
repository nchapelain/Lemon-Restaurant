// src/Nav.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Nav from './components/Header/Nav';

test('renders the navigation bar with the burger menu', () => {
  render(<Nav />);
  
  // Vérifie si le logo est présent
  const logoElement = screen.getByAltText(/Little Limon Restaurant/i);
  expect(logoElement).toBeInTheDocument();

  // Vérifie si le burger menu est présent
  const burgerElement = screen.getByAltText(/Toggle menu/i);
  expect(burgerElement).toBeInTheDocument();
});

test('toggles the menu when the burger icon is clicked', () => {
  render(<Nav />);
  
  // Cliquez sur l'icône du burger
  const burgerElement = screen.getByAltText(/Toggle menu/i);
  fireEvent.click(burgerElement);
  
  // Vérifie si la classe 'menuactif' est ajoutée
  const navElement = screen.getByRole('navigation');
  expect(navElement).toHaveClass('menuactif');
});