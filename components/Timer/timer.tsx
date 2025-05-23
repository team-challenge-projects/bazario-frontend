import React from 'react';
import { useTimer } from 'react-timer-hook';

interface TimerProps {
  expiryTimestamp: Date;
}

export function Timer({ expiryTimestamp }: TimerProps) {
  const { seconds } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
    interval: 20,
  });

  return (
    <>
      <span>{seconds}</span>
    </>
  );
}
