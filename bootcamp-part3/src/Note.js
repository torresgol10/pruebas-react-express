export const Note = ({ id, content, date }) => {
  return (
    <li key={id}>
      <p>
        <strong>{content}</strong>
      </p>
      <time>{date}</time>
    </li>
  );
};
