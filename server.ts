import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini API client if key is provided
let aiClient: GoogleGenAI | null = null;

if (process.env.GEMINI_API_KEY) {
  try {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    console.log("Gemini API client initialized successfully.");
  } catch (err) {
    console.warn("Failed to initialize Gemini client:", err);
  }
}

// ------------------------------------
// Health Check
// ------------------------------------

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    aiAvailable: !!aiClient,
  });
});

// ------------------------------------
// Login
// ------------------------------------

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      error: "Email and password are required.",
    });
    return;
  }

  const user = {
    id: "usr_" + Math.random().toString(36).substring(2, 8),

    name:
      email.split("@")[0].replace(".", " ") ||
      "Skill99 Learner",

    email,

    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150",

    role: "Learner",

    trackPreference:
      "Full Stack Web Engineering",

    joinedDate: new Date().toLocaleDateString(
      "en-US",
      {
        month: "short",
        year: "numeric",
      }
    ),
  };

  res.json({
    success: true,
    user,
  });
});

// ------------------------------------
// Signup
// ------------------------------------

app.post("/api/auth/signup", (req, res) => {
  const {
    name,
    email,
    password,
    trackPreference,
  } = req.body;

  if (!email || !password || !name) {
    res.status(400).json({
      error: "Name, email and password are required.",
    });
    return;
  }

  const user = {
    id:
      "usr_" +
      Math.random().toString(36).substring(2, 8),

    name,

    email,

    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150",

    role: "New Student",

    trackPreference:
      trackPreference ||
      "Full Stack Web Engineering",

    joinedDate: new Date().toLocaleDateString(
      "en-US",
      {
        month: "short",
        year: "numeric",
      }
    ),
  };

  res.json({
    success: true,
    user,
  });
});

// ------------------------------------
// AI Tutor
// ------------------------------------

