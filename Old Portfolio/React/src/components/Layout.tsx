import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import NebulaFollower from './NebulaFollower';
import CustomBackgroundEffects from './CustomBackgroundEffects';
import ChatAssistant from './ChatAssistant';
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Custom Background Effects */}
      <CustomBackgroundEffects />
      <NebulaFollower />
      <Navbar />
      <main className="flex-grow pt-4 px-4 sm:px-6 lg:px-8 max-w-[100vw] overflow-x-hidden mb-8 sm:mb-12 bg-transparent relative z-10">
        {children}
      </main>
      <Footer />
      {/* Chat Assistant */}
      <ChatAssistant />
    </div>
  );
};
export default Layout;