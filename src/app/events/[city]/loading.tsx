import CardSkelton from "@/components/cardSkelton";
import React from "react";

function Loading() {
  return (
    <div className="flex flex-wrap  max-w-[1100px] mx-auto px-[2px] py-2 gap-2 ">
      <CardSkelton />
      <CardSkelton />
      <CardSkelton />
      <CardSkelton />
    </div>
  );
}

export default Loading;
