import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import CategoryButtons from '@/components/CategoryButtons';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col relative pb-32 lg:pb-0 overflow-x-hidden">
      <Header />
      <HeroSlider />
      <CategoryButtons />
      
      {/* Spacer for scrolling presentation */}
      <div className="h-screen bg-gray-50 flex flex-col items-center pt-24 space-y-4">
        <h2 className="text-2xl text-gray-500 font-medium">Sayfa İçeriği</h2>
        <p className="text-gray-400">Scroll test alanı / Page content placeholder</p>
      </div>

      <MobileBottomNav />
    </main>
  );
}
