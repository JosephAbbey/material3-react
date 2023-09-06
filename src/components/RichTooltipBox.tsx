import React, {
  CSSProperties,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import './RichTooltipBox.css';
import { cls } from '~/utils';

export type RichTooltipBoxProps = PropsWithChildren<{
  title?: ReactNode;
  action?: ReactNode;
  content: ReactNode;
  persistent?: boolean;
  visible?: boolean;
  onDismiss?: () => void;
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
  onDismiss = () => {},
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
        persistent && visible && onDismiss && onDismiss();
      }
    };
    document.addEventListener('click', handle, true);
    return () => {
      document.removeEventListener('click', handle, true);
    };
  }, [onDismiss]);
  return (
    <div ref={ref} className='RichTooltipBox'>
      <div
        className={cls`RichTooltip ${{ persistent, visible }}`}
        style={style}>
        {title && <div className='RichTooltipSubhead'>{title}</div>}
        {content && <div className='RichTooltipSupportingText'>{content}</div>}
        {action && <div className='RichTooltipActions'>{action}</div>}
      </div>
      {children}
    </div>
  );
};
