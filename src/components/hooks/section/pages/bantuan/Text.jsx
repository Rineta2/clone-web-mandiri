import React from "react";

export default function Text() {
  return (
    <div className="absolute top-[50%] translate-y-[-50%] left-[20.8%] flex flex-col gap-2">
      <h1
        className="text-5xl text-background mb-4"
        style={{
          lineHeight: "1.5",
        }}
      >
        Bantuan & FAQ
      </h1>

      <p className="text-[20px] text-background max-w-[70%]">
        Kami siap untuk melayani dan menjawab pertanyaan Anda.
      </p>
    </div>
  );
}
