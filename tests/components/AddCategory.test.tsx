import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import {AddCategory} from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

  test('debe de cambiar el valor de la caja de texto', () => {
      render(<AddCategory onNewCategory={() => {}} />);
      const input = screen.getByRole('textbox') as HTMLInputElement;

      fireEvent.input(input, {target: {value: 'Goku'}})

      expect(input.value).toBe('Goku');
  });

  test('debe de llamar onNewCategory si el input tiene un valor', () => { 
    const inputValue = 'Goku';
    const onNewCategory = vi.fn();

    render(<AddCategory onNewCategory={onNewCategory } />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form') as HTMLFormElement;

    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
   });

   test('no debe de llamar el onNewCategory si el input tiene solo espacios', () => { 
    const onNewCategory = vi.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form') as HTMLFormElement;
    const input = screen.getByRole('textbox') as HTMLInputElement;

    // Input with only spaces
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
})