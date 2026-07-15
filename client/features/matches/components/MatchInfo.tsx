import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Match } from "../types/match";

interface MatchInfoProps {
  match: Match;
}

export function MatchInfo({
  match,
}: MatchInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
    >
      <Card className="p-6 border-border/50 shadow-lg bg-card/50 backdrop-blur">

        <motion.h2
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg font-semibold text-foreground mb-4"
        >
          Match Details
        </motion.h2>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4"
        >

          <InfoItem
            label="Title"
            value={match.title}
            delay={0.2}
          />

          <InfoItem
            label="Category"
            value={
              <Badge variant="secondary" className="capitalize border-0 bg-muted/50 text-muted-foreground">
                {match.category}
              </Badge>
            }
            delay={0.25}
          />

          <InfoItem
            label="Popular"
            value={match.popular ? "Yes" : "No"}
            delay={0.3}
            highlight={match.popular}
          />

          <InfoItem
            label="Sources"
            value={match.sources.length.toString()}
            delay={0.35}
          />

        </motion.dl>

      </Card>
    </motion.div>
  );
}

interface InfoItemProps {
  label: string;
  value: string | React.ReactNode;
  delay?: number;
  highlight?: boolean;
}

function InfoItem({ label, value, delay = 0, highlight = false }: InfoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="flex flex-col"
    >
      <dt className="text-muted-foreground/70">{label}</dt>
      <dd className={`mt-1 font-medium ${highlight ? "text-green-600 dark:text-green-500" : ""}`}>
        {value}
      </dd>
    </motion.div>
  );
}
