/// Global type declarations
import { Canvas } from 'fabric';

declare global {
  type BaseShareMeta = {
    title: string;
    url: string;
    width: string;
    height: string;
  };

  type GenerateOptions = {
    name?: string;
    output?: 'canvas' | 'dataUrl';
    multiplifier?: number;
    theme: () => Promise<Canvas>;
  };
}
