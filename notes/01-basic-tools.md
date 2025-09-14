# 📘 Summary: Basic Digital Literacy / Tools Fundamentals

---

## 🔹 1. Linux Bash / Terminal

**Purpose:** work with files and folders via command line (without graphical interface).

### Basic Commands

**File & Directory Operations:**
```bash
ls          # list folder contents
cd folder   # move into a folder
cd ..       # move one level up
mkdir name  # create a folder
rm file.txt # delete a file
rm -r folder # delete a folder with all its contents
```

**File Management:**
```bash
touch file.txt  # create an empty file
cat file.txt    # view file contents
nano file.txt   # open file in nano editor
cp file.txt backup.txt  # copy file
mv oldname.txt newname.txt  # rename/move file
```

### Terminal Navigation ASCII

```
/home/user/
├── Documents/
│   ├── project/
│   │   └── index.html
│   └── notes.txt
├── Desktop/
└── Downloads/

Commands:
pwd         # show current directory
ls -la      # detailed list with hidden files
cd ~        # go to home directory
```

⚡️ **Interview tip:** how to create/delete a file, difference between `rm` and `rm -r`, and what `sudo` means.

---

## 🔹 2. Git & GitHub

**Purpose:** version control system → saves changes in a project, enables teamwork.

### Basic Git Workflow

**Repository Setup:**
```bash
git init                    # initialize a repository
git clone <repo-url>        # clone existing repository
git status                  # check changes
```

**Making Changes:**
```bash
git add file               # stage a file for commit
git add .                  # stage all changes
git commit -m "msg"        # create a commit (save state)
git log                    # view commit history
git log --oneline          # compact commit history
```

### Branch Management

**Working with Branches:**
```bash
git branch                 # view branches
git branch feature-name    # create new branch
git checkout -b new-branch # create and switch to new branch
git checkout main          # switch to main branch
git merge branch           # merge a branch into current one
```

### Remote Repository

**GitHub Integration:**
```bash
git remote add origin <url> # connect to GitHub repo
git push origin main        # push changes to GitHub
git pull                    # pull changes from GitHub
git fetch                   # fetch changes without merging
```

### Git Workflow Diagram

```
Working Directory → Staging Area → Repository → Remote
     (git add)       (git commit)    (git push)
```

**Pull Request (PR):** a way to propose changes to a repository on GitHub for another developer to review.

⚡️ **Interview tip:** how to create a new branch, how to resolve a merge conflict, and difference between `git fetch` and `git pull`.

---

## 🔹 3. Markdown

**Purpose:** markup language for creating documentation (e.g., README.md on GitHub).

### Text Formatting

**Basic Syntax:**
```markdown
# H1 → big heading
## H2 → medium heading
### H3 → small heading

**bold text**
*italic text*
~~strikethrough~~
`inline code`
```

### Lists and Links

**Lists:**
```markdown
- Unordered item 1
- Unordered item 2
  - Nested item

1. Ordered item 1
2. Ordered item 2
   1. Nested ordered item
```

**Links and Images:**
```markdown
[Link text](https://google.com)
![Image alt](image.jpg)
[Link with title](https://google.com "Google Homepage")
```

### Code and Tables

**Code Blocks:**
```markdown
```javascript
function hello() {
  console.log("Hello World");
}
```
```

