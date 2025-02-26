import Header from './header';
import Footer from './footer';
import '../styles/globals.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="w-full sm:w-[100%] md:w-[700px] lg:w-[980px] m-auto sm:p-4 md:p-0">
        {children}
      </div>
      <Footer />
    </div>
  );
}
