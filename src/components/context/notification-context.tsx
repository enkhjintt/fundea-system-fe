'use client';

import { message, notification } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';
import { NotificationInstance } from 'antd/es/notification/interface';
import { type ReactNode, createContext } from 'react';

export const NotificationContext = createContext<{
  napi: NotificationInstance | null;
  mapi: MessageInstance | null;
}>({
  napi: null,
  mapi: null,
});

type IProps = {
  children: ReactNode;
};

export default function NotificationProvider({ children }: IProps) {
  const [napi, ncontextHolder] = notification.useNotification();
  const [mapi, mcontextHolder] = message.useMessage();

  return (
    <NotificationContext.Provider value={{ mapi, napi }}>
      {mcontextHolder}
      {ncontextHolder}

      {children}
    </NotificationContext.Provider>
  );
}
