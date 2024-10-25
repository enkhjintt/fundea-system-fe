import Button from '@/components/button';
import { NotificationContext } from '@/components/context/notification-context';
import CheckCircleIcon from '@/components/icons/check-circle-icon';
import InfoCircle01Icon from '@/components/icons/info-circle-icon';
import XCircleIcon from '@/components/icons/x-circle-icon';
import XCloseIcon from '@/components/icons/x-close-icon';

import { useCallback, useContext, useId } from 'react';

const NotificationMessage: React.FC<
  {
    description?: string;
    custom?: React.ReactNode;
    onClick: () => void;
  } & {
    type: 'success' | 'info' | 'error';
  }
> = ({ onClick, description, custom, ...rest }) => {
  let icon = <CheckCircleIcon />;
  let title = 'Амжилттай';

  switch (rest.type) {
    case 'success':
      break;

    case 'info':
      icon = <InfoCircle01Icon />;
      title = 'Анхааруулга';
      break;

    case 'error':
      icon = <XCircleIcon />;
      title = 'Алдаа';
      break;
  }

  const notificationContent = (
    <>
      <div className="shrink-0 w-fit h-fit p-2.5 border border-gray-200 shadow-sm rounded-xl">
        {icon}
      </div>

      <div className="flex-1">
        <h1 className="font-semibold text-sm text-gray-900">{title}</h1>

        <p className="font-normal text-sm text-gray-500">
          {description && description}
        </p>
      </div>

      <Button
        variant="text"
        padding="link"
        icon={
          <XCloseIcon size="large" inverse inverseColor="stroke-gray-500" />
        }
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          onClick();
        }}
      />
    </>
  );

  return <div className="flex items-center gap-4">{notificationContent}</div>;
};

export function useNotification() {
  const key = useId();

  const { napi } = useContext(NotificationContext);

  if (!napi) {
    throw new Error('useNotification hook is must in NotificationProvider');
  }

  const style = `w-90 sm:w-120 p-4 bg-base-normal font-normal text-base text-gray-900 border border-gray-200 rounded-xl`;

  const success = useCallback(
    (description: string, custom?: React.ReactNode) => {
      napi.open({
        key,
        message: (
          <NotificationMessage
            type="success"
            description={description}
            custom={custom}
            onClick={() => napi.destroy(key)}
          />
        ),

        description: null,
        icon: null,
        closeIcon: null,
        duration: 3,
        className: style,
      });
    },
    [napi, key, style],
  );

  const info = useCallback(
    (description: string, custom?: React.ReactNode) => {
      napi.open({
        key,
        message: (
          <NotificationMessage
            type="info"
            description={description}
            custom={custom}
            onClick={() => napi.destroy(key)}
          />
        ),
        description: null,
        icon: null,
        closeIcon: null,
        duration: 3,
        className: style,
      });
    },
    [napi, key, style],
  );

  const error = useCallback(
    (description: string, custom?: React.ReactNode) => {
      napi.open({
        key,
        message: (
          <NotificationMessage
            type="error"
            description={description}
            custom={custom}
            onClick={() => napi.destroy(key)}
          />
        ),
        duration: 3,
        description: null,
        icon: null,
        closeIcon: null,
        className: style,
      });
    },
    [napi, key, style],
  );

  return {
    success,
    info,
    error,
  };
}
