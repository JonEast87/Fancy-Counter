export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>You are limited! Buy Pro.</span>
      ) : (
        <span>Fancy Counter</span>
      )}
    </h1>
  );
}
