import React, { Children } from "react";
import Sidebar from '@/components/sidebar'

type Props = { children: React.ReactNode };

const layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
        <Sidebar />
      <div className="w-full">{props.children}</div>
    </div>
  );
};

export default layout;
