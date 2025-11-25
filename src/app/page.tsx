"use client";

import { ReactNode } from "react";

const sections: Array<{
  name: string;
  items?: Array<{ id: number; name: string }>;
}> = [
  {
    name: "Section 1",
    items: [
      { id: 1, name: "Item 1-1" },
      { id: 2, name: "Item 1-2" },
    ],
  },
  {
    name: "Section 2",
    items: [
      { id: 3, name: "Item 2-1" },
      { id: 4, name: "Item 2-2" },
    ],
  },
  { name: "Section 3" },
];

export default function Home() {
  return (
    <ol>
      {
        sections.reduce(
          (agg, section, index) => {
            if (!Array.isArray(section.items) || section.items.length === 0) {
              return agg;
            }
            agg.sections.push(
              <li key={index}>
                <p>Title: {section.name}</p>
                <ol>
                  {section.items.map((item) => {
                    /* this code is broken by the compiler */
                    const index = agg.itemIndex++;

                    /* this code works as expected */
                    // const index = agg.itemIndex;
                    // agg.itemIndex++;

                    return (
                      <li key={item.id}>
                        <p>Item: {item.name}</p>
                        <p>Index: {index}</p>
                      </li>
                    );
                  })}
                </ol>
              </li>,
            );
            return agg;
          },
          {
            sections: [] as ReactNode[],
            itemIndex: 1,
          },
        ).sections
      }
    </ol>
  );
}
