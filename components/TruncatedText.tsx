'use client';

import { useEffect, useRef, useState } from 'react';

interface TruncatedTextProps {
  text: string;
  maxLines?: number;
  className?: string;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({
  text,
  maxLines = 3,
  className,
}) => {
  const [truncatedText, setTruncatedText] = useState(text);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
    const maxHeight = maxLines * lineHeight;
    if (element.scrollHeight > maxHeight) {
      let truncated = text;
      while (element.scrollHeight > maxHeight && truncated.length > 0) {
        truncated = truncated.slice(0, -1).trim();
        setTruncatedText(truncated + '...');
        element.textContent = truncated + '...';
      }
    }
  }, [text, maxLines]);

  return (
    <div
      ref={textRef}
      className={`w-[661px] overflow-hidden text-ellipsis leading-[1.5em] ${className}`}
      style={{ maxHeight: `${maxLines * 1.5}em` }}
    >
      {truncatedText}
    </div>
  );
};

export default TruncatedText;
