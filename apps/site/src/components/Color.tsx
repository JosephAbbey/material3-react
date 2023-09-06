import './Color.css';

export default function Color({
  color,
  text,
}: {
  color: string;
  text?: string;
}) {
  return (
    <span className='Color'>
      <div style={{ backgroundColor: color }}></div>
      {text ? <span>{text}</span> : <span className='mono'>{color}</span>}
    </span>
  );
}
