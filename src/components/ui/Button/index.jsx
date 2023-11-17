import classNames from 'classnames';
import classes from './styles.module.css';

export function Button({ children, onClick}) {
  return (
    <button
      className={classNames(classes.button)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
