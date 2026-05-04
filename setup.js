#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const baseDir = __dirname;

console.log('🚀 Starting Next.js 15 migration setup...\n');

// Create directories
const dirs = [
  'src/app',
  'src/components/motion',
  'src/components/ui',
  'src/components/decor',
  'src/components/sections',
  'src/lib',
];

console.log('📁 Creating directory structure...');
dirs.forEach(dir => {
  const fullPath = path.join(baseDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`  ✓ ${dir}`);
  }
});

// Import path mapping
const importMap = {
  'Button': 'ui',
  'Container': 'ui',
  'Eyebrow': 'ui',
  'Card': 'ui',
  'LenisProvider': 'motion',
  'Reveal': 'motion',
  'Stagger': 'motion',
  'Parallax': 'motion',
  'Marquee': 'motion',
  'CountUp': 'motion',
  'Blob': 'decor',
  'Orbit': 'decor',
  'FloatingShape': 'decor',
  'Navbar': 'sections',
  'Hero': 'sections',
  'LogoStrip': 'sections',
  'FeatureGrid': 'sections',
  'SplitFeature': 'sections',
  'Stats': 'sections',
  'Testimonials': 'sections',
  'CtaBanner': 'sections',
  'Footer': 'sections',
  'cn': 'lib',
};

// Update imports in a file
const updateImports = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let updated = false;

  for (const [name, category] of Object.entries(importMap)) {
    // Match imports like: import { Name } from '@/Name'
    const regex = new RegExp(`from ['"]@/${name}['"]`, 'g');
    if (regex.test(content)) {
      content = content.replace(
        regex,
        `from '@/components/${category}/${name}'`
      );
      updated = true;
    }
  }

  // Special case for StaggerItem which comes from Stagger
  const staggerRegex = /from ['"]@\/Stagger['"]/g;
  if (staggerRegex.test(content)) {
    content = content.replace(staggerRegex, `from '@/components/motion/Stagger'`);
    updated = true;
  }

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
};

// Move function with import update
const moveFile = (from, to) => {
  const fromPath = path.join(baseDir, from);
  const toPath = path.join(baseDir, to);
  if (fs.existsSync(fromPath)) {
    let content = fs.readFileSync(fromPath, 'utf-8');
    
    // Update imports before moving
    for (const [name, category] of Object.entries(importMap)) {
      const regex = new RegExp(`from ['"]@/${name}['"]`, 'g');
      content = content.replace(
        regex,
        `from '@/components/${category}/${name}'`
      );
    }

    fs.writeFileSync(toPath, content, 'utf-8');
    fs.unlinkSync(fromPath);
    return true;
  }
  return false;
};

const moveFiles = (files, dest) => {
  console.log(`\n📦 Moving ${dest} components...`);
  files.forEach(file => {
    if (moveFile(`src/${file}`, `src/components/${dest}/${file}`)) {
      console.log(`  ✓ ${file} → ${dest}/`);
    }
  });
};

// Move UI components
moveFiles(
  ['Button.tsx', 'Container.tsx', 'Eyebrow.tsx', 'Card.tsx'],
  'ui'
);

// Move motion components
moveFiles(
  [
    'LenisProvider.tsx', 'Reveal.tsx', 'Stagger.tsx', 'Parallax.tsx',
    'Marquee.tsx', 'CountUp.tsx'
  ],
  'motion'
);

// Move decor components
moveFiles(
  ['Blob.tsx', 'Orbit.tsx', 'FloatingShape.tsx'],
  'decor'
);

// Move section components - update their imports as we move
console.log('\n📦 Moving section components...');
const sectionFiles = [
  'Navbar.tsx', 'Hero.tsx', 'LogoStrip.tsx', 'FeatureGrid.tsx',
  'SplitFeature.tsx', 'Stats.tsx', 'Testimonials.tsx', 'CtaBanner.tsx',
  'Footer.tsx'
];
sectionFiles.forEach(file => {
  if (moveFile(`src/${file}`, `src/components/sections/${file}`)) {
    console.log(`  ✓ ${file} → sections/`);
  }
});

// Move lib
console.log('\n📚 Moving lib files...');
if (moveFile('src/cn.ts', 'src/lib/cn.ts')) {
  console.log('  ✓ cn.ts → lib/');
}

// Move app files
console.log('\n🏠 Creating app directory files...');
if (moveFile('app_layout.tsx', 'src/app/layout.tsx')) {
  console.log('  ✓ layout.tsx');
}
if (moveFile('app_page.tsx', 'src/app/page.tsx')) {
  console.log('  ✓ page.tsx');
}
if (moveFile('app_globals.css', 'src/app/globals.css')) {
  console.log('  ✓ globals.css');
}

// Delete old Astro files
console.log('\n🧹 Cleaning up old Astro files...');
const toDelete = ['src/layouts', 'src/pages', 'src/styles', '.astro', 'src/env.d.ts', 'astro.config.mjs'];
toDelete.forEach(file => {
  const fullPath = path.join(baseDir, file);
  try {
    if (fs.lstatSync(fullPath).isDirectory()) {
      fs.rmSync(fullPath, { recursive: true, force: true });
      console.log(`  ✓ Removed ${file}`);
    } else {
      fs.unlinkSync(fullPath);
      console.log(`  ✓ Removed ${file}`);
    }
  } catch (e) {
    // File doesn't exist, skip
  }
});

// Clean up old components folder if empty
try {
  const componentsPath = path.join(baseDir, 'src/components');
  const files = fs.readdirSync(componentsPath);
  if (files.every(f => fs.lstatSync(path.join(componentsPath, f)).isDirectory())) {
    // Only has subdirectories, good
  }
} catch (e) {
  // Ignore
}

// Clean temporary files
console.log('\n🗑️  Removing temporary setup files...');
const tempFiles = ['app_layout.tsx', 'app_page.tsx', 'app_globals.css', 'setup.bat'];
tempFiles.forEach(file => {
  const fullPath = path.join(baseDir, file);
  try {
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
      console.log(`  ✓ Removed ${file}`);
    }
  } catch (e) {
    // Ignore
  }
});

// Remove this setup script
try {
  fs.unlinkSync(__filename);
  console.log('  ✓ Removed setup.js');
} catch (e) {
  console.log('  ⚠ Could not remove setup.js (will need manual cleanup)');
}

// Install dependencies
console.log('\n📦 Installing npm dependencies...');
console.log('This may take a few minutes...\n');

try {
  execSync('npm install', {
    cwd: baseDir,
    stdio: 'inherit',
    env: process.env,
  });
  console.log('\n✅ Dependencies installed successfully!\n');
} catch (error) {
  console.error('❌ Error installing dependencies:', error.message);
  process.exit(1);
}

console.log('✨ Setup complete!\n');
console.log('🚀 Next steps:');
console.log('   1. npm run dev     - Start development server');
console.log('   2. Replace [BRAND] with your brand name throughout the codebase');
console.log('   3. Update content and images');
console.log('   4. npm run build   - Build for production\n');
