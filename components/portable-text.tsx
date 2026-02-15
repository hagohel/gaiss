"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-xl font-semibold mt-8 mb-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-semibold mt-6 mb-2">{children}</h3>,
    normal: ({ children }) => <p className="text-neutral-700 leading-relaxed my-3">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 my-4 text-neutral-700">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 my-4 text-neutral-700">{children}</ol>,
  },
  marks: {
    link: ({ value, children }) => (
      <a href={value?.href} className="underline underline-offset-4" target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
  },
};

export function PortableTextBlock({ value }: { value: any }) {
  return <PortableText value={value} components={components} />;
}