app.post("/api/ai-tutor", async (req, res) => {
  try {
    const {
      prompt,
      topic,
      userRole,
    } = req.body;

    if (!prompt || typeof prompt !== "string") {
      res.status(400).json({
        error: "Prompt is required.",
      });
      return;
    }

    // --------------------------------
    // Gemini AI
    // --------------------------------

    if (aiClient) {
      const systemInstruction = `
You are Skill99's AI Learning Assistant & Career Mentor.

You help aspiring software engineers, developers, and technology learners.

Provide:
- Clear explanations
- Structured answers
- Bullet points
- Practical examples
- Recommended next steps
- Career guidance
- Learning roadmaps when useful

Topic:
${topic || "General Software Engineering"}

User role:
${userRole || "Learner"}

Keep responses concise, professional, encouraging, and useful for career preparation.
`;

      const response =
        await aiClient.models.generateContent({
          model: "gemini-3.6-flash",
          contents: prompt,
          config: {
            systemInstruction,
            temperature: 0.7,
          },
        });

      const text =
        response.text ||
        "I'm ready to help you level up your skills. Ask me anything about programming, projects, or career preparation!";

      res.json({
        response: text,
        provider: "gemini",
      });

      return;
    }

    // --------------------------------
    // Fallback response
    // --------------------------------

    let fallbackText = "";

    const lowerPrompt =
      prompt.toLowerCase();

    // Full Stack
    if (
      lowerPrompt.includes("full-stack") ||
      lowerPrompt.includes("full stack")
    ) {
      fallbackText = `
### 🚀 Full-Stack Developer Career Path on Skill99

Here is your recommended step-by-step roadmap:

1. **Frontend Fundamentals**
   - HTML5
   - CSS3
   - Flexbox and Grid
   - Responsive Design
   - JavaScript ES6+
   - Promises
   - Async/Await
   - React
   - TypeScript

2. **Backend Development**
   - Node.js
   - Express.js
   - REST APIs
   - Authentication
   - JWT
   - OAuth
   - Database fundamentals

3. **Production Projects**
   - Build a Full-Stack E-Commerce Platform
   - Build a Task Management Application
   - Build a Learning Management System
   - Add authentication and authorization

4. **Career Preparation**
   - Git and GitHub
   - Docker
   - CI/CD
   - Data Structures and Algorithms
   - System Design
   - Portfolio development

**Skill99 Recommendation:**
Start with Full Stack Web Development and build projects while learning.
`;
    }

    // React
    else if (
      lowerPrompt.includes("useeffect") ||
      lowerPrompt.includes("react")
    ) {
      fallbackText = `
### 💡 Mastering React useEffect

The useEffect hook is used to synchronize a React component with external systems.

Common uses include:

- API calls
- Event listeners
- Subscriptions
- Timers
- DOM interactions

Example:

\`\`\`typescript
import {
  useEffect,
  useState
} from "react";

function UserProfile({
  userId
}: {
  userId: string;
}) {
  const [user, setUser] =
    useState<any>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchUser() {
      const response =
        await fetch(
          \`/api/users/\${userId}\`
        );

      const data =
        await response.json();

      if (isMounted) {
        setUser(data);
      }
    }

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  return (
    <div>
      {user
        ? user.name
        : "Loading..."}
    </div>
  );
}
\`\`\`

### 3 Important Rules

1. Include required dependencies.
2. Clean up subscriptions and listeners.
3. Avoid unnecessary useEffect usage for derived state.
`;
    }

    // Python / Data / AI
    else if (
      lowerPrompt.includes("python") ||
      lowerPrompt.includes("data") ||
      lowerPrompt.includes("ai")
    ) {
      fallbackText = `
### 🐍 Python & Data Engineering Strategy

#### Week 1 — Python Fundamentals

- Variables
- Functions
- Lists
- Dictionaries
- Sets
- Tuples
- Loops
- Object-Oriented Programming

#### Week 2 — Data Processing

- NumPy
- Pandas
- Data Cleaning
- DataFrames
- Data Visualization

#### Week 3 — AI & Machine Learning

- Scikit-learn
- Regression
- Classification
- Decision Trees
- Clustering
- Introduction to AI
- Prompt Engineering
- LLM fundamentals

#### Week 4 — Portfolio Project

Build one practical project such as:

- Financial Analytics Dashboard
- AI Content Classifier
- Recommendation System
- Data Analysis Dashboard

Deploy the project and add it to your portfolio.
`;
    }

    // Default response
    else {
      fallbackText = `
### 🌟 Recommended Learning Path on Skill99

Thank you for your question!

Skill99 helps you develop practical technology skills through:

- **Structured Learning Modules**
  - Bite-sized lessons
  - Clear explanations
  - Practical examples

- **Hands-On Coding Challenges**
  - Practice programming
  - Solve coding problems
  - Get immediate feedback

- **Production Projects**
  - Build real-world applications
  - Create portfolio projects
  - Learn development workflows

- **Career Preparation**
  - Resume preparation
  - Interview preparation
  - DSA practice
  - Portfolio development

### Next Step

Continue learning and build projects related to:

- Web Development
- Full Stack Development
- Java
- Python
- React
- Data Analytics
- AI and Machine Learning
`;
    }

    res.json({
      response: fallbackText,
      provider: "fallback",
    });
  } catch (error) {
    console.error(
      "AI Tutor API Error:",
      error
    );

    res.status(500).json({
      error:
        "An error occurred while processing your query.",
    });
  }
});

// ------------------------------------
// Start Server
// ------------------------------------

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const {
      createServer: createViteServer,
    } = await import("vite");

    const vite =
      await createViteServer({
        server: {
          middlewareMode: true,
        },

        appType: "spa",
      });

    app.use(vite.middlewares);
  } else {
    const distPath = path.join(
      process.cwd(),
      "dist"
    );

    app.use(
      express.static(distPath)
    );

    app.get("*", (_req, res) => {
      res.sendFile(
        path.join(
          distPath,
          "index.html"
        )
      );
    });
  }

  // --------------------------------
  // LOCALHOST SERVER
  // --------------------------------

  app.listen(
    PORT,
    "localhost",
    () => {
      console.log(
        `Skill99 Server running on http://localhost:${PORT}`
      );
    }
  );
}

startServer();