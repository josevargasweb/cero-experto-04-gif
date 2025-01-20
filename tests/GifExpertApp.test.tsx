import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    test('should ', () => {
        
        render( <GifExpertApp /> );
        screen.debug();


    });


});