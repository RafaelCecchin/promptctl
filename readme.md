# PromptCTL 🤖⚙️ – Orchestrate AI prompts from system commands

PromptCTL is a **Node.js tool** that orchestrates **AI prompts** using **system command outputs** (Git, shell scripts, logs) to generate **technical summaries, reports and analyses** with Gemini. 🧠📄

Ideal for:

- Code change summaries
- Quarterly and audit reports
- Documentation
- Repository analysis
- Automated technical reporting

---

## How to use 🚀

### Step 1: Install Node.js 🟢

Make sure you have **Node.js v18 or higher** installed.

👉 https://nodejs.org/

---

### Step 2: Install PromptCTL 📦

Install dependencies:

```bash
npm install @rafaelcecchin/promptctl
```

---

### Step 3: Configure Gemini access 🔐

Create a config.json file in the project root:

```json
{
  "apiKey": "YOUR_GEMINI_API_KEY",
  "model": "gemini-2.5-flash",
  "codePath": "outputs",
  "prompts": {
    "prompt-test": {
      "prompt": "prompts/test.md",
      "cmd": [
        "git --no-pager log --since=\"2025-10-01\" --until=\"2025-12-31\" -p --diff-filter=d"
      ]
    }
  }
}
```

---

### Step 4: Create a prompt 🧩

Create a Markdown file inside `prompts/`:

```bash
Analyze the commits below and generate a structured technical summary.
```

---

### Step 5: Run PromptCTL ▶️

Execute a configured prompt:

```bash
npm run promptctl prompt-test
```
