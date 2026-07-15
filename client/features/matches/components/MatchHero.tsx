import { format } from "date-fns";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

import { TeamBadge } from "@/features/images/components";

import { Match } from "../types/match";

interface MatchHeroProps {
  match: Match;
  isLive: boolean;
}

export function MatchHero({
  match,
  isLive,
}: MatchHeroProps) {
  const hasTeams = match.teams?.home || match.teams?.away;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        rounded-2xl
        border
        bg-card
        p-6
        shadow-xl
        border-border/50
        backdrop-blur supports-[backdrop-filter]:bg-card/60
      "
    >

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex items-center justify-between gap-4"
      >

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15, type: "spring", stiffness: 300 }}
        >
          <Badge
            variant={isLive ? "default" : "secondary"}
            className={
              isLive
                ? `
                  bg-gradient-to-r from-red-500 to-red-600
                  text-white
                  border-0
                  px-3 py-1.5
                  text-xs font-semibold
                  shadow-lg
                  ring-1 ring-red-500/20
                `
                : undefined
            }
          >
            {isLive ? "LIVE" : match.category}
          </Badge>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-sm text-muted-foreground/70"
        >
          {format(new Date(match.date), "EEE, MMM d • hh:mm a")}
        </motion.span>

      </motion.div>

      {hasTeams ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-1 flex items-center justify-center gap-8 sm:gap-16"
        >

          <motion.div
            className="flex flex-col items-center gap-3"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <TeamBadge
                badge={match.teams?.home?.badge}
                name={match.teams?.home?.name}
                size={72}
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="text-center text-sm font-medium sm:text-base text-foreground"
            >
              {match.teams?.home?.name}
            </motion.span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 300 }}
            className="
              text-2xl font-bold
              text-muted-foreground/80
              px-4
              bg-muted/50
              rounded-full
            "
          >
            VS
          </motion.span>

          <motion.div
            className="flex flex-col items-center gap-3"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <TeamBadge
                badge={match.teams?.away?.badge}
                name={match.teams?.away?.name}
                size={72}
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="text-center text-sm font-medium sm:text-base text-foreground"
            >
              {match.teams?.away?.name}
            </motion.span>
          </motion.div>

        </motion.div>
      ) : (
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-center text-2xl font-bold sm:text-3xl text-foreground"
        >
          {match.title}
        </motion.h1>
      )}

    </motion.div>
  );
}
