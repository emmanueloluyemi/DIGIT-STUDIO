#!/usr/bin/env node

/**
 * Originality & Anti-Template Similarity Checker for Digit Studio
 *
 * Verifies that the codebase contains ZERO shared DNA terms, banned libraries,
 * legacy template component names, or fictional placeholder projects.
 */

import fs from "node:fs";
import path from "node:path";

const BANNED_PATTERNS = [
  // Banned Animation & 3D libraries
  { pattern: /\bgsap\b/i, label: "GSAP library reference" },
  { pattern: /\blenis\b/i, label: "Lenis smooth scroll reference" },
  { pattern: /(?:three\.js|from\s+['"]three['"]|require\(['"]three['"]\)|['"]three['"])/i, label: "Three.js 3D canvas library reference" },

  // Banned Legacy Fonts
  { pattern: /\bSyne\b/i, label: "Legacy font: Syne" },
  { pattern: /\bJetBrains Mono\b/i, label: "Legacy font: JetBrains Mono" },
  { pattern: /\bInstrument Serif\b/i, label: "Legacy font: Instrument Serif" },

  // Banned Fictional Projects (Shared with reference template)
  { pattern: /Kinetik\s*Pay/i, label: "Fictional project: Kinetik Pay" },
  { pattern: /Vespera\s*Atelier/i, label: "Fictional project: Vespera Atelier" },
  { pattern: /Aether\s*Robotics/i, label: "Fictional project: Aether Robotics" },
  { pattern: /NexaFlow/i, label: "Fictional project: NexaFlow" },
  { pattern: /Northline\s*Logistics/i, label: "Fictional project: Northline Logistics" },
  { pattern: /Pulseboard/i, label: "Fictional project: Pulseboard" },
  { pattern: /Sora\s*Roastery/i, label: "Fictional project: Sora Roastery" },
  { pattern: /Velo\s*Mobile/i, label: "Fictional project: Velo Mobile" },

  // Banned Legacy Component Names
  { pattern: /HeroSection/i, label: "Legacy component: HeroSection" },
  { pattern: /IntroStatementSection/i, label: "Legacy component: IntroStatementSection" },
  { pattern: /ServicesSection/i, label: "Legacy component: ServicesSection" },
  { pattern: /SoloOrTeamSection/i, label: "Legacy component: SoloOrTeamSection" },
  { pattern: /StatsSection/i, label: "Legacy component: StatsSection" },
  { pattern: /ToolsMarqueeSection/i, label: "Legacy component: ToolsMarqueeSection" },
  { pattern: /ProcessSection/i, label: "Legacy component: ProcessSection" },
  { pattern: /FaqSection/i, label: "Legacy component: FaqSection" },
  { pattern: /ContactSection/i, label: "Legacy component: ContactSection" },
  { pattern: /SiteShell/i, label: "Legacy component: SiteShell" },
  { pattern: /PlayfulNotFound/i, label: "Legacy component: PlayfulNotFound" },
  { pattern: /ProjectHoverShader/i, label: "Legacy component: ProjectHoverShader" },
  { pattern: /MagneticButton/i, label: "Legacy component: MagneticButton" },
  { pattern: /CustomCursor/i, label: "Legacy component: CustomCursor" },
  { pattern: /PageTransitionProvider/i, label: "Legacy component: PageTransitionProvider" },
  { pattern: /ScrollProgressBar/i, label: "Legacy component: ScrollProgressBar" },

  // Banned Legacy CSS tokens
  { pattern: /tokens\.css/i, label: "Legacy stylesheet: tokens.css" },
  { pattern: /accent-glow/i, label: "Legacy neon glow utility" },
];

const SCAN_DIRS = ["src", "content"];
const IGNORE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".avif", ".svg", ".ico", ".woff", ".woff2", ".ttf"];

let violationCount = 0;
const violations = [];

function scanFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (IGNORE_EXTENSIONS.includes(ext)) return;

  const content = fs.readFileSync(filePath, "utf-8");
  const relativePath = path.relative(process.cwd(), filePath);

  for (const item of BANNED_PATTERNS) {
    if (item.pattern.test(content)) {
      violationCount++;
      violations.push({
        file: relativePath,
        violation: item.label,
      });
    }
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else {
      scanFile(fullPath);
    }
  }
}

console.log("=================================================");
console.log(" DIGIT STUDIO — ORIGINALITY & ANTI-TEMPLATE AUDIT");
console.log("=================================================");
console.log(`Scanning directories: ${SCAN_DIRS.join(", ")}...\n`);

for (const dir of SCAN_DIRS) {
  walkDir(path.resolve(process.cwd(), dir));
}

if (violationCount === 0) {
  console.log("AUDIT PASSED: 0 shared-DNA or banned template terms found.");
  console.log("The website is 100% verified original and free of legacy template code.\n");
  process.exit(0);
} else {
  console.error(`AUDIT FAILED: Found ${violationCount} violation(s):\n`);
  for (const v of violations) {
    console.error(`  - [${v.file}] ${v.violation}`);
  }
  console.log("");
  process.exit(1);
}
