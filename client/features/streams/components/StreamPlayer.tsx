"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { StreamWithProvider } from "../types/stream";

interface StreamPlayerProps {
  stream?: StreamWithProvider;
}

export function StreamPlayer({
  stream,
}: StreamPlayerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {!stream ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            aspect-video
            rounded-2xl
            border
            flex
            items-center
            justify-center
            text-muted-foreground
            bg-muted/30
            border-dashed
            hover:border-primary/50
            transition-all duration-300
          "
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Play
                size={48}
                className="text-primary"
              />
            </motion.div>
            <div className="text-center">
              <p className="text-lg font-medium">
                Select a stream
              </p>
              <p className="text-sm text-muted-foreground/60">
                Choose from available streams below
              </p>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, borderRadius: 0 }}
          animate={{ opacity: 1, borderRadius: "1rem" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="aspect-video"
        >

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="
              relative
              h-full
              w-full
              rounded-2xl
              overflow-hidden
              shadow-xl
              border-2
              border-border/50
            "
          >
            <iframe
              src={stream.embedUrl}
              title="Live Stream"
              allowFullScreen
              className="
                h-full
                w-full
                object-cover
                transition-all duration-300
              "
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="no-referrer"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="
                absolute inset-0
                bg-gradient-to-t from-black/30 via-transparent to-transparent
                pointer-events-none
              "
            />
          </motion.div>

        </motion.div>
      )}
    </motion.div>
  );
}