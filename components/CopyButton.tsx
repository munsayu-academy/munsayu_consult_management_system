"use client";

export default function CopyButton({ className }: { className: string }) {
  function copy(event: React.MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;
    const text = button.closest("article")?.querySelector("p");
    if (!text) return;
    const done = (label: string) => {
      button.textContent = label;
      setTimeout(() => {
        button.textContent = "복사";
      }, 1600);
    };
    const fallback = () => {
      const range = document.createRange();
      range.selectNodeContents(text);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      done("선택됨");
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(text.textContent ?? "")
        .then(() => done("복사됨"), fallback);
    } else {
      fallback();
    }
  }
  return (
    <button className={className} type="button" onClick={copy}>
      복사
    </button>
  );
}
