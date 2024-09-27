/// Default theme
import { Canvas } from 'fabric';

// Types
type ThemeOptions = BaseShareMeta & {
  excerpt?: string;
  publishedAt?: string;
  category?: string;
  wordCount?: string;
  license?: string;
  titleFont?: string;
  contentFont?: string;
};

// Export theme
export default (options: ThemeOptions) => (): Promise<Canvas> => {
}
