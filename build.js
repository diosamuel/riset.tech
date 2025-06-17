const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting build process...');

// Check if Tailwind CSS is installed
try {
    require.resolve('tailwindcss');
    console.log('✅ Tailwind CSS found');
} catch (e) {
    console.log('❌ Tailwind CSS not found. Please run: npm install');
    process.exit(1);
}

// Build Tailwind CSS
console.log('📦 Building Tailwind CSS...');
try {
    execSync('npx tailwindcss -i ./src/css/tailwind.css -o ./src/css/style.css --minify', { stdio: 'inherit' });
    console.log('✅ Tailwind CSS built successfully');
} catch (error) {
    console.error('❌ Error building Tailwind CSS:', error.message);
    process.exit(1);
}

// Build 11ty site
console.log('🏗️ Building 11ty site...');
try {
    execSync('npx @11ty/eleventy', { stdio: 'inherit' });
    console.log('✅ 11ty site built successfully');
} catch (error) {
    console.error('❌ Error building 11ty site:', error.message);
    process.exit(1);
}

console.log('🎉 Build completed successfully!');
console.log('📁 Output directory: _site/'); 