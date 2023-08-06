import React, {
  CSSProperties,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import './BasicDialog.css';

export type BasicEmptyDialogProps = PropsWithChildren<{
  open?: boolean;
  onDismiss?: () => void;
  style?: CSSProperties;
}>;

/**
 * https://m3.material.io/components/switch/overview
 */
export const BasicEmptyDialog = ({
  open = false,
  onDismiss = () => {},
  style,
  children,
}: BasicEmptyDialogProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  // Eventlistener: trigger onclose when cancel detected
  const onCancel = useCallback<React.ReactEventHandler<HTMLDialogElement>>(
    (e) => {
      e.preventDefault();
      onDismiss();
    },
    [onDismiss]
  );

  // Eventlistener: trigger onclose when click outside
  const onClick = useCallback<React.ReactEventHandler<HTMLDialogElement>>(
    ({ target }) => {
      if (target === ref.current) onDismiss();
    },
    [onDismiss]
  );

  // when open changes run open/close command
  useEffect(() => {
    if (open) ref.current?.showModal();
    else ref.current?.close();
  }, [open]);

  return (
    <dialog
      className='_BasicDialog'
      ref={ref}
      onClose={onDismiss}
      onCancel={onCancel}
      onClick={onClick}>
      <div className='BasicDialog' style={style}>
        {children}
      </div>
    </dialog>
  );
};

export type BasicDialogProps = {
  icon?: ReactNode;
  title?: ReactNode;
  confirmButton: ReactNode;
  dismissButton?: ReactNode;
} & BasicEmptyDialogProps;

export const BasicDialog = ({
  icon,
  title,
  children,
  confirmButton,
  dismissButton,
  ...props
}: BasicDialogProps) => {
  return (
    <BasicEmptyDialog {...props}>
      {icon && <div className='BasicDialogIcon'>{icon}</div>}
      {title && <div className='BasicDialogTitle'>{title}</div>}
      {children && <div className='BasicDialogContent'>{children}</div>}
      <div className='BasicDialogButtons'>
        {confirmButton}
        {dismissButton}
      </div>
    </BasicEmptyDialog>
  );
};
