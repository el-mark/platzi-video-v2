import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

// const elemento = <div>Como puedo hacer para no estar solo?</div>;

render(<Media type="video" title="Que es responsive design?" author="Mark Harmsen Rivera" image="./images/covers/responsive.jpg"/>, app);