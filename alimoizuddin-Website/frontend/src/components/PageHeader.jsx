import React from "react";
import { motion } from "framer-motion";

// Small editorial section header used on every dedicated page.
export default function PageHeader({ kicker, title, italicWord, sub }) {
  const titleStr = title || "";
  let head = titleStr;
  let tail = "";
  if (italicWord && titleStr.includes(italicWord)) {
    const idx = titleStr.lastIndexOf(italicWord);
    head = titleStr.slice(0, idx).trim();
    tail = titleStr.slice(idx);
  }
  return (
    <header className="pt-32 md:pt-40 pb-12 md:pb-16 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
      {kicker && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="block w-12 h-px bg-[#C9A84C]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C9A84C]">
            {kicker}
          </span>
        </motion.div>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="font-serif text-[#F5F0E8] text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light tracking-[-0.02em] leading-[1.02]"
      >
        {italicWord && tail ? (
          <>
            {head}{" "}
            <span className="italic text-[#C9A84C]">{tail}</span>
          </>
        ) : (
          titleStr
        )}
      </motion.h1>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mt-8 max-w-3xl text-[#888880] text-lg md:text-xl leading-relaxed"
        >
          {sub}
        </motion.p>
      )}
    </header>
  );
}
