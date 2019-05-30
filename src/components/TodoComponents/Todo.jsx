import React from 'react';
import { tsPropertySignature } from '@babel/types';

export default function Todo({ item, toggleComplete }) {
  return (
    <div>
      <div
        style={item.completed ? { textDecoration: 'line-through' } : null}
        >
        {item.task}
      </div>
      <button onClick={() => toggleComplete(item.id)}>Mark as Complete</button>
    </div>
  );
}
