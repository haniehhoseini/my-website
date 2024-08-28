'use client'
import React, { useState } from 'react';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/react';

export default function Home() {
  const [count, setCount] = useState(0); 
  const [write, setWrite] = useState('write');

  return (
    <>
      <h2 className='bg-black'>You wrote: {write}</h2>
      <Button onClick={() => setCount(count + 1)}>
        You clicked me {count} times
      </Button>
      <Input 
        value={write} 
        onChange={(e) => setWrite(e.target.value)}
      />
    </>
  );
}
