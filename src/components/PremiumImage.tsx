import { useState, useRef, useEffect } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

interface PremiumImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  type?: 'product' | 'banner' | 'card' | 'hero' | 'logo' | 'general';
  loading?: 'lazy' | 'eager';
  fallbackTitle?: string;
}

export default function PremiumImage({
  src,
  alt,
  className = '',
  width,
  height,
  type = 'general',
  loading = 'lazy',
  fallbackTitle
}: PremiumImageProps) {
  const [error, setError] = useState(false);
  const [loadingState, setLoadingState] = useState(loading === 'eager' ? false : true);
  const [isVisible, setIsVisible] = useState(loading === 'eager');
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loading === 'eager') {
      setIsVisible(true);
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    }
  }, [loading]);

  const handleLoad = () => {
    setLoadingState(false);
    setError(false);
  };

  const handleError = () => {
    setLoadingState(false);
    setError(true);
  };

  const getPlaceholderTitle = () => {
    if (fallbackTitle) return fallbackTitle;
    if (alt) return alt;
    switch (type) {
      case 'product': return 'Premium Product';
      case 'banner': return 'Hero Banner';
      case 'card': return 'Collection Card';
      case 'hero': return 'Hero Section';
      case 'logo': return 'Brand Logo';
      default: return 'Image Loading';
    }
  };

  if (!isVisible) {
    return (
      <div className={className} style={{ width: '100%', minHeight: `${height || 300}px` }} />
    );
  }

  if (error || loadingState) {
    return (
      <div className={className}>
        <ImagePlaceholder
          height={height}
          title={getPlaceholderTitle()}
          type={type}
          showIcon={true}
        />
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`transition-opacity duration-300 ${loadingState ? 'opacity-0' : 'opacity-100'} ${className}`}
      width={width}
      height={height}
      loading={loading}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}