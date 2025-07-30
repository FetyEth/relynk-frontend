const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleOnHover = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  whileTap: { scale: 0.98 },
};

export { floatingAnimation, fadeInUp, staggerContainer, scaleOnHover };
