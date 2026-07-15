"use client";

import { CheckCircle2, MonitorPlay } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { StreamWithProvider } from "../types/stream";

interface StreamCardProps {
  stream: StreamWithProvider;

  selected: boolean;

  onSelect: () => void;
}

export function StreamCard({
  stream,
  selected,
  onSelect,
}: StreamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)" }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Button
        variant={selected ? "default" : "outline"}
        onClick={onSelect}
        className={`
          w-full
          justify-between
          h-auto
          py-4
          relative
          overflow-hidden
          border-2
          transition-all duration-300
          ${selected
            ? "border-primary bg-primary text-primary-foreground shadow-lg"
            : "border-border hover:border-primary/50 hover:shadow-md"
          }
        `}
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: selected ? 0.1 : 0 }}
          className="flex items-center gap-3"
        >

          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <MonitorPlay
              size={18}
              className={selected ? "text-primary-foreground" : "text-muted-foreground"}
            />
          </motion.div>

          <div className="text-left">

            <p className="font-medium">
              Stream {stream.streamNo}
            </p>

            <p className="text-xs text-muted-foreground/70">
              {stream.language}
            </p>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex items-center gap-2"
        >

          {stream.hd && (
            <Badge
              variant={selected ? "secondary" : "default"}
              className="
                text-xs
                font-semibold
                px-2 py-0.5
                bg-yellow-400/20 text-yellow-600
                border-yellow-400/30
              "
            >
              HD
            </Badge>
          )}

          <Badge
            variant="secondary"
            className="
              text-xs
              font-medium
              px-2.5 py-0.5
              bg-muted/50
              text-muted-foreground
              border-border/30
            "
          >
            {stream.provider}
          </Badge>

          {selected && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15, type: "spring" }}
            >
              <CheckCircle2
                size={18}
                className="text-primary-foreground"
              />
            </motion.div>
          )}

        </motion.div>

      </Button>
    </motion.div>
  );
}