import {
  Music,
  Sparkles,
  Hand,
  Cpu,
  Lightbulb,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <div className="pointer-events-none absolute left-0 right-0 top-[-120px] h-[120vh] bg-[radial-gradient(120%_100%_at_50%_0%,rgba(224,122,47,0.22),transparent_70%),radial-gradient(80%_60%_at_100%_100%,rgba(242,194,97,0.18),transparent_70%)]" />

      <section className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
      
          
          <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl mb-4">
            Toca música con tus manos
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl">
            Basado en visión por computadora
          </p>
        </div>

        {/* Video Principal */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black">
            <VideoAuto
              src="/landing/video.mp4"
              className="w-full h-auto object-cover"
              aspect="16/9"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Tecnología MediaPipe */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tecnología <span className="text-[#FFC46B]">MediaPipe</span>
          </h2>
          
          {/* Imágenes MediaPipe */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black">
              <img 
                src="/image-web1.jpeg" 
                alt="MediaPipe Hand Tracking"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black">
              <img 
                src="/image-web2.jpeg" 
                alt="MediaPipe en tiempo real"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-300">
              Sistema de reconocimiento de gestos que detecta 21 puntos de tu mano 
              y los convierte en notas musicales instantáneamente.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-16 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E07A2F]/10 border border-[#E07A2F]/20 text-[#FFC46B] mb-3 mx-auto">
                <Hand className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">21 Puntos</h3>
              <p className="text-sm text-gray-400">Detección precisa de cada articulación</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E07A2F]/10 border border-[#E07A2F]/20 text-[#FFC46B] mb-3 mx-auto">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Tiempo Real</h3>
              <p className="text-sm text-gray-400">Procesamiento a +30 FPS</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E07A2F]/10 border border-[#E07A2F]/20 text-[#FFC46B] mb-3 mx-auto">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Sin Hardware</h3>
              <p className="text-sm text-gray-400">Solo necesitas una cámara</p>
            </div>
          </div>

          {/* Videos Demostración */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {[
              "/landing/vid2.webm",
              "/landing/vid5.webm",
            ].map((v, i) => (
              <div
                key={v}
                className="w-full rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-black"
              >
                <VideoAuto
                  src={v}
                  className="w-full h-auto object-cover"
                  aspect="16/9"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Cómo Funciona */}
        <div className="mt-20 bg-white/5 border border-white/10 rounded-3xl p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            ¿Cómo funciona?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-[#E07A2F] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Muestra tu mano</h3>
              <p className="text-gray-300 text-sm">
                La cámara captura tus movimientos
              </p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-[#E07A2F] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Haz gestos</h3>
              <p className="text-gray-300 text-sm">
                Cada seña es una nota musical
              </p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-[#E07A2F] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Crea música</h3>
              <p className="text-gray-300 text-sm">
                Suena instantáneamente
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/40 py-6 text-center text-sm text-gray-400">
        <p className="font-semibold text-white">SinfonIA</p>
        <p className="text-xs mt-1">© {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}

function VideoAuto({ src, className = "", aspect = "16/9" }) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      preload="metadata"
      className={className}
      style={{ aspectRatio: aspect }}
      controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
      disablePictureInPicture
    />
  );
}
