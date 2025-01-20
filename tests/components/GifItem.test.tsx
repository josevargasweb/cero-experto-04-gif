import React from 'react';
import { describe, expect, test } from 'vitest';
import { render,screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => { 
  const title = "Goku";
  const url = "https://goku.com/goku.jpg";

  test('debe de hacer match con el snapshot', () => { 
    const { container } = render(<GifItem id={'1'} title={title} image={url} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
    render(<GifItem id={'1'} title={title} image={url} />);
    
    const { src, alt } = screen.getByRole('img') as HTMLImageElement;

    expect(src).toBe(url);
    expect(alt).toBe(alt);
    
  });

  test('debe de mostrar el titulo en el componente', () => { 

    render(<GifItem id={'1'} title={title} image={url} />);
    expect(screen.getByText(title)).toBeTruthy();
   })
});