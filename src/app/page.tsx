import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import QuickContact from '@/components/QuickContact';
import CategoryButtons from '@/components/CategoryButtons';
import MobileBottomNav from '@/components/MobileBottomNav';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 w-full overflow-x-hidden">
      <Header />
      <HeroSlider />
      <div className="mt-12 xl:mt-20"></div>
      <QuickContact />
      <CategoryButtons />
      
      {/* Spacer for scrolling presentation */}
      <div className="h-screen bg-gray-50 flex flex-col items-center pt-24 space-y-4">
        <h2 className="text-2xl text-gray-500 font-medium">Sayfa İçeriği</h2>
        <p className="text-gray-400">Scroll test alanı / Page content placeholder</p>
      </div>

      <Footer />
      <MobileBottomNav />
    </main>
  );
}
