import React from "react";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex items-center shrink-0">
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={photoURL}
        alt={displayName}
      ></img>
      {/* 이름은 항상 숨겨져있다가 medium size가 되면 이름 보여지기 */}
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
}
