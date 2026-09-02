import React from 'react';

interface Props {
  content: string;
}

export function StudyMaterial({ content }: Props) {
  return (
    <div className="prose max-w-none text-gray-800 bg-white rounded-lg shadow-sm p-6 md:p-10 text-justify" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
      {content}
    </div>
  );
}