**Tables:**
```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

⚡️ **Interview tip:** how to create a link, lists, code blocks, and the difference between inline code and code blocks.

---

## 🔹 4. Internet / WWW, Protocols

### Web Architecture

**WWW (World Wide Web):** a system of interconnected resources (websites).

**Key Components:**
- **Client:** browser that requests resources
- **Server:** computer that serves web pages
- **Protocol:** rules for communication (HTTP/HTTPS)

### Network Protocols

**HTTP vs HTTPS:**
```
HTTP:  client ↔ server (unencrypted)
HTTPS: client ↔ server (encrypted with SSL/TLS)
```

**DNS (Domain Name System):** converts domain names into IP addresses
```
google.com → DNS → 142.250.190.78 → Server
```

### Client-Server Model

**Communication Flow:**
```
1. Client sends REQUEST  → Server
2. Server processes      → Database/Files
3. Server sends RESPONSE ← Client
```

**Common HTTP Methods:**
- `GET` - retrieve data
- `POST` - send data
- `PUT` - update data  
- `DELETE` - remove data

⚡️ **Interview tip:** difference between HTTP and HTTPS, what DNS does, and explain the client-server model with a real example.

---

## 🔹 5. Package Managers

### npm (Node Package Manager)

**Purpose:** manages JavaScript libraries and dependencies.

**Basic npm Commands:**
```bash
npm init                   # create package.json
npm install package        # install a package locally
npm install -g package     # install globally
npm uninstall package      # remove a package
npm list                   # show installed packages
npm outdated              # check for updates
```

### npx vs npm

**npx:** run packages without global installation
```bash
npm install create-react-app    # installs globally
npx create-react-app my-app     # runs without installing
```

### apt (Linux Package Manager)

**Advanced Package Tool (Linux):** manages system packages.

**Basic apt Commands:**
```bash
sudo apt update            # update package list
sudo apt upgrade           # upgrade all packages
sudo apt install package   # install a package
sudo apt remove package    # remove a package
sudo apt search keyword    # search for packages
```

### Package Manager Comparison

| Manager | Purpose | Platform | Example |
|---------|---------|----------|---------|
| npm | JavaScript packages | Cross-platform | `npm install react` |
| npx | Run packages | Cross-platform | `npx create-react-app` |
| apt | System packages | Debian/Ubuntu | `apt install git` |
| brew | System packages | macOS | `brew install node` |

⚡️ **Interview tip:** difference between npm and npx, when to use global vs local installation, and what package.json contains.

---

## 🔹 6. GitHub Pages

**Purpose:** free hosting for static websites.

### Deployment Steps

**Method 1: Repository Settings**
1. Create a repository on GitHub
2. Upload website files (index.html, CSS, JS)
3. Go to Settings → Pages
4. Choose source branch (main) and folder (root or /docs)
5. Get link: `https://username.github.io/repo-name/`

**Method 2: Special Repository**
1. Create repository named: `username.github.io`
2. Upload files to main branch
3. Access at: `https://username.github.io/`

### File Structure Example

```
my-portfolio/
├── index.html
├── style.css
├── script.js
├── images/
│   └── profile.jpg
└── README.md
```

### GitHub Pages Limitations

- **Static sites only** (HTML, CSS, JS)
- **No server-side processing** (PHP, Python backends won't work)
- **File size limits** (repositories should be < 1GB)

⚡️ **Interview tip:** how to deploy a website for free, difference between static and dynamic websites, and alternatives to GitHub Pages (Netlify, Vercel).

---

## 🔹 7. Development Workflow

### Project Setup Workflow

**Complete Project Setup:**
```bash
# 1. Create project folder
mkdir my-project
cd my-project

# 2. Initialize Git
git init
git branch -M main

# 3. Create basic files
touch index.html style.css script.js README.md

# 4. Initialize npm (if using JS packages)
npm init -y

# 5. Create .gitignore
echo "node_modules/" > .gitignore
```

### Version Control Best Practices

**Commit Message Format:**
```
feat: add new feature
fix: bug fix
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add tests
```

⚡️ **Interview tip:** describe a typical development workflow from project creation to deployment, and explain why version control is important.

---

## ✅ Summary of the block

You should confidently:

- **Work with the terminal** (navigate, create/delete files and folders)
- **Know basic Git commands** (init, add, commit, push, pull, branching)
- **Write documentation in Markdown** (headers, lists, links, code blocks)
- **Understand how the Internet works** (HTTP/HTTPS, DNS, client-server model)
- **Use package managers** (npm/npx for JS, apt for Linux)
- **Deploy websites on GitHub Pages** (static hosting, repository setup)
- **Follow development workflow** (project setup, version control, deployment)