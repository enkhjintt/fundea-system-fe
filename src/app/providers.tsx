// Providers.tsx
'use client';
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import NotificationProvider from '@/components/context/notification-context';
import ProgressHeaderBar from '@/components/progress-bar';
import { SessionProvider } from 'next-auth/react';
interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
       <AntdRegistry>
      <ConfigProvider
        theme={
          {
            // token: {
            //   colorPrimary: '#00A76F',
            // },
          }
        }
      >
        <NotificationProvider>
          <ProgressHeaderBar />
          {children}
        </NotificationProvider>
      </ConfigProvider>
    </AntdRegistry>
    </SessionProvider>
   
  );
};

export default Providers;
