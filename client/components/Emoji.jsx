import { Card } from "@heroui/react";

function Emoji() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-2">
      <h1 className="text-gray-600 uppercase text-sm">MADE App</h1>
      <EmojiPreview emoji={"😀"} />
      <EmojiSelect />
    </div>
  );
}

function EmojiPreview({ emoji }) {
  return <Card className="text-7xl p-4">{emoji}</Card>;
}

function EmojiSelect() {
  return <h1>Emoji Select</h1>;
}

export default Emoji;
