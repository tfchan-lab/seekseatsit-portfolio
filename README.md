# SeekSeatSit Portfolio — Development Setup Guide

This project uses **Node.js 25.9.0** and **npm 11.12.1**.  
To make sure everyone on the team uses the *same versions*, we use **NVM for Windows**.

NVM = Node Version Manager  
It lets you install multiple versions of Node and switch between them easily.

This guide is written for teammates who are **not technical**.  
Just follow the steps exactly and you will be ready to run the project.

---

# 1. Install NVM for Windows

### Step 1 — Download NVM installer  
Go to the official NVM for Windows page:

https://github.com/coreybutler/nvm-windows/releases

Scroll down to **Assets** and download: `nvm-setup.exe`

### Step 2 — Run the installer  
Double‑click the file and follow the steps:

- Click **Next**
- Accept the license
- Keep all default settings
- Click **Install**
- Click **Finish**

### Step 3 — Restart your computer  
This ensures NVM is added to your system properly.

---

# 2. Install the correct Node.js version

After restart:

1. Open **Command Prompt**  
   (Press Start → type “cmd” → press Enter)

2. Install Node.js **25.9.0**: `nvm install 25.9.0`

3. Tell NVM to use this version: `nvm use 25.9.0`

4. Confirm Node and npm versions: `node -v` & `npm -v`

You should see: `node: 25.9.0` & `npm: 11.12.1` respectively

If yes — perfect.

---

# 3. Clone the project

If you haven’t cloned the repo yet, download and install Git:
https://git-scm.com/install/windows

Open Git Bash in an empty folder and clone:
`git clone https://github.com/tfchan-lab/seeksitseat-portfolio.git`

---

# 4. Install project dependencies
Open Windows Terminal (cmd only, **does not work** with Powershell) at `your-folder/seeksitseat-portfolio`

Run: `npm install`

This downloads everything the project needs.

---

# 5. Start the development server

After this initial install, you can now start the development server by running: `npm run dev` at `your-folder/seeksitseat-portfolio` at anytime.

Then open your browser and go to: http://localhost:3000 to see real-time preview, no need to restart server if you make some changes.
