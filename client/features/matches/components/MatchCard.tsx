"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import {
  MatchPoster,
  TeamBadge,
} from "@/features/images/components";

import { Match } from "../types/match";

interface MatchCardProps {
  match: Match;
  isLive: boolean;
}

export function MatchCard({
  match,
  isLive,
}: MatchCardProps) {
  return (
    <Link href={`/watch/${match.id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <Card className="overflow-hidden group relative border-0 shadow-lg bg-card hover:shadow-2xl transition-shadow duration-300">

          <div className="relative">

            <MatchPoster
              poster={match.poster}
              title={match.title}
            />

            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
            >
              {isLive && (
                <Badge
                  className="
                    absolute left-3 top-3
                    bg-gradient-to-r from-red-500 to-red-600
                    text-white border-0
                    px-2.5 py-1
                    text-xs font-semibold
                    shadow-lg
                  "
                >
                  LIVE
                </Badge>
              )}
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="space-y-4 p-4"
          >

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex items-center justify-between"
            >

              <motion.div
                className="flex flex-col items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >

                <TeamBadge
                  badge={match.teams?.home?.badge}
                  name={match.teams?.home?.name}
                />

                <span className="text-xs font-medium text-muted-foreground">
                  {match.teams?.home?.name}
                </span>

              </motion.div>

              <motion.span
                className="
                  text-lg font-bold
                  text-muted-foreground/80
                  px-2
                "
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                VS
              </motion.span>

              <motion.div
                className="flex flex-col items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >

                <TeamBadge
                  badge={match.teams?.away?.badge}
                  name={match.teams?.away?.name}
                />

                <span className="text-xs font-medium text-muted-foreground">
                  {match.teams?.away?.name}
                </span>

              </motion.div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >

              <h3 className="font-semibold text-lg">
                {match.title}
              </h3>

              <p className="text-sm text-muted-foreground/60">

                {format(
                  new Date(match.date),
                  "EEE, MMM d • hh:mm a"
                )}

              </p>

            </motion.div>

          </motion.div>

        </Card>
      </motion.div>
    </Link>
  );
}