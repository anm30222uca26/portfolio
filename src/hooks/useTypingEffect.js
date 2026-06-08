import { useState, useEffect } from 'react';

export function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 50, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.substring(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        const next = current.substring(0, text.length - 1);
        setText(next);
        if (next === '') {
          setIsDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}
