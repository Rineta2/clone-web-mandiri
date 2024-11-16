import React from "react";

export default function AccordionContent({ item }) {
  return (
    <div className="mt-12 flex flex-col gap-4">
      {item.name.map((subItem, index) => (
        <div key={index} className="mb-4">
          {subItem.title && (
            <h4 className="font-semibold mb-2 text-[18px]">{subItem.title}</h4>
          )}
          {subItem.desc &&
            (Array.isArray(subItem.desc) ? (
              subItem.desc.map((descItem, descIndex) => (
                <p key={descIndex} className="text-gray-700 text-[16px]">
                  {descItem}
                </p>
              ))
            ) : (
              <p className="text-gray-700 text-[16px]">{subItem.desc}</p>
            ))}
        </div>
      ))}

      {Array.isArray(item.list) && item.list.length > 0 && (
        <div>
          <h4 className="font-semibold mb-2 text-[18px]">Langkah-langkah:</h4>
          {item.list.map((listItem, listIndex) => (
            <div key={listIndex} className="mb-4">
              {listItem.name && (
                <p className="font-medium text-[16px]">{listItem.name}</p>
              )}
              {Array.isArray(listItem.list) && listItem.list.length > 0 && (
                <ul className="ml-4 list-disc">
                  {listItem.list.map((point, pointIndex) => (
                    <li key={pointIndex} className="mt-2 text-[16px]">
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {typeof listItem.list === "string" &&
                listItem.list.trim() !== "" && (
                  <p className="ml-4 mt-4 text-gray-700 text-[16px]">
                    {listItem.list}
                  </p>
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
