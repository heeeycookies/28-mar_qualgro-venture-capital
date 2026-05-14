import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { articleContent } from "@/data/articles";

export interface ArticleData {
  title: string;
  category: string;
  date: string;
  image?: string;
  url: string;
}

interface Props {
  article: ArticleData | null;
  onClose: () => void;
}

const ArticleModal = ({ article, onClose }: Props) => {
  useEffect(() => {
    if (!article) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [article, onClose]);

  const content = article ? articleContent[article.url] : null;

  return (
    <AnimatePresence>
      {article && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-navy/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] bg-background rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/95 backdrop-blur shadow-md hover:bg-muted text-primary flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>

            <div className="overflow-y-auto flex-1">
              {article.image && (
                <div className="w-full aspect-[16/8] overflow-hidden bg-muted">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6 sm:p-10">
                <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-emerald">
                  {article.category}
                </span>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight">
                  {article.title}
                </h2>
                <p className="mt-3 text-xs text-muted-foreground tracking-wide">{article.date}</p>

                <div className="mt-8 h-px bg-border" />

                {content ? (
                  <div
                    className="mt-8 article-prose font-body text-[15px] leading-relaxed text-foreground/90"
                    dangerouslySetInnerHTML={{ __html: content.html }}
                  />
                ) : (
                  <p className="mt-8 text-sm text-muted-foreground">Article content unavailable.</p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArticleModal;
