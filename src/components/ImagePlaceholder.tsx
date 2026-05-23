import { Image as ImageIcon, Palette, Layers, Sparkles } from 'lucide-react';

interface ImagePlaceholderProps {
  height?: number;
  title?: string;
  type?: 'product' | 'banner' | 'card' | 'hero' | 'logo' | 'general';
  className?: string;
  showIcon?: boolean;
}

export default function ImagePlaceholder({
  height = 300,
  title = 'Image',
  type = 'general',
  className = '',
  showIcon = true
}: ImagePlaceholderProps) {

  const placeholderStyles = {
    product: 'from-[#f8f9fa] to-[#e9ecef]',
    banner: 'from-[#1b2b3d] to-[#2d4a6a]',
    card: 'from-white to-[#f8f9fa]',
    hero: 'from-[#1b2b3d] via-[#b35b28] to-[#1b2b3d]',
    logo: 'from-white to-gray-100',
    general: 'from-gray-100 to-gray-200'
  };

  const textColors = {
    product: 'text-gray-700',
    banner: 'text-white',
    card: 'text-gray-600',
    hero: 'text-white',
    logo: 'text-gray-700',
    general: 'text-gray-600'
  };

  const iconColors = {
    product: 'text-[#b35b28]',
    banner: 'text-white/80',
    card: 'text-[#b35b28]',
    hero: 'text-white/80',
    logo: 'text-[#b35b28]',
    general: 'text-gray-500'
  };

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ width: '100%', height: '100%', minHeight: `${height}px` }}
    >
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${placeholderStyles[type]} animate-gradient-slow`}
      >
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 left-4 w-8 h-8 border-2 rounded-full" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-2 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-6 h-6 border rotate-45" />
        </div>

        {/* Animated shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center p-6 opacity-100 transition-opacity duration-300">
        {showIcon && (
          <div className="flex justify-center mb-3">
            {type === 'product' && <Layers className={`w-12 h-12 ${iconColors[type]} animate-pulse`} />}
            {type === 'banner' && <Sparkles className={`w-16 h-16 ${iconColors[type]} animate-pulse`} />}
            {type === 'card' && <Palette className={`w-10 h-10 ${iconColors[type]} animate-pulse`} />}
            {type === 'hero' && <Sparkles className={`w-20 h-20 ${iconColors[type]} animate-pulse`} />}
            {type === 'logo' && <ImageIcon className={`w-12 h-12 ${iconColors[type]} animate-pulse`} />}
            {type === 'general' && <ImageIcon className={`w-12 h-12 ${iconColors[type]} animate-pulse`} />}
          </div>
        )}

        <div className={`space-y-2 ${type === 'hero' || type === 'banner' ? 'bg-black/20 backdrop-blur-sm px-8 py-4 rounded-xl' : ''}`}>
          <h3 className={`text-lg font-semibold ${textColors[type]}`}>
            {title}
          </h3>
          <p className={`text-sm ${textColors[type]} ${type === 'hero' || type === 'banner' ? 'opacity-90' : 'opacity-70'}`}>
            {type === 'hero' && 'Premium Quality'}
            {type === 'banner' && 'Loading Beautiful Content'}
            {type === 'card' && 'Exquisite Collection'}
            {type === 'product' && 'Finest Fabric Selection'}
            {type === 'logo' && 'Brand Identity'}
            {type === 'general' && 'Loading...'}
          </p>
        </div>

        {/* Decorative corner elements for premium feel */}
        <div className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 ${type === 'hero' || type === 'banner' ? 'border-white/30' : 'border-gray-300/30'}`} />
        <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 ${type === 'hero' || type === 'banner' ? 'border-white/30' : 'border-gray-300/30'}`} />
        <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 ${type === 'hero' || type === 'banner' ? 'border-white/30' : 'border-gray-300/30'}`} />
        <div className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 ${type === 'hero' || type === 'banner' ? 'border-white/30' : 'border-gray-300/30'}`} />
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full animate-bounce ${type === 'hero' || type === 'banner' ? 'bg-white' : 'bg-[#b35b28]'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}