import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** 1) PopPunch Button — cores primárias, contorno grosso + pop */
export function PopPunchButton({
  children,
  className,
  onClick,
  disabled = false,
  fontSize = 1.5,
  fill = "#FDE047",
  accent = "#EF4444",
  base = "#111827",
  ...props
}) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === " ") && !disabled) {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold uppercase select-none cursor-pointer transition-all duration-200",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={{
        fontSize: `${fontSize}rem`,
        fontFamily: "'Bangers','Impact','Comic Sans MS',system-ui,sans-serif",
        fontWeight: 900,
        letterSpacing: `${fontSize * 0.05}rem`,
        backgroundColor: fill,
        border: `${fontSize * 0.2}rem solid ${base}`,
        borderRadius: `${fontSize * 0.3}rem`,
        backgroundImage: `radial-gradient(circle at 2px 2px, ${accent} 1.2px, transparent 0)`,
        backgroundSize: "10px 10px",
        filter: `drop-shadow(${fontSize * 0.3}px ${
          fontSize * 0.3
        }px 0 ${base})`,
        transform: "skewX(-2deg)",
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      aria-label={typeof children === "string" ? children : "Button"}
      initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      whileHover={!disabled ? { scale: 1.05, rotate: 1 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      {...props}
    >
      <span
        style={{
          color: base,
          WebkitTextStroke: `${fontSize * 0.1}px ${base}`,
          textShadow: `2px 2px 0px ${accent}`,
        }}
      >
        {children}
      </span>
    </motion.button>
  );
}

/** 2) HalftoneWave Button — padrão "meia-tinta" e ondulação suave */
export function HalftoneWaveButton({
  children,
  className,
  onClick,
  disabled = false,
  fontSize = 1.5,
  dots = "#22D3EE",
  bg = "#A78BFA",
  stroke = "#0F172A",
  ...props
}) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === " ") && !disabled) {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold uppercase select-none cursor-pointer transition-all duration-200",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={{
        fontSize: `${fontSize}rem`,
        fontFamily: "'Bangers','Impact','Comic Sans MS',sans-serif",
        fontWeight: 900,
        backgroundColor: bg,
        border: `${fontSize * 0.2}rem solid ${stroke}`,
        borderRadius: `${fontSize * 0.4}rem`,
        backgroundImage: `radial-gradient(circle at 1.5px 1.5px, ${dots} 1.2px, transparent 0)`,
        backgroundSize: "7px 7px",
        filter: `
          drop-shadow(0.4rem 0.4rem 0 ${stroke})
          drop-shadow(0.7rem 0.7rem 0 rgba(0,0,0,0.25))
        `,
        transform: "skewX(-1deg)",
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      aria-label={typeof children === "string" ? children : "Button"}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={!disabled ? { rotate: [0, -2, 2, 0], y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] }}
      {...props}
    >
      <span
        style={{
          color: stroke,
          WebkitTextStroke: `${fontSize * 0.15}px ${stroke}`,
          textShadow: `1px 1px 0px ${dots}`,
        }}
      >
        {children}
      </span>
    </motion.button>
  );
}

