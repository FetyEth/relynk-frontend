"use client";

import { fadeInUp, staggerContainer } from "@/lib/motion-variant";
import { CreditCard, FileText, Link, Lock, Wallet, Zap } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeaturesSection() {
  const featuresRef = useRef(null);

  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="w-full py-24 mt-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-main/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          ref={featuresRef}
          initial="initial"
          animate={featuresInView ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-20" variants={fadeInUp}>
            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-4 text-main"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.5 }}
            >
              Core Features
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Everything you need to monetize your content and build your Web3
              business
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-2 border-border shadow-lg hover:shadow-xl transition-all duration-300 h-full group bg-white">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center gap-4 text-lg">
                      <motion.div
                        className={`p-4 ${feature.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                      </motion.div>
                      <span className="group-hover:text-main transition-colors duration-300">
                        {feature.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Link,
    title: "Onchain Payment Links",
    description:
      "Generate smart contract-backed links to receive crypto payments. Fixed price, dynamic price, or donation-based.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: FileText,
    title: "Sell Digital Products",
    description:
      "Upload files to IPFS and deliver them automatically after payment confirmation. Perfect for eBooks, templates, and more.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Lock,
    title: "Token-Gated Access",
    description:
      "Give access to links, files, or pages once payment is completed. Use SBT/NFT as proof of purchase.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: CreditCard,
    title: "Mini Checkout Page",
    description:
      "Custom checkout page per product. Shows price, wallet connect, and pay button for seamless transactions.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: Wallet,
    title: "Easy Login",
    description:
      "User-friendly onboarding using Privy (Gmail, Telegram) plus EVM wallet support for maximum accessibility.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    description:
      "Content delivered automatically upon payment confirmation. No manual processing required.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
];
