import React from 'react';

const Tag = ({ tag }: { tag: string }) => {
  return (
    <p className="mr-2 w-full text-center  text-secondary bg-[#3cdba233] p-3 rounded-2xl text-sm">
      {tag}
    </p>
  );
};

export default Tag;