/** 3) StickerBoom Button — aspeto "autocolante recortado" com sombra */
export function StickerBoomButton({
  children,
  className,
  onClick,
  disabled = false,
  fontSize = 1.5,
  fill = "#34D399",
  outline = "#000000",
  rim = "#FFFFFF",
  ...props
}) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === " ") && !disabled) {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 font-bold uppercase select-none cursor-pointer transition-all duration-200",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={{
        fontSize: `${fontSize}rem`,
        fontFamily: "'Bangers','Impact','Comic Sans MS',sans-serif",
        fontWeight: 900,
        backgroundColor: fill,
        border: `${fontSize * 0.15}rem solid ${outline}`,
        borderRadius: `${fontSize * 0.3}rem`,
        filter: `drop-shadow(${fontSize * 0.25}rem ${
          fontSize * 0.25
        }rem 0 ${outline})`,
        position: "relative",
        transform: "skewX(-2deg)",
        overflow: "hidden",
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      aria-label={typeof children === "string" ? children : "Button"}
      initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      whileHover={!disabled ? { scale: 1.05, rotate: 1 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ type: "spring", stiffness: 220, damping: 15 }}
      {...props}
    >
      {/* Button highlight effect */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <span
        style={{
          backgroundImage: `linear-gradient(180deg, ${fill}, #10B981)`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: `${fontSize * 0.3}px ${outline}`,
          padding: `0 ${fontSize * 0.1}rem`,
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </span>
    </motion.button>
  );
}

/** 4) NeonZap Button — vibe arcada/retro com brilho e "zap" */
export function NeonZapButton({
  children,
  className,
  onClick,
  disabled = false,
  fontSize = 1.5,
  color = "#60A5FA",
  ...props
}) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === " ") && !disabled) {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold uppercase select-none cursor-pointer transition-all duration-200",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={{
        fontSize: `${fontSize}rem`,
        fontWeight: 900,
        backgroundColor: "transparent",
        border: `${fontSize * 0.15}rem solid ${color}`,
        borderRadius: `${fontSize * 0.3}rem`,
        boxShadow: `
          0 0 ${fontSize * 0.2}rem ${color},
          0 0 ${fontSize * 0.3}rem ${color},
          inset 0 0 ${fontSize * 0.1}rem ${color}
        `,
        filter: `drop-shadow(${fontSize * 0.09}rem ${
          fontSize * 0.09
        }rem 0 #000)`,
        transform: "skewX(-1deg)",
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      aria-label={typeof children === "string" ? children : "Button"}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={
        !disabled
          ? {
              scale: 1.04,
              boxShadow: `0 0 ${fontSize * 0.3}rem ${color}, 0 0 ${
                fontSize * 0.4
              }rem ${color}`,
            }
          : {}
      }
      whileTap={!disabled ? { scale: 0.96 } : {}}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <span
        style={{
          color: color,
          WebkitTextStroke: `${fontSize * 0.1}px #000`,
          textShadow: `
            0 0 ${fontSize * 0.1}rem ${color},
            0 0 ${fontSize * 0.2}rem ${color}
          `,
        }}
      >
        {children}
      </span>
    </motion.button>
  );
}

/** 5) BubbleBang Button — letras "borbulha" com bounce */
export function BubbleBangButton({
  children,
  className,
  onClick,
  disabled = false,
  fontSize = 1.5,
  fill1 = "#FB7185",
  fill2 = "#F472B6",
  ...props
}) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === " ") && !disabled) {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold uppercase select-none cursor-pointer transition-all duration-200",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={{
        fontSize: `${fontSize}rem`,
        fontFamily: "'Bangers','Impact','Comic Sans MS',sans-serif",
        fontWeight: 900,
        background: `linear-gradient(180deg, ${fill1}, ${fill2})`,
        border: `${fontSize * 0.2}rem solid #0B0B0B`,
        borderRadius: `${fontSize * 0.5}rem`,
        filter: `drop-shadow(${fontSize * 0.25}rem ${
          fontSize * 0.25
        }rem 0 #0B0B0B)`,
        transform: "skewX(-2deg)",
        position: "relative",
        overflow: "hidden",
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      aria-label={typeof children === "string" ? children : "Button"}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={!disabled ? { y: [-2, 2, -2, 0], scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
      {...props}
    >
      {/* Bubble highlight effect */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "20%",
          width: "30%",
          height: "30%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <span
        style={{
          color: "#0B0B0B",
          WebkitTextStroke: `${fontSize * 0.1}px #0B0B0B`,
          textShadow: `1px 1px 0px rgba(255,255,255,0.3)`,
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </span>
    </motion.button>
  );
}

/** Default Comic Button - Simple version matching the original ComicText style */
export function ComicButton({
  children,
  className,
  onClick,
  disabled = false,
  fontSize = 1.5,
  dotColor = "#EF4444",
  backgroundColor = "#FACC15",
  ...props
}) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === " ") && !disabled) {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold uppercase select-none cursor-pointer transition-all duration-200",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={{
        fontSize: `${fontSize}rem`,
        fontFamily: "'Bangers', 'Comic Sans MS', 'Impact', sans-serif",
        fontWeight: "900",
        backgroundColor: backgroundColor,
        backgroundImage: `radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 0)`,
        backgroundSize: "8px",
        border: `${fontSize * 0.2}rem solid #000000`,
        borderRadius: `${fontSize * 0.3}rem`,
        transform: "skewX(-10deg)",
        filter: `
          drop-shadow(5px 5px 0px #000000) 
          drop-shadow(3px 3px 0px ${dotColor})
        `,
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      aria-label={typeof children === "string" ? children : "Button"}
      initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      whileHover={!disabled ? { scale: 1.05, rotate: 2 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.275],
        type: "spring",
      }}
      {...props}
    >
      <span
        style={{
          color: "#000000",
          WebkitTextStroke: `${fontSize * 0.1}px #000000`,
          textShadow: `2px 2px 0px ${dotColor}`,
        }}
      >
        {children}
      </span>
    </motion.button>
  );
}
