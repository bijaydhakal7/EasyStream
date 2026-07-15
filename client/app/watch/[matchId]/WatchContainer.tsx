"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { notFound } from "next/navigation";

import {
  MatchHero,
  MatchInfo,
} from "@/features/matches/components";

import { useMatch } from "@/features/matches/hooks/useMatch";
import { useLiveMatches } from "@/features/matches/hooks/useLiveMatches";

import {
  StreamPlayer,
  StreamSelector,
  StreamSkeleton,
} from "@/features/streams/components";

import { useStreams } from "@/features/streams/hooks/useStreams";
import { StreamWithProvider } from "@/features/streams/types/stream";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { AlertCircle } from "lucide-react";

interface WatchContainerProps {
  matchId: string;
}

export function WatchContainer({
  matchId,
}: WatchContainerProps) {
  /**
   * Match
   */
  const {
    data: match,
    isLoading: isMatchLoading,
    isError: isMatchError,
    refetch: refetchMatch,
  } = useMatch(matchId);

  /**
   * Live IDs
   */
  const {
    data: liveMatchIds = new Set<string>(),
  } = useLiveMatches();

  /**
   * Streams
   */
  const {
    data: streams = [],
    isLoading: isStreamsLoading,
    isError: isStreamsError,
    refetch: refetchStreams,
  } = useStreams({
    matchId,
    sources: match?.sources ?? [],
  });

  /**
   * Selected stream
   *
   * Derived instead of effect-driven: defaults to the
   * first (best-sorted) stream until the user picks one,
   * avoiding an extra render pass on every stream fetch.
   */
  const [selectedStream, setSelectedStream] =
    useState<StreamWithProvider | null>(null);

  const activeStream =
    (selectedStream &&
      streams.some((stream) => stream.id === selectedStream.id)
      ? selectedStream
      : streams[0]) ?? undefined;

  /**
   * Live status
   */
  const isLive = useMemo(() => {
    if (!match) return false;

    return liveMatchIds.has(match.id);
  }, [match, liveMatchIds]);

  /**
   * Match loading
   */
  if (isMatchLoading) {
    return (
      <main className="container py-8">
        <StreamSkeleton />
      </main>
    );
  }

  /**
   * Match error
   */
  if (isMatchError) {
    return (
      <main className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Alert variant="destructive" className="border-destructive/50">
            <AlertCircle className="h-5 w-5" />

            <AlertTitle>
              Failed to load match
            </AlertTitle>

            <AlertDescription className="mt-2">
              We couldn't load this match.

              <Button
                className="mt-4"
                onClick={() => refetchMatch()}
                variant="destructive"
                size="lg"
              >
                Try Again
              </Button>
            </AlertDescription>
          </Alert>
        </motion.div>
      </main>
    );
  }

  /**
   * Not found
   *
   * Triggers the nearest not-found.tsx boundary.
   * (Returning null here would just render nothing.)
   */
  if (!match) {
    notFound();
  }

  /**
   * Streams loading
   */
  if (isStreamsLoading) {
    return (
      <main className="container py-8 space-y-8">

        <MatchHero
          match={match}
          isLive={isLive}
        />

        <div className="mt-8">
          <StreamSkeleton />
        </div>

      </main>
    );
  }

  /**
   * Streams error
   */
  if (isStreamsError) {
    return (
      <main className="container py-8 space-y-8">

        <MatchHero
          match={match}
          isLive={isLive}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Alert variant="destructive" className="border-destructive/50">
            <AlertCircle className="h-5 w-5" />

            <AlertTitle>
              Failed to load streams
            </AlertTitle>

            <AlertDescription className="mt-2">

              <Button
                onClick={() => refetchStreams()}
                variant="destructive"
                size="lg"
              >
                Retry
              </Button>

            </AlertDescription>
          </Alert>
        </motion.div>

      </main>
    );
  }

  /**
   * No streams
   */
  if (!streams.length) {
    return (
      <main className="container py-8 space-y-8">

        <MatchHero
          match={match}
          isLive={isLive}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Alert className="border-border/50 bg-card/50 backdrop-blur">

            <AlertTitle>
              No Streams Available
            </AlertTitle>

            <AlertDescription>
              Please check back later.
            </AlertDescription>

          </Alert>
        </motion.div>

      </main>
    );
  }

  /**
   * Success
   */
  return (
    <AnimatePresence>
      <motion.main
        key={matchId}
        className="container py-8 space-y-10"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -20,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <MatchHero
          match={match}
          isLive={isLive}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <StreamPlayer
            stream={activeStream}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <StreamSelector
            streams={streams}
            selectedStream={activeStream}
            onSelect={setSelectedStream}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <MatchInfo
            match={match}
          />
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
}