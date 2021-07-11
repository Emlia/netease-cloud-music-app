export default function Mask({ show, onClickMask, children }) {
  if (!show) {
    return null;
  }
  return (
    <div
      onClick={onClickMask}
      className="fixed top-0 bottom-0 left-0 right-0 bg-gray-300"
    >
      {children}
    </div>
  );
}
