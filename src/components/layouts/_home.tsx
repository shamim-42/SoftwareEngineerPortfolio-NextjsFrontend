import React from 'react';
import Footer from './footer';

interface Props {
  children: React.ReactNode;
  basicData: any;
}

export default function HomeLayout({ children, basicData }: Props) {
  return (
    <div className="flex min-h-screen flex-col transition-colors duration-150">
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
