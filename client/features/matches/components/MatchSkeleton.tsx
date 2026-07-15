import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export function MatchSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        rounded-2xl
        border
        bg-card
        p-4
        space-y-4
        shadow-lg
        border-border/50
      "
    >

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "160px", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Skeleton className="h-full w-full rounded-2xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex items-center justify-between"
      >

        <Skeleton className="h-10 w-10 rounded-full" />

        <Skeleton className="h-5 w-20 rounded-full" />

        <Skeleton className="h-10 w-10 rounded-full" />

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="space-y-2"
      >
        <Skeleton className="h-4 w-3/4 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
      </motion.div>

    </motion.div>
  );
}