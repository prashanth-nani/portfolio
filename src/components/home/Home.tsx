import React from 'react';
import Image from 'next/image';

function Home() {
  return (
    <div className="App">
      <div className="picture">
        <div className="picture-wrapper">
          <Image src="picture.jpg" alt="Prashanth" width={200} height={200} />
        </div>
      </div>
      <div className="intro">
        <div className="greet">Hi, my name is</div>
        <div className="name">Prashanth Banda.</div>
        <div className="what-i-do">I design and build scalable apps.</div>
        <div className="description">
          I&apos;m a software engineer based in Hyderabad, India specializing in architecting and
          building highly scalable and performant websites and applications.
        </div>
      </div>
    </div>
  );
}

export default Home;
