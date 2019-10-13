import React from 'react';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='picture'>
        <div className='picture-wrapper'>
          <img
            src={`${process.env.PUBLIC_URL}/static/images/picture.jpg`}
            alt='Prashanth'
          />
        </div>
      </div>
      <div className='intro'>
        <div className='greet'>Hi, my name is</div>
        <div className='name'>Prashanth Banda.</div>
        <div className='what-i-do'>I design and build scalable apps.</div>
        <div className='description'>
          I'm a software engineer based in Hyderabad, India specializing in
          architecting and building highly scalable and performant websites and
          applications.
        </div>
      </div>
    </div>
  );
};

export default App;
