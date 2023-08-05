import React, {
  CSSProperties,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import './RichTooltipBox.css';

export type RichTooltipBoxProps = PropsWithChildren<{
  title?: ReactNode;
  action?: ReactNode;
  content: ReactNode;
  persistent?: boolean;
  visible?: boolean;
  onHide?: () => void;
  style?: CSSProperties;
}>;

/**
 * https://m3.material.io/components/switch/overview
 */
export const RichTooltipBox = ({
  title,
  action,
  content,
  persistent = false,
  visible = false,
  onHide = () => {},
  style,
  children,
}: RichTooltipBoxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handle = (ev: MouseEvent) => {
      if (
        ref.current &&
        ev.target &&
        !ref.current.contains(ev.target as Node)
      ) {
        persistent && visible && onHide && onHide();
      }
    };
    document.addEventListener('click', handle, true);
    return () => {
      document.removeEventListener('click', handle, true);
    };
  }, [onHide]);
  return (
    <div ref={ref} className='RichTooltipBox'>
      <div
        className={`RichTooltip ${persistent ? 'persistent' : ''} ${
          visible ? 'visible' : ''
        }`}
        style={style}>
        {title && <div className='RichTooltipTitle'>{title}</div>}
        {content && <div className='RichTooltipContent'>{content}</div>}
        {action && <div className='RichTooltipActions'>{action}</div>}
      </div>
      {children}
    </div>
  );
};
