import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export function StreamSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Skeleton
          className="
          aspect-video
          w-full
          rounded-2xl
          "
        />
      </motion.div>

      {Array.from({
        length: 4,
      }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
        >
          <Skeleton
            className="
            h-20
            w-full
            rounded-2xl
            "
          />
        </motion.div>
      ))}

    </motion.div>
  );
}