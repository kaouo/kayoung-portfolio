import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <motion.h1
        className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        데이터와 감성을 함께 읽는
        <br className="hidden sm:inline" /> 크로스 기능형 인재를 지향합니다.
      </motion.h1>
    </div>
  );
}
