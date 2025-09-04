const { spawn } = require('child_process');
const path = require('path');

console.log('Installing dependencies for Shopping App...');

// Install backend dependencies
console.log('Installing backend dependencies...');
const backendInstall = spawn('npm', ['install'], {
  cwd: path.join(__dirname, 'backend'),
  stdio: 'inherit'
});

backendInstall.on('close', (code) => {
  if (code === 0) {
    console.log('Backend dependencies installed successfully!');
    
    // Install frontend dependencies
    console.log('Installing frontend dependencies...');
    const frontendInstall = spawn('npm', ['install'], {
      cwd: path.join(__dirname, 'frontend'),
      stdio: 'inherit'
    });
    
    frontendInstall.on('close', (code) => {
      if (code === 0) {
        console.log('Frontend dependencies installed successfully!');
        console.log('All dependencies installed!');
      } else {
        console.error('Failed to install frontend dependencies');
      }
    });
  } else {
    console.error('Failed to install backend dependencies');
  }
});