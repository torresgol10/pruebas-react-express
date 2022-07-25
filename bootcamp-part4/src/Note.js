export const Note = ({ id, title, body }) => {
  return (
    <li key={id}>
      <p>
        <strong>{title}</strong>
      </p>
      <time>{body}</time>
    </li>
  );
};
