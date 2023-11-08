import { TypeAnimation } from 'react-type-animation';

const TypeAnimations = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        " I'm a Web Developer  ",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "I'm a Document Controller",
        1000,
        "I'm a Data Entry Operator",
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default TypeAnimations