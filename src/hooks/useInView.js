import { useState, useEffect, useRef } from 'react';

/**
 * 요소가 뷰포트에 들어왔을 때 true를 반환하는 훅
 * @param {Object} options - IntersectionObserver 옵션 (rootMargin, threshold 등)
 * @returns {[React.RefObject, boolean]} [ref, isInView]
 */
export function useInView(options = {}) {
  const {
    rootMargin = '0px 0px -80px 0px', // 하단 80px 전에 트리거 (조금 일찍 애니메이션)
    threshold = 0.1,
    triggerOnce = true,
  } = options;

  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, triggerOnce]);

  return [ref, isInView];
}
