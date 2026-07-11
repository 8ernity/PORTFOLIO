"use client";

import { useEffect, useRef } from "react";
import { liquidGlass, LiquidGlassOptions } from "../utils/liquidGlass";

export function useLiquidGlass<T extends HTMLElement = HTMLDivElement>(
  options?: LiquidGlassOptions,
  enabled = true
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (enabled && ref.current) {
      const glass = liquidGlass(ref.current, {
        scale: -140,
        chroma: 8,
        mapBlur: 20,
        blur: 2,
        saturate: 1.6,
        ...options,
      });
      return () => {
        if (glass && glass.destroy) glass.destroy();
      };
    }
  }, [enabled, options]);

  return ref;
}
