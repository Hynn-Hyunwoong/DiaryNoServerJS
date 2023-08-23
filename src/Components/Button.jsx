export const Button = ({ text, type, onClick }) => {
  const btnType = ['default', 'positive', 'negative'].includes(type)
    ? type
    : 'default';
  return (
    <button
      className={['Button', `Button_${btnType}`].join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'default',
};
