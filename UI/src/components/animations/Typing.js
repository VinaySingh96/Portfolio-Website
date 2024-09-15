import React, { useState, useEffect } from 'react';

const typingSpeed = 100; // Speed of typing
const deletingSpeed = 50; // Speed of deleting
const pauseDuration = 1500; // Pause between texts

const TypingAnimation = ({texts}) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingTimer = setInterval(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          setTimeout(() => clearInterval(typingTimer), pauseDuration);
        }
      } else {
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));
        if (displayText === currentText) {
          setIsDeleting(true);
          setTimeout(() => clearInterval(typingTimer), pauseDuration);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(typingTimer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="text-4xl font-semibold text-headings whitespace-nowrap">
      <h2>{displayText}</h2>
    </div>
  );
};

export default TypingAnimation;
