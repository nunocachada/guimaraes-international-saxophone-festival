import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** 1) PopPunch — cores primárias, contorno grosso + pop */
export function PopPunch({
  children,
  className,
  style,
  fontSize = 5,
  fill = "#FDE047",
  accent = "#EF4444",
  base = "#111827",
}) {
  if (typeof children !== "string")
    throw new Error("children must be a string");

  return (
    <motion.div
      className={cn("text-center select-none", className)}
      style={{
        fontSize: `${fontSize}rem`,
        fontFamily: "'Bangers','Impact','Comic Sans MS',system-ui,sans-serif",
        fontWeight: 900,
        letterSpacing: `${fontSize * 0.05}rem`,
        WebkitTextStroke: `${fontSize * 0.35}px ${base}`,
        textTransform: "uppercase",
        backgroundImage: `radial-gradient(circle at 2px 2px, ${accent} 1.2px, transparent 0), linear-gradient(${fill},${fill})`,
        backgroundSize: "10px 10px, 100% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        filter: `drop-shadow(${fontSize * 0.3}px ${
          fontSize * 0.3
        }px 0 ${base})`,
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
    >
      {children}
    </motion.div>
  );
}

/** 2) HalftoneWave — padrão “meia-tinta” e ondulação suave */
export function HalftoneWave({
  children,
  className,
  style,
  fontSize = 5,
  dots = "#22D3EE",
  bg = "#A78BFA",
  stroke = "#0F172A",
}) {
  if (typeof children !== "string")
    throw new Error("children must be a string");

  return (
    <motion.div
      className={cn("text-center select-none", className)}
      style={{
        fontSize: `${fontSize}rem`,
        fontFamily: "'Bangers','Impact','Comic Sans MS',sans-serif",
        fontWeight: 900,
        WebkitTextStroke: `${fontSize * 0.28}px ${stroke}`,
        textTransform: "uppercase",
        backgroundImage: `
          radial-gradient(circle at 1.5px 1.5px, ${dots} 1.2px, transparent 0),
          linear-gradient(135deg, ${bg} 0%, #F0ABFC 100%)
        `,
        backgroundSize: "7px 7px, 100% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        filter: `
          drop-shadow(0.4rem 0.4rem 0 ${stroke})
          drop-shadow(0.7rem 0.7rem 0 rgba(0,0,0,0.25))
        `,
        ...style,
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ rotate: [0, -2, 2, 0] }}
      transition={{ duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] }}
    >
      {children}
    </motion.div>
  );
}

/** 3) StickerBoom — aspeto “autocolante recortado” com sombra */
export function StickerBoom({
  children,
  className,
  style,
  fontSize = 5,
  fill = "#34D399",
  outline = "#000000",
  rim = "#FFFFFF",
}) {
  if (typeof children !== "string")
    throw new Error("children must be a string");

  return (
    <motion.div
      className={cn("text-center select-none", className)}
      style={{
        fontSize: `${fontSize}rem`,
        fontFamily: "'Bangers','Impact','Comic Sans MS',sans-serif",
        fontWeight: 900,
        textTransform: "uppercase",
        color: rim,
        WebkitTextStroke: `${fontSize * 0.52}px ${rim}`,
        filter: `drop-shadow(${fontSize * 0.25}rem ${
          fontSize * 0.25
        }rem 0 ${outline})`,
        position: "relative",
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 15 }}
    >
      <span
        style={{
          backgroundImage: `linear-gradient(180deg, ${fill}, #10B981)`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: `${fontSize * 0.3}px ${outline}`,
          padding: `0 ${fontSize * 0.1}rem`,
        }}
      >
        {children}
      </span>
    </motion.div>
  );
}

/** 4) NeonZap — vibe arcada/retro com brilho e “zap” */
export function NeonZap({
  children,
  className,
  style,
  fontSize = 5,
  color = "#60A5FA",
}) {
  if (typeof children !== "string")
    throw new Error("children must be a string");

  return (
    <motion.div
      className={cn("text-center select-none", className)}
      style={{
        fontSize: `${fontSize}rem`,
        // fontFamily: "'Bangers','Impact','Comic Sans MS',sans-serif",
        fontWeight: 900,
        textTransform: "uppercase",
        color: color,
        textShadow: `
          0 0 ${fontSize * 0.2}rem ${color},
          0 0 ${fontSize * 0.25}rem ${color},
          0 0 ${fontSize * 0.3}rem ${color}
        `,
        WebkitTextStroke: `${fontSize * 0.18}px #000`,
        filter: `drop-shadow(${fontSize * 0.09}rem ${
          fontSize * 0.09
        }rem 0 #000)`,
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

/** 5) BubbleBang — letras “borbulha” com bounce */
export function BubbleBang({
  children,
  className,
  style,
  fontSize = 5,
  fill1 = "#FB7185",
  fill2 = "#F472B6",
}) {
  if (typeof children !== "string")
    throw new Error("children must be a string");

  return (
    <motion.div
      className={cn("text-center select-none", className)}
      style={{
        fontSize: `${fontSize}rem`,
        fontFamily: "'Bangers','Impact','Comic Sans MS',sans-serif",
        fontWeight: 900,
        textTransform: "uppercase",
        WebkitTextStroke: `${fontSize * 0.32}px #0B0B0B`,
        backgroundImage: `radial-gradient(circle at 30% 30%, #fff8 0%, transparent 45%),
                          linear-gradient(180deg, ${fill1}, ${fill2})`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        filter: `drop-shadow(${fontSize * 0.25}rem ${
          fontSize * 0.25
        }rem 0 #0B0B0B)`,
        ...style,
      }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: [-2, 2, -2, 0] }}
      transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
    >
      {children}
    </motion.div>
  );
}
