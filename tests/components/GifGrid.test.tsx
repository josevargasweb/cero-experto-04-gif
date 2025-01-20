import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { GiphyImage } from "../../src/models/giphy.models";

// Mock the useFetchGifs hook
vi.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => { 
  const category = 'One Punch';

  test('debe de mostrar el loading inicialmente', () => {

    vi.mocked(useFetchGifs).mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));

   });

   test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs : GiphyImage[] = [{
      id: 'ABC',
      title: 'Saitama',
      image: 'https://localhost/saitama.jpg'
    }]

    vi.mocked(useFetchGifs).mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(1);
      
   })
});