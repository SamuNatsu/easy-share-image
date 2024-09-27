/// Main module
import { Canvas } from 'fabric';

// Functions
const download = (options: GenerateOptions, canvas: Canvas): void => {
  const el: HTMLAnchorElement = document.createElement('a');
  el.href = canvas.toDataURL({
    format: 'png',
    multiplier: options.multiplifier ?? 1
  });
  el.download = options.name ?? 'share.png';
  el.click();

  URL.revokeObjectURL(el.href);
};

export const generate = async (
  options: GenerateOptions
): Promise<void | Canvas | string> => {
  const output: Canvas = await options.theme();

  switch (options.output) {
    case undefined:
      download(options, output);
      return;
    case 'canvas':
      return output;
    case 'dataUrl':
      return output.toDataURL({
        format: 'png',
        multiplier: options.multiplifier ?? 1
      });
  }
};

// Export themes
export { themes } from '@/themes';
